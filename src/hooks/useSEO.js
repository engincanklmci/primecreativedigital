import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackScrollDepth, trackTimeOnPage } from '../utils/analytics';

/**
 * Custom hook for SEO and analytics tracking
 */
export const useSEO = (pageData = {}) => {
  const location = useLocation();

  // Track page view on route change
  useEffect(() => {
    const title = pageData.title || document.title;
    const url = location.pathname + location.search;
    
    // Update document title if provided
    if (pageData.title) {
      document.title = pageData.title;
    }
    
    // Track page view
    trackPageView(url, title);
    
    // Set up scroll and time tracking
    const cleanupScroll = trackScrollDepth();
    const cleanupTime = trackTimeOnPage();
    
    return () => {
      if (cleanupScroll) cleanupScroll();
      if (cleanupTime) cleanupTime();
    };
  }, [location, pageData.title]);

  // Update meta tags
  useEffect(() => {
    if (pageData.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = pageData.description;
    }

    if (pageData.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = pageData.keywords;
    }
  }, [pageData.description, pageData.keywords]);

  return {
    currentPath: location.pathname,
    currentSearch: location.search
  };
};

/**
 * Hook for performance monitoring
 */
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          switch (entry.entryType) {
            case 'largest-contentful-paint':
              console.log('LCP:', entry.startTime);
              // Track LCP in analytics
              if (window.gtag) {
                window.gtag('event', 'web_vitals', {
                  event_category: 'performance',
                  event_label: 'LCP',
                  value: Math.round(entry.startTime)
                });
              }
              break;
            
            case 'first-input':
              const fid = entry.processingStart - entry.startTime;
              console.log('FID:', fid);
              if (window.gtag) {
                window.gtag('event', 'web_vitals', {
                  event_category: 'performance',
                  event_label: 'FID',
                  value: Math.round(fid)
                });
              }
              break;
            
            case 'layout-shift':
              if (!entry.hadRecentInput) {
                console.log('CLS:', entry.value);
                if (window.gtag) {
                  window.gtag('event', 'web_vitals', {
                    event_category: 'performance',
                    event_label: 'CLS',
                    value: Math.round(entry.value * 1000)
                  });
                }
              }
              break;
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance Observer not fully supported');
      }

      return () => observer.disconnect();
    }
  }, []);
};

/**
 * Hook for lazy loading optimization
 */
export const useLazyLoading = (ref, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options
  };

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in view
          entry.target.classList.add('in-view');
          
          // Load images if they have data-src
          const images = entry.target.querySelectorAll('img[data-src]');
          images.forEach((img) => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, defaultOptions);

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, defaultOptions]);
};

/**
 * Hook for structured data injection
 */
export const useStructuredData = (schemaData) => {
  useEffect(() => {
    if (!schemaData) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    script.id = 'structured-data';
    
    // Remove existing structured data
    const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptElement = document.getElementById('structured-data');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, [schemaData]);
};

/**
 * Hook for canonical URL management
 */
export const useCanonicalURL = (canonicalUrl) => {
  useEffect(() => {
    if (!canonicalUrl) return;

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    
    link.href = canonicalUrl;

    return () => {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink && canonicalLink.href === canonicalUrl) {
        canonicalLink.remove();
      }
    };
  }, [canonicalUrl]);
};