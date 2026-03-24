const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const fontsDir = path.join(__dirname, '../public/fonts');
if (!fs.existsSync(fontsDir)) {
    fs.mkdirSync(fontsDir, { recursive: true });
}

const fonts = [
    {
        name: 'Inter',
        url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
        subset: 'latin'
    },
    {
        name: 'MaterialSymbolsOutlined',
        url: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
        subset: null
    }
];

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function download() {
    for (const font of fonts) {
        console.log(`Fetching CSS for ${font.name}...`);
        const css = execSync(`curl.exe -A "${userAgent}" "${font.url}"`).toString();
        
        // Match @font-face blocks
        const fontFaceRegex = /@font-face\s*\{([^}]+)\}/g;
        let match;
        let count = 0;

        while ((match = fontFaceRegex.exec(css)) !== null) {
            const block = match[1];
            if (font.subset && !css.substring(0, match.index).split('/*').pop().includes(font.subset)) {
                // Not the target subset
                continue;
            }

            const urlMatch = /url\((https:\/\/fonts\.gstatic\.com\/s\/[^)]+)\)/.exec(block);
            const weightMatch = /font-weight:\s*(\d+)/.exec(block);
            const styleMatch = /font-style:\s*(\w+)/.exec(block);

            if (urlMatch) {
                const url = urlMatch[1];
                const weight = weightMatch ? weightMatch[1] : '400';
                const style = styleMatch ? styleMatch[1] : 'normal';
                
                // For Inter, we might have multiple blocks for the same weight if not careful with subsets
                // But generally, the last one in a subset comment is what we want
                
                const ext = path.extname(url.split('?')[0]) || '.woff2';
                const filename = font.name === 'Inter' 
                    ? `Inter-${weight}-${style}${ext}`
                    : `MaterialSymbolsOutlined${ext}`;
                
                const dest = path.join(fontsDir, filename);
                
                console.log(`  Downloading ${filename} from ${url}...`);
                execSync(`curl.exe -L -o "${dest}" "${url}"`);
                count++;
                
                if (font.name === 'MaterialSymbolsOutlined') break; // Only one file for symbols usually
            }
        }
        console.log(`Done ${font.name} (${count} files).`);
    }
}

download().catch(console.error);
