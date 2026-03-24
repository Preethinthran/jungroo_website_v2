const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimizeLogo() {
    const inputPath = path.join(__dirname, '../public/images/logo.webp');
    const outputPath = path.join(__dirname, '../public/images/logo-optimized.webp');
    const backupPath = path.join(__dirname, '../public/images/logo-original.webp');

    console.log('Optimizing logo...');

    try {
        // Backup original if it doesn't exist
        if (!fs.existsSync(backupPath)) {
            fs.copyFileSync(inputPath, backupPath);
            console.log('Backup created at logo-original.webp');
        }

        // 848x196 is 4x the display size 212x49
        await sharp(inputPath)
            .resize(848, 196, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .webp({ quality: 85, effort: 6 })
            .toFile(outputPath);

        // Replace original with optimized
        fs.renameSync(outputPath, inputPath);

        const stats = fs.statSync(inputPath);
        console.log(`Optimization complete! New size: ${Math.round(stats.size / 1024)} KiB`);
    } catch (err) {
        console.error('Error optimizing logo:', err);
    }
}

optimizeLogo();
