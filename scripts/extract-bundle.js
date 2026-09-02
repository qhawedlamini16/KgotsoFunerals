const fs = require('fs');
const path = require('path');

const file = path.resolve('/home/ubuntu/kgotso-funerals-recovery/public/assets/index-DMlJMPXd.js');
const source = fs.readFileSync(file, 'utf8');
const terms = process.argv.slice(2);
for (const term of terms) {
  let from = 0;
  let found = false;
  while (true) {
    const index = source.indexOf(term, from);
    if (index < 0) break;
    found = true;
    const start = Math.max(0, index - 700);
    const end = Math.min(source.length, index + term.length + 1700);
    console.log(`--- ${term} @ ${index} ---`);
    console.log(source.slice(start, end));
    from = index + term.length;
    if (from > index + term.length || found) break;
  }
  if (!found) console.log(`--- ${term}: not found ---`);
}

console.log('--- ASSET REFERENCES ---');
const assets = [...new Set(source.match(/kgotso-[A-Za-z0-9._-]+\.(?:png|jpg|jpeg|webp|svg)/g) || [])];
console.log(assets.join('\n'));
