const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/images');

// Targeted optimization rules
const rules = {
  'logo.webp': { width: 424, quality: 85 }, // 2x for a ~212px display
  'logo_infinity.png': { width: 424, quality: 85 },
  'ceo.webp': { width: 600, quality: 80 },
  'cto.webp': { width: 600, quality: 80 },
  'cnbc.jpg': { width: 800, quality: 75, format: 'webp' },
  'ai-good.jpg': { width: 800, quality: 75, format: 'webp' },
  'bhumi.jpg': { width: 800, quality: 75, format: 'webp' },
  'innovated.jpg': { width: 800, quality: 75, format: 'webp' },
  'awards_default': { width: 600, quality: 80 },
  'default': { width: 1200, quality: 80 }
};

async function optimizeImages() {
  const files = fs.readdirSync(imgDir);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) continue;

    const fullPath = path.join(imgDir, file);
    const rule = rules[file] || (file.includes('award') || file.includes('millenium') || file.includes('elevate') ? rules['awards_default'] : rules['default']);
    
    console.log(`Processing ${file}...`);
    
    try {
      const metadata = await sharp(fullPath).metadata();
      const targetFormat = rule.format || 'webp';
      const newFileName = file.replace(ext, `.${targetFormat}`);
      const newPath = path.join(imgDir, `opt_${newFileName}`); // Use prefix to avoid overwriting during process

      let pipeline = sharp(fullPath);
      
      if (rule.width && metadata.width > rule.width) {
        pipeline = pipeline.resize({ width: rule.width, withoutEnlargement: true });
      }

      if (targetFormat === 'webp') {
        pipeline = pipeline.webp({ quality: rule.quality, effort: 6 });
      } else if (targetFormat === 'png') {
        pipeline = pipeline.png({ quality: rule.quality });
      }

      await pipeline.toFile(newPath);
      
      const oldSize = fs.statSync(fullPath).size;
      const newSize = fs.statSync(newPath).size;
      
      console.log(`  Optimized ${file}: ${(oldSize/1024).toFixed(1)}KB -> ${(newSize/1024).toFixed(1)}KB (${Math.round((1 - newSize/oldSize) * 100)}% reduction)`);
      
      // Replace original
      fs.unlinkSync(fullPath);
      fs.renameSync(newPath, path.join(imgDir, newFileName));
      
    } catch (err) {
      console.error(`  Error processing ${file}:`, err);
    }
  }
}

optimizeImages().then(() => console.log('Image optimization complete.'));
