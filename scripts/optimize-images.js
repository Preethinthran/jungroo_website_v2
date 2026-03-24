const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/images');
const files = fs.readdirSync(imgDir);

async function optimizeImages() {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const fullPath = path.join(imgDir, file);
    const stat = fs.statSync(fullPath);
    
    // Skip small images or non-image files
    if (stat.size < 300000 && !['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
       continue;
    }

    // Only process very large files (> 300KB)
    if (stat.size > 300000) {
      console.log(`Optimizing ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)...`);
      const newFileName = file.replace(ext, '.webp');
      const newPath = path.join(imgDir, newFileName);
      
      try {
        await sharp(fullPath)
          .webp({ quality: 80, effort: 6 })
          .resize({ width: 1920, withoutEnlargement: true })
          .toFile(newPath + '.tmp');
          
        // Replace original or rename
        fs.renameSync(newPath + '.tmp', newPath);
        if (newFileName !== file) {
            console.log(`Created ${newFileName}, keeping original for backup but remember to update HTML.`);
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

optimizeImages().then(() => console.log('Image optimization complete.'));
