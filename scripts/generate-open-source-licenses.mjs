import { promises as fs } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const lockfilePath = path.join(rootDir, "package-lock.json");
const outputDir = path.join(rootDir, "data");
const outputPath = path.join(outputDir, "open-source-licenses.json");

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
  const lockfile = await readJson(lockfilePath);
  const lockPackages = lockfile.packages ?? {};
  const deduped = new Map();

  for (const [packagePath, lockEntry] of Object.entries(lockPackages)) {
    if (!packagePath.startsWith("node_modules/")) continue;

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
