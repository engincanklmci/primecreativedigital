
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const originalLogoPath = path.join(__dirname, '../public/logo.png');
const outputLogoPath = path.join(__dirname, '../public/logo-resized.png'); // Temp name to be safe
const outputWebPPath = path.join(__dirname, '../public/logo.webp');

async function resizeLogo() {
    try {
        console.log('🖼️  Resizing logo.png...');

        // Resize to 200px width (sufficient for navbar and footer)
        await sharp(originalLogoPath)
            .resize(200)
            .toFile(outputLogoPath);

        console.log('✅ Created logo-resized.png (200px width)');

        // Create WebP version
        await sharp(originalLogoPath)
            .resize(200)
            .toFormat('webp')
            .toFile(outputWebPPath);

        console.log('✅ Created logo.webp (200px width)');

        // Replace original if successful
        fs.renameSync(outputLogoPath, originalLogoPath);
        console.log('✅ Replaced original logo.png with resized version');

    } catch (error) {
        console.error('❌ Error resizing logo:', error);
    }
}

resizeLogo();
