const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/images');

// Targeted optimization rules
const rules = {
  'logo.webp': { sizes: [212, 424], quality: 80, effort: 6 }, // 1x and 2x
  'logo_infinity.png': { width: 424, quality: 85 },
  'ceo.webp': { width: 600, quality: 80 },
  'cto.webp': { width: 600, quality: 80 },
  'cnbc.jpg': { width: 800, quality: 75, format: 'webp' },
  'ai-good.jpg': { width: 800, quality: 75, format: 'webp' },
  'bhumi.jpg': { width: 800, quality: 75, format: 'webp' },
  'innovated.jpg': { width: 800, quality: 75, format: 'webp' },
  'awards_default': { width: 400, quality: 75 },
  'default': { width: 1000, quality: 75 }
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
      
      // Handle multiple sizes if specified
      const sizes = rule.sizes || [rule.width];
      
      for (const size of sizes) {
        if (!size) continue;
        
        const sizeSuffix = size === sizes[0] && sizes.length === 1 ? '' : `-${size}`;
        const newFileName = file.replace(ext, `${sizeSuffix}.${targetFormat}`);
        const newPath = path.join(imgDir, `opt_${newFileName}`);

        let pipeline = sharp(fullPath);
        
        if (size && metadata.width > size) {
          pipeline = pipeline.resize({ width: size, withoutEnlargement: true });
        }

        if (targetFormat === 'webp') {
          pipeline = pipeline.webp({ quality: rule.quality || 75, effort: 6 });
        } else if (targetFormat === 'png') {
          pipeline = pipeline.png({ quality: rule.quality || 80 });
        }

        await pipeline.toFile(newPath);
        
        const oldSize = fs.statSync(fullPath).size;
        const newSize = fs.statSync(newPath).size;
        console.log(`  Optimized ${file} (${size}px): ${(oldSize/1024).toFixed(1)}KB -> ${(newSize/1024).toFixed(1)}KB`);
        
        // If it's the main version (no suffix), replace original if it's the same extension
        if (sizeSuffix === '' && targetFormat === ext.substring(1)) {
           // We'll handle replacement later to avoid unlinking files we still need for other sizes
        }
      }

    } catch (err) {
      console.error(`  Error processing ${file}:`, err);
    }
  }

  // Cleanup: Rename opt_ files to final names
  console.log('Finalizing files...');
  const optFiles = fs.readdirSync(imgDir).filter(f => f.startsWith('opt_'));
  for (const optFile of optFiles) {
    const finalName = optFile.replace('opt_', '');
    const finalPath = path.join(imgDir, finalName);
    const optPath = path.join(imgDir, optFile);
    
    try {
      if (fs.existsSync(finalPath)) {
        fs.unlinkSync(finalPath);
      }
      fs.renameSync(optPath, finalPath);
    } catch (e) {
      console.error(`  Error finalizing ${optFile}:`, e.message);
    }
  }
}

optimizeImages().then(() => console.log('Image optimization complete.'));
