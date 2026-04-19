const fs = require('fs');
const path = require('path');

const localesDir = '/Users/loma-arthur/pixelyaki/lib/i18n/locales';
const files = fs.readdirSync(localesDir);

const newKeys = `    mecardModeLabel: "meCard",
    mecardNameLabel: "Name",
    mecardNamePlaceholder: "e.g. John Doe",
    mecardPhoneLabel: "Phone",
    mecardPhonePlaceholder: "e.g. +1234567890",
    mecardEmailLabel: "Email",
    mecardEmailPlaceholder: "e.g. hello@pixelyaki.com",
    mecardAddressLabel: "Address",
    mecardAddressPlaceholder: "e.g. New York, USA",
    mecardEmptyPreview: "Enter contact info to see a meCard QR preview.",
    calendarModeLabel: "Calendar",
    calendarTitleLabel: "Event Title",
    calendarTitlePlaceholder: "e.g. Team Meeting",
    calendarStartLabel: "Start Date/Time",
    calendarEndLabel: "End Date/Time",
    calendarLocationLabel: "Location",
    calendarLocationPlaceholder: "e.g. Meeting Room 1",
    calendarDescriptionLabel: "Description",
    calendarDescriptionPlaceholder: "e.g. Discuss project plans",
    calendarEmptyPreview: "Enter event info to see a calendar QR preview.",
    paypalModeLabel: "PayPal",
    paypalEmailLabel: "PayPal Email/ID",
    paypalEmailPlaceholder: "e.g. payment@pixelyaki.com",
    paypalItemLabel: "Item Name",
    paypalItemPlaceholder: "e.g. Design Service",
    paypalAmountLabel: "Amount",
    paypalAmountPlaceholder: "e.g. 50.00",
    paypalCurrencyLabel: "Currency",
    paypalEmptyPreview: "Enter payment info to see a PayPal QR preview.",
    cryptoModeLabel: "Crypto",
    cryptoAddressLabel: "Wallet Address",
    cryptoAddressPlaceholder: "e.g. 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    cryptoAmountLabel: "Amount",
    cryptoAmountPlaceholder: "e.g. 0.1",
    cryptoCoinLabel: "Coin",
    cryptoLabelLabel: "Label (Name)",
    cryptoLabelPlaceholder: "e.g. Bitcoin Wallet",
    cryptoEmptyPreview: "Enter wallet info to see a crypto QR preview."`;

files.forEach(file => {
  if (file === 'ko.ts' || file === 'en.ts' || file === 'ja.ts' || file === 'zh.ts') return;
  const filePath = path.join(localesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the end of extraModes section
  // It usually ends with a closing brace before styles: {
  if (content.includes('mecardModeLabel')) return; // Already updated
  
  content = content.replace(/kakaopayEmptyPreview: "[^"]*"\n\s*}/, (match) => {
    return `${match.replace('\n  }', '')},\n${newKeys}\n  }`;
  });
  
  fs.writeFileSync(filePath, content);
});
