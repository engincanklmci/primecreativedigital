/**
 * Google Analytics and tracking utilities
 */

// Google Analytics 4 configuration
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
    // Enhanced ecommerce
    custom_map: {
      custom_parameter: 'dimension1'
    }
  });
};

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window.gtag === 'undefined') return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  });
};

// Track custom events
export const trackEvent = (action, category = 'engagement', label = '', value = 0) => {
  if (typeof window.gtag === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track form submissions
export const trackFormSubmission = (formName, success = true) => {
  trackEvent('form_submit', 'forms', formName, success ? 1 : 0);
};

// Track button clicks
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('click', 'buttons', `${buttonName}_${location}`);
};

// Track scroll depth
export const trackScrollDepth = () => {
  if (typeof window === 'undefined') return;

  let maxScroll = 0;
  const milestones = [25, 50, 75, 90, 100];
  const tracked = new Set();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !tracked.has(milestone)) {
          tracked.add(milestone);
          trackEvent('scroll', 'engagement', `${milestone}%`, milestone);
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};

// Track time on page
export const trackTimeOnPage = () => {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();
  const intervals = [30, 60, 120, 300]; // seconds
  const tracked = new Set();

  const checkTime = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    
    intervals.forEach(interval => {
      if (timeSpent >= interval && !tracked.has(interval)) {
        tracked.add(interval);
        trackEvent('time_on_page', 'engagement', `${interval}s`, interval);
      }
    });
  };

  const intervalId = setInterval(checkTime, 10000); // Check every 10 seconds
  
  return () => clearInterval(intervalId);
};

// Track external link clicks
export const trackExternalLink = (url) => {
  trackEvent('click', 'external_links', url);
};

// Track file downloads
export const trackDownload = (fileName, fileType) => {
  trackEvent('download', 'files', `${fileName}.${fileType}`);
};

// Track search queries (if you have internal search)
export const trackSearch = (query, results = 0) => {
  trackEvent('search', 'site_search', query, results);
};

// Enhanced ecommerce tracking (for service inquiries)
export const trackServiceInquiry = (serviceName, value = 0) => {
  if (typeof window.gtag === 'undefined') return;

  window.gtag('event', 'generate_lead', {
    currency: 'TRY',
    value: value,
    items: [{
      item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
      item_name: serviceName,
      item_category: 'services',
      quantity: 1,
      price: value
    }]
  });
};

// Track user engagement score
export const calculateEngagementScore = () => {
  const metrics = {
    timeOnSite: 0,
    pagesViewed: 0,
    scrollDepth: 0,
    interactions: 0
  };

  // This would be calculated based on user behavior
  const score = (metrics.timeOnSite * 0.3) + 
                (metrics.pagesViewed * 0.25) + 
                (metrics.scrollDepth * 0.25) + 
                (metrics.interactions * 0.2);

  trackEvent('engagement_score', 'user_behavior', 'calculated', Math.round(score));
  
  return score;
};

// GDPR compliance helper
export const hasAnalyticsConsent = () => {
  return localStorage.getItem('analytics_consent') === 'true';
};

export const setAnalyticsConsent = (consent) => {
  localStorage.setItem('analytics_consent', consent.toString());
  
  if (consent) {
    initGA();
  } else {
    // Disable analytics
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  }
};