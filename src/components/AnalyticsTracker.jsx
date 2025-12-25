import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent } from '../utils/analytics';

const AnalyticsTracker = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);

  // Track external link clicks
  useEffect(() => {
    const handleExternalLinkClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.href && !link.href.includes(window.location.hostname)) {
        trackEvent('click', 'external_link', link.href);
      }
    };

    document.addEventListener('click', handleExternalLinkClick);
    return () => document.removeEventListener('click', handleExternalLinkClick);
  }, []);

  // Track form submissions
  useEffect(() => {
    const handleFormSubmit = (e) => {
      const form = e.target;
      if (form.tagName === 'FORM') {
        const formName = form.name || form.id || 'unknown_form';
        trackEvent('submit', 'form', formName);
      }
    };

    document.addEventListener('submit', handleFormSubmit);
    return () => document.removeEventListener('submit', handleFormSubmit);
  }, []);

  // Track scroll depth milestones
  useEffect(() => {
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
  }, []);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;