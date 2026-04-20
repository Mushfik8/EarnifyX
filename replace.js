const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      if (content.includes('Earnifyx')) {
        content = content.replace(/Earnifyx/g, 'EarnifyX');
        changed = true;
      }
      
      // Update the logo text where "x" is in a span
      if (content.includes('>x</span>')) {
        content = content.replace(/>x<\/span>/g, '>X</span>');
        changed = true;
      }

      if (content.includes('earnifyx')) {
        // Keep lowercase for github links, twitter handles etc if needed, but the user asked to rename the site. 
        // "EarnifyX" is the proper name. 
        // Let's only replace title cases to avoid breaking URLs (like github.com/earnifyx).
        // So Earnifyx -> EarnifyX is already done.
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

replaceInDir('./src');
