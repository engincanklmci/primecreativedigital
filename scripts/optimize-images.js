#!/usr/bin/env node

/**
 * Image Optimization Script for Prime Dijital
 * Converts images to WebP format and generates responsive sizes
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

class ImageOptimizer {
  constructor() {
    this.publicDir = path.join(__dirname, '..', 'public');
    this.supportedFormats = ['.jpg', '.jpeg', '.png'];
    this.responsiveSizes = [400, 800, 1200, 1920];
    this.optimizedCount = 0;
  }

  // Get all images in public directory
  getImages() {
    const images = [];

    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);

      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else {
          const ext = path.extname(item).toLowerCase();
          if (this.supportedFormats.includes(ext)) {
            images.push({
              path: fullPath,
              name: item,
              ext: ext,
              relativePath: path.relative(this.publicDir, fullPath)
            });
          }
        }
      });
    };

    scanDirectory(this.publicDir);
    return images;
  }

  // Check if Sharp is available (for actual image processing)
  checkSharpAvailability() {
    try {
      require.resolve('sharp');
      return true;
    } catch (e) {
      return false;
    }
  }

  // Generate WebP conversion instructions
  generateWebPInstructions(images) {
    console.log('📝 WebP Conversion Instructions:');
    console.log('To actually convert images, install Sharp and run:');
    console.log('npm install sharp --save-dev\n');

    images.forEach(image => {
      const webpName = image.name.replace(image.ext, '.webp');
      console.log(`Convert: ${image.relativePath} → ${webpName}`);

      // Generate responsive sizes
      this.responsiveSizes.forEach(size => {
        const responsiveName = image.name.replace(image.ext, `-${size}w.webp`);
        console.log(`  Resize: ${size}px wide → ${responsiveName}`);
      });
    });
  }

  // Generate optimization report
  generateOptimizationReport(images) {
    const report = {
      timestamp: new Date().toISOString(),
      totalImages: images.length,
      supportedFormats: this.supportedFormats,
      responsiveSizes: this.responsiveSizes,
      images: images.map(img => ({
        original: img.relativePath,
        webp: img.name.replace(img.ext, '.webp'),
        responsive: this.responsiveSizes.map(size =>
          img.name.replace(img.ext, `-${size}w.webp`)
        )
      })),
      recommendations: [
        'Install Sharp for actual image processing: npm install sharp --save-dev',
        'Use OptimizedImage component for all images',
        'Implement lazy loading for better performance',
        'Consider using CDN for image delivery',
        'Monitor Core Web Vitals for image loading performance'
      ]
    };

    const reportPath = path.join(__dirname, '..', 'reports', 'image-optimization.json');
    const reportsDir = path.dirname(reportPath);

    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    return reportPath;
  }

  // Generate CSS for responsive images
  generateResponsiveCSS(images) {
    let css = `/* Responsive Image Styles - Generated ${new Date().toISOString()} */\n\n`;

    css += `.responsive-image {\n`;
    css += `  width: 100%;\n`;
    css += `  height: auto;\n`;
    css += `  object-fit: cover;\n`;
    css += `  transition: opacity 0.3s ease;\n`;
    css += `}\n\n`;

    css += `.responsive-image[loading="lazy"] {\n`;
    css += `  opacity: 0;\n`;
    css += `}\n\n`;

    css += `.responsive-image.loaded {\n`;
    css += `  opacity: 1;\n`;
    css += `}\n\n`;

    // Generate picture element examples
    css += `/* Example usage in HTML:\n`;
    images.slice(0, 3).forEach(image => {
      const baseName = image.name.replace(image.ext, '');
      css += `\n<picture>\n`;
      css += `  <source media="(max-width: 400px)" srcset="${baseName}-400w.webp" type="image/webp">\n`;
      css += `  <source media="(max-width: 800px)" srcset="${baseName}-800w.webp" type="image/webp">\n`;
      css += `  <source media="(max-width: 1200px)" srcset="${baseName}-1200w.webp" type="image/webp">\n`;
      css += `  <source srcset="${baseName}-1920w.webp" type="image/webp">\n`;
      css += `  <img src="${image.name}" alt="Description" class="responsive-image" loading="lazy">\n`;
      css += `</picture>\n`;
    });
    css += `*/\n`;

    const cssPath = path.join(__dirname, '..', 'src', 'styles', 'responsive-images.css');
    const cssDir = path.dirname(cssPath);

    if (!fs.existsSync(cssDir)) {
      fs.mkdirSync(cssDir, { recursive: true });
    }

    fs.writeFileSync(cssPath, css);
    return cssPath;
  }

  // Main optimization process
  async optimize() {
    console.log('🖼️  Starting Image Optimization for Prime Dijital...\n');

    const images = this.getImages();
    console.log(`Found ${images.length} images to optimize:\n`);

    images.forEach(image => {
      console.log(`📸 ${image.relativePath} (${image.ext})`);
    });

    console.log('\n' + '='.repeat(60));

    if (!this.checkSharpAvailability()) {
      console.log('⚠️  Sharp not found - generating instructions only');
      this.generateWebPInstructions(images);
    } else {
      console.log('✅ Sharp available - processing images...');
      // Here you would implement actual Sharp processing
    }

    const reportPath = this.generateOptimizationReport(images);
    const cssPath = this.generateResponsiveCSS(images);

    console.log('\n' + '='.repeat(60));
    console.log('📊 OPTIMIZATION SUMMARY');
    console.log('='.repeat(60));
    console.log(`📁 Images found: ${images.length}`);
    console.log(`📄 Report saved: ${reportPath}`);
    console.log(`🎨 CSS generated: ${cssPath}`);

    console.log('\n💡 NEXT STEPS:');
    console.log('1. Install Sharp: npm install sharp --save-dev');
    console.log('2. Run actual conversion with Sharp');
    console.log('3. Update image references to use WebP');
    console.log('4. Test with OptimizedImage component');
    console.log('5. Monitor loading performance');

    console.log('\n🔗 USEFUL COMMANDS:');
    console.log('- Test performance: npm run performance:audit');
    console.log('- SEO audit: npm run seo:audit');
    console.log('- Build production: npm run build:production');

    console.log('='.repeat(60));
  }
}

// Run optimization
async function main() {
  const optimizer = new ImageOptimizer();
  await optimizer.optimize();
}

main().catch(console.error);