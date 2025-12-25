#!/usr/bin/env node

/**
 * SEO Audit Script for Prime Dijital
 * Checks various SEO factors and generates a report
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SEOAuditor {
  constructor() {
    this.results = {
      score: 0,
      maxScore: 0,
      checks: [],
      recommendations: []
    };
  }

  // Check if file exists
  checkFile(filePath, description, points = 5) {
    const fullPath = path.join(__dirname, '..', filePath);
    const exists = fs.existsSync(fullPath);
    
    this.results.checks.push({
      name: description,
      status: exists ? 'PASS' : 'FAIL',
      points: exists ? points : 0,
      maxPoints: points
    });

    if (exists) {
      this.results.score += points;
    } else {
      this.results.recommendations.push(`Create ${filePath}`);
    }
    
    this.results.maxScore += points;
    return exists;
  }

  // Check file content
  checkFileContent(filePath, searchText, description, points = 5) {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (!fs.existsSync(fullPath)) {
      this.results.checks.push({
        name: description,
        status: 'FAIL',
        points: 0,
        maxPoints: points,
        note: 'File not found'
      });
      this.results.maxScore += points;
      return false;
    }

    const content = fs.readFileSync(fullPath, 'utf8');
    const found = content.includes(searchText);
    
    this.results.checks.push({
      name: description,
      status: found ? 'PASS' : 'FAIL',
      points: found ? points : 0,
      maxPoints: points
    });

    if (found) {
      this.results.score += points;
    } else {
      this.results.recommendations.push(`Add "${searchText}" to ${filePath}`);
    }
    
    this.results.maxScore += points;
    return found;
  }

  // Check HTML meta tags
  checkMetaTags() {
    console.log('🔍 Checking meta tags...');
    
    // Check for SEO component
    this.checkFile('src/components/SEOHead.jsx', 'SEO Head component exists', 10);
    
    // Check for Helmet usage
    this.checkFileContent('src/App.jsx', 'HelmetProvider', 'Helmet Provider configured', 5);
    
    // Check for meta descriptions in pages
    const pages = ['src/pages/Home.jsx', 'src/pages/Services.jsx', 'src/pages/About.jsx'];
    pages.forEach(page => {
      this.checkFileContent(page, 'meta name="description"', `Meta description in ${page}`, 3);
    });
  }

  // Check technical SEO
  checkTechnicalSEO() {
    console.log('🔧 Checking technical SEO...');
    
    this.checkFile('public/robots.txt', 'Robots.txt exists', 5);
    this.checkFile('public/sitemap.xml', 'Sitemap.xml exists', 5);
    this.checkFile('public/manifest.json', 'Web App Manifest exists', 5);
    
    // Check robots.txt content
    this.checkFileContent('public/robots.txt', 'Sitemap:', 'Sitemap referenced in robots.txt', 3);
    
    // Check sitemap content
    this.checkFileContent('public/sitemap.xml', '<urlset', 'Valid sitemap format', 3);
  }

  // Check performance optimizations
  checkPerformance() {
    console.log('⚡ Checking performance optimizations...');
    
    this.checkFile('src/utils/performance.js', 'Performance utilities exist', 8);
    this.checkFile('src/utils/imageOptimization.js', 'Image optimization utilities exist', 8);
    this.checkFile('src/components/OptimizedImage.jsx', 'Optimized Image component exists', 8);
    
    // Check for lazy loading
    this.checkFileContent('src/components/OptimizedImage.jsx', 'loading="lazy"', 'Lazy loading implemented', 5);
    
    // Check for service worker
    this.checkFile('public/sw.js', 'Service Worker exists', 8);
    this.checkFileContent('public/sw.js', 'caches.open', 'Service Worker caching implemented', 5);
  }

  // Check analytics and tracking
  checkAnalytics() {
    console.log('📊 Checking analytics setup...');
    
    this.checkFile('src/utils/analytics.js', 'Analytics utilities exist', 8);
    this.checkFileContent('src/utils/analytics.js', 'gtag', 'Google Analytics configured', 5);
    this.checkFileContent('src/utils/analytics.js', 'trackPageView', 'Page view tracking implemented', 3);
  }

  // Check structured data
  checkStructuredData() {
    console.log('🏗️ Checking structured data...');
    
    this.checkFile('src/utils/sitemapGenerator.js', 'Sitemap generator exists', 5);
    this.checkFileContent('src/utils/sitemapGenerator.js', 'schema.org', 'Schema.org structured data', 8);
    this.checkFileContent('src/utils/sitemapGenerator.js', 'Organization', 'Organization schema implemented', 5);
  }

  // Check build optimization
  checkBuildOptimization() {
    console.log('🏗️ Checking build optimization...');
    
    this.checkFileContent('vite.config.js', 'manualChunks', 'Code splitting configured', 8);
    this.checkFileContent('vite.config.js', 'terser', 'Minification configured', 5);
    this.checkFileContent('package.json', 'build:production', 'Production build script exists', 3);
  }

  // Generate recommendations based on score
  generateRecommendations() {
    const scorePercentage = (this.results.score / this.results.maxScore) * 100;
    
    if (scorePercentage < 60) {
      this.results.recommendations.unshift(
        '🚨 Critical: SEO score is below 60%. Focus on basic SEO implementation first.',
        '📝 Priority: Implement meta tags, robots.txt, and sitemap.xml',
        '⚡ Performance: Add image optimization and lazy loading'
      );
    } else if (scorePercentage < 80) {
      this.results.recommendations.unshift(
        '⚠️ Good progress! Focus on advanced optimizations.',
        '📊 Analytics: Implement comprehensive tracking',
        '🏗️ Structured Data: Add schema.org markup'
      );
    } else {
      this.results.recommendations.unshift(
        '✅ Excellent SEO implementation!',
        '🔍 Monitor: Set up regular SEO audits',
        '📈 Optimize: Focus on content quality and user experience'
      );
    }
  }

  // Run all checks
  async runAudit() {
    console.log('🚀 Starting SEO Audit for Prime Dijital...\n');
    
    this.checkMetaTags();
    this.checkTechnicalSEO();
    this.checkPerformance();
    this.checkAnalytics();
    this.checkStructuredData();
    this.checkBuildOptimization();
    
    this.generateRecommendations();
    
    return this.results;
  }

  // Generate report
  generateReport() {
    const scorePercentage = Math.round((this.results.score / this.results.maxScore) * 100);
    const grade = scorePercentage >= 90 ? 'A+' : 
                  scorePercentage >= 80 ? 'A' :
                  scorePercentage >= 70 ? 'B' :
                  scorePercentage >= 60 ? 'C' : 'D';

    console.log('\n' + '='.repeat(60));
    console.log('📊 SEO AUDIT REPORT - PRIME DIJITAL');
    console.log('='.repeat(60));
    console.log(`🎯 Overall Score: ${this.results.score}/${this.results.maxScore} (${scorePercentage}%) - Grade: ${grade}`);
    console.log('');

    // Group checks by status
    const passed = this.results.checks.filter(check => check.status === 'PASS');
    const failed = this.results.checks.filter(check => check.status === 'FAIL');

    console.log(`✅ Passed Checks: ${passed.length}`);
    passed.forEach(check => {
      console.log(`   ✓ ${check.name} (${check.points}/${check.maxPoints} points)`);
    });

    console.log(`\n❌ Failed Checks: ${failed.length}`);
    failed.forEach(check => {
      console.log(`   ✗ ${check.name} (${check.points}/${check.maxPoints} points)${check.note ? ` - ${check.note}` : ''}`);
    });

    console.log('\n💡 RECOMMENDATIONS:');
    this.results.recommendations.forEach((rec, index) => {
      console.log(`   ${index + 1}. ${rec}`);
    });

    console.log('\n' + '='.repeat(60));
    console.log('🔗 Next Steps:');
    console.log('   1. Address failed checks above');
    console.log('   2. Run: npm run performance:audit');
    console.log('   3. Test with: npm run test:seo');
    console.log('   4. Monitor with Google Search Console');
    console.log('='.repeat(60));

    // Save report to file
    const reportPath = path.join(__dirname, '..', 'reports', 'seo-audit.json');
    const reportsDir = path.dirname(reportPath);
    
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify({
      ...this.results,
      timestamp: new Date().toISOString(),
      scorePercentage,
      grade
    }, null, 2));
    
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  }
}

// Run the audit
async function main() {
  const auditor = new SEOAuditor();
  await auditor.runAudit();
  auditor.generateReport();
}

main().catch(console.error);