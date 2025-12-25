/**
 * Performance monitoring and optimization utilities
 */

// Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Track Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      switch (entry.entryType) {
        case 'largest-contentful-paint':
          console.log('LCP:', entry.startTime);
          // Send to analytics
          break;
        case 'first-input':
          console.log('FID:', entry.processingStart - entry.startTime);
          break;
        case 'layout-shift':
          if (!entry.hadRecentInput) {
            console.log('CLS:', entry.value);
          }
          break;
      }
    });
  });

  // Observe different entry types
  try {
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  } catch (e) {
    // Fallback for older browsers
    console.warn('Performance Observer not supported');
  }
};

// Resource loading optimization
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontPreloads = [
    '/fonts/inter-var.woff2',
    '/fonts/inter-var-italic.woff2'
  ];

  fontPreloads.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // Preload critical images
  const criticalImages = [
    '/logo.webp',
    '/hero-bg.webp'
  ];

  criticalImages.forEach(image => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = image;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

// Lazy load non-critical resources
export const loadNonCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Load analytics after page load
  window.addEventListener('load', () => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID');
    }

    // Other third-party scripts
    setTimeout(() => {
      // Load social media widgets, chat widgets, etc.
    }, 2000);
  });
};

// Image compression utility
export const compressImage = (file, quality = 0.8, maxWidth = 1920) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Calculate new dimensions
      const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;

      // Draw and compress
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(resolve, 'image/webp', quality);
    };

    img.src = URL.createObjectURL(file);
  });
};

// Critical CSS inlining
export const inlineCriticalCSS = (css) => {
  if (typeof window === 'undefined') return;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

// Service Worker registration
export const registerSW = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};