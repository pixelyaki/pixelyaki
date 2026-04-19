import { promises as fs } from "node:fs";
import path from "node:path";
import { builtinModules } from "node:module";

const rootDir = process.cwd();
const packageJsonPath = path.join(rootDir, "package.json");
const lockfilePath = path.join(rootDir, "package-lock.json");
const outputDir = path.join(rootDir, "data");
const outputPath = path.join(outputDir, "open-source-licenses.json");
const sourceDirs = ["app", "components", "lib"];
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);
const importRegex =
  /(?:import|export)\s[\s\S]*?\sfrom\s*["']([^"']+)["']|import\(\s*["']([^"']+)["']\s*\)|require\(\s*["']([^"']+)["']\s*\)/g;

const builtinModuleSet = new Set(
  builtinModules.flatMap((moduleName) => [moduleName, moduleName.replace(/^node:/, "")])
);

function normalizeLicense(licenseValue) {
  if (typeof licenseValue === "string" && licenseValue.trim()) {
    return licenseValue.trim();
  }

  if (
    licenseValue &&
    typeof licenseValue === "object" &&
    "type" in licenseValue &&
    typeof licenseValue.type === "string" &&
    licenseValue.type.trim()
  ) {
    return licenseValue.type.trim();
  }

  return "UNKNOWN";
}

function normalizeRepositoryUrl(repository) {
  const rawValue =
    typeof repository === "string"
      ? repository
      : repository && typeof repository === "object" && typeof repository.url === "string"
        ? repository.url
        : "";

  if (!rawValue) return "";

  const raw = rawValue.trim();
  if (!raw) return "";

  if (/^git@github\.com:/.test(raw)) {
    return raw
      .replace(/^git@github\.com:/, "https://github.com/")
      .replace(/\.git(#.*)?$/, "");
  }

  if (/^[\w.-]+\/[\w.-]+(?:#.*)?$/.test(raw)) {
    return `https://github.com/${raw.replace(/#.*$/, "")}`;
  }

  return raw
    .replace(/^git\+/, "")
    .replace(/^git:\/\//, "https://")
    .replace(/^github:/, "https://github.com/")
    .replace(/\.git(#.*)?$/, "");
}

function extractNameFromPackagePath(packagePath) {
  const parts = packagePath.split("/node_modules/");
  return parts[parts.length - 1] ?? "";
}

function normalizeImportToPackageName(importPath) {
  if (importPath.startsWith("@")) {
    const [scope, name] = importPath.split("/");
    if (!scope || !name) return importPath;
    return `${scope}/${name}`;
  }

  const [name] = importPath.split("/");
  return name ?? importPath;
}

function getParentPackagePath(packagePath) {
  const parent = packagePath.replace(/\/node_modules\/(?:@[^/]+\/)?[^/]+$/, "");
  if (parent === packagePath) return "";
  return parent;
}

function resolveDependencyPath(lockPackages, fromPackagePath, dependencyName) {
  let currentPath = fromPackagePath;

  while (currentPath) {
    const candidate = `${currentPath}/node_modules/${dependencyName}`;
    if (lockPackages[candidate]) {
      return candidate;
    }
    currentPath = getParentPackagePath(currentPath);
  }

  const rootCandidate = `node_modules/${dependencyName}`;
  if (lockPackages[rootCandidate]) {
    return rootCandidate;
  }

  return null;
}

async function collectSourceFiles(directoryPath, acc) {
  let entries = [];
  try {
    entries = await fs.readdir(directoryPath, { withFileTypes: true });
  } catch {
    return;
  }

  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directoryPath, entry.name);
      if (entry.isDirectory()) {
        await collectSourceFiles(fullPath, acc);
        return;
      }

      if (!entry.isFile()) return;
      if (!sourceExtensions.has(path.extname(entry.name))) return;
      acc.push(fullPath);
    })
  );
}

async function collectUsedPackagesFromSource() {
  const files = [];
  for (const dir of sourceDirs) {
    await collectSourceFiles(path.join(rootDir, dir), files);
  }

  const packageNames = new Set();

  for (const filePath of files) {
    let code = "";
    try {
      code = await fs.readFile(filePath, "utf8");
    } catch {
      continue;
    }

    for (const match of code.matchAll(importRegex)) {
      const importPath = match[1] || match[2] || match[3] || "";
      if (!importPath) continue;
      if (importPath.startsWith(".") || importPath.startsWith("/") || importPath.startsWith("@/")) {
        continue;
      }
      if (importPath.startsWith("node:")) continue;

      const packageName = normalizeImportToPackageName(importPath);
      if (!packageName) continue;
      if (builtinModuleSet.has(packageName)) continue;
      packageNames.add(packageName);
    }
  }

  return packageNames;
}

async function readJson(filePath) {
  const text = await fs.readFile(filePath, "utf8");
  return JSON.parse(text);
}

function comparePackages(a, b) {
  const byName = a.name.localeCompare(b.name);
  if (byName !== 0) return byName;
  return a.version.localeCompare(b.version);
}

async function main() {
  const [packageJson, lockfile, sourceUsedPackages] = await Promise.all([
    readJson(packageJsonPath),
    readJson(lockfilePath),
    collectUsedPackagesFromSource()
  ]);

  const lockPackages = lockfile.packages ?? {};
  const directDependencies = Object.keys(packageJson.dependencies ?? {});
  const seedPackages = new Set(
    Array.from(sourceUsedPackages).filter((packageName) =>
      directDependencies.includes(packageName)
    )
  );

  if (seedPackages.size === 0) {
    for (const dependencyName of directDependencies) {
      seedPackages.add(dependencyName);
    }
  }

  for (const coreDependency of ["next", "react", "react-dom"]) {
    if (directDependencies.includes(coreDependency)) {
      seedPackages.add(coreDependency);
    }
  }

  const visitedPackagePaths = new Set();
  const packagePathsQueue = Array.from(seedPackages)
    .map((packageName) => `node_modules/${packageName}`)
    .filter((packagePath) => Boolean(lockPackages[packagePath]));

  while (packagePathsQueue.length > 0) {
    const packagePath = packagePathsQueue.pop();
    if (!packagePath || visitedPackagePaths.has(packagePath)) continue;

    visitedPackagePaths.add(packagePath);
    const lockEntry = lockPackages[packagePath];
    if (!lockEntry) continue;

    const runtimeDependencies = {
      ...(lockEntry.dependencies ?? {}),
      ...(lockEntry.optionalDependencies ?? {})
    };

    for (const dependencyName of Object.keys(runtimeDependencies)) {
      const resolvedPath = resolveDependencyPath(lockPackages, packagePath, dependencyName);
      if (resolvedPath && !visitedPackagePaths.has(resolvedPath)) {
        packagePathsQueue.push(resolvedPath);
      }
    }
  }

  const deduped = new Map();

  for (const packagePath of visitedPackagePaths) {
    const lockEntry = lockPackages[packagePath];
    if (!lockEntry) continue;

    const packageJsonPath = path.join(rootDir, packagePath, "package.json");
    const fallbackName = extractNameFromPackagePath(packagePath);
    let name = fallbackName;
    let license = normalizeLicense(lockEntry.license);
    let link = "";
    const version =
      typeof lockEntry.version === "string" && lockEntry.version.trim()
        ? lockEntry.version.trim()
        : "UNKNOWN";

    try {
      const packageJson = await readJson(packageJsonPath);
      if (typeof packageJson.name === "string" && packageJson.name.trim()) {
        name = packageJson.name.trim();
      }
      const jsonLicense = normalizeLicense(packageJson.license);
      if (jsonLicense !== "UNKNOWN") {
        license = jsonLicense;
      }
      link =
        normalizeRepositoryUrl(packageJson.repository) ||
        (typeof packageJson.homepage === "string" ? packageJson.homepage.trim() : "");
    } catch {
      // node_modules may not always have full package metadata for every entry.
    }

    if (!name) continue;

    const key = `${name}@${version}`;
    if (deduped.has(key)) continue;

    deduped.set(key, {
      name,
      version,
      license,
      link: link || `https://www.npmjs.com/package/${name}`
    });
  }

  const packages = Array.from(deduped.values()).sort(comparePackages);
  const output = {
    generatedAt: new Date().toISOString(),
    packageCount: packages.length,
    sourcePackageCount: sourceUsedPackages.size,
    seedPackageCount: seedPackages.size,
    packages
  };

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");

  console.log(
    `[licenses] Generated ${output.packageCount} entries at ${path.relative(rootDir, outputPath)}`
  );
}

main().catch((error) => {
  console.error("[licenses] Failed to generate open-source license data.");
  console.error(error);
  process.exitCode = 1;
});
