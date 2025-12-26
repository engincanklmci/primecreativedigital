/**
 * Performance monitoring and optimization utilities
 */

// Web Vitals tracking with analytics integration
export const trackWebVitals = () => {
  if (typeof window === 'undefined') return;

  const reportWebVitals = (metric) => {
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }
  };

  // Load web-vitals with dynamic import
  import('web-vitals').then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
    getCLS(reportWebVitals);
    getFID(reportWebVitals);
    getLCP(reportWebVitals);
    getFCP(reportWebVitals);
    getTTFB(reportWebVitals);
  });
};

// Resource loading optimization
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const resources = [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
    { href: '/fonts/inter-var-italic.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
    // Add other critical resources here
  ];

  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    if (resource.as) link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Preconnect to external domains
export const preconnectToOrigins = () => {
  if (typeof window === 'undefined') return;

  const origins = [
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  origins.forEach(origin => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = origin;
    if (origin.includes('fonts.gstatic.com')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Load non-critical CSS asynchronously
export const loadNonCriticalCSS = () => {
  if (typeof window === 'undefined') return;

  const links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach(link => {
    if (link.media === 'print') {
      link.media = 'all';
      link.onload = () => { link.media = 'print'; };
    }
  });
};

// Defer non-critical JavaScript
export const deferNonCriticalJS = () => {
  if (typeof window === 'undefined') return;

  // Add defer attribute to non-critical scripts
  document.addEventListener('DOMContentLoaded', () => {
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      if (script.getAttribute('defer') !== 'defer') {
        const newScript = document.createElement('script');
        newScript.src = script.src;
        newScript.defer = true;
        script.parentNode.replaceChild(newScript, script);
      }
    });
  });
};

// Optimize image loading
export const optimizeImageLoading = () => {
  if (typeof window === 'undefined') return;

  // Add loading="lazy" to images that are not in the viewport
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.loading = 'lazy';
    });
  }
};

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Track Web Vitals
  trackWebVitals();
  
  // Preload critical resources
  preloadCriticalResources();
  
  // Preconnect to external domains
  preconnectToOrigins();
  
  // Load non-critical CSS asynchronously
  loadNonCriticalCSS();
  
  // Defer non-critical JavaScript
  deferNonCriticalJS();
  
  // Optimize image loading
  optimizeImageLoading();
};
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