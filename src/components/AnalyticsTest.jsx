import React, { useEffect, useState } from 'react';
import { trackEvent, trackPageView, GA_MEASUREMENT_ID } from '../utils/analytics';

const AnalyticsTest = () => {
  const [isAnalyticsLoaded, setIsAnalyticsLoaded] = useState(false);
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    // Check if Google Analytics is loaded
    const checkAnalytics = () => {
      if (window.gtag && window.dataLayer) {
        setIsAnalyticsLoaded(true);
        addTestResult('✅ Google Analytics yüklendi', 'success');
        addTestResult(`📊 Measurement ID: ${GA_MEASUREMENT_ID}`, 'info');
      } else {
        addTestResult('❌ Google Analytics yüklenemedi', 'error');
      }
    };

    // Wait a bit for GA to load
    setTimeout(checkAnalytics, 2000);
  }, []);

  const addTestResult = (message, type) => {
    setTestResults(prev => [...prev, { message, type, timestamp: new Date().toLocaleTimeString() }]);
  };

  const testPageView = () => {
    trackPageView('/test-page', 'Test Page View');
    addTestResult('📄 Test page view gönderildi', 'success');
  };

  const testEvent = () => {
    trackEvent('test_button_click', 'engagement', 'Analytics Test', 1);
    addTestResult('🎯 Test event gönderildi', 'success');
  };

  const testFormSubmission = () => {
    trackEvent('form_submit', 'forms', 'test_form', 1);
    addTestResult('📝 Form submission test gönderildi', 'success');
  };

  const testLeadCapture = () => {
    trackEvent('generate_lead', 'lead_capture', 'analytics_test', 1);
    addTestResult('🎯 Lead capture test gönderildi', 'success');
  };

  if (process.env.NODE_ENV === 'production') {
    return null; // Don't show in production
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">Analytics Test</h3>
        <div className={`w-3 h-3 rounded-full ${isAnalyticsLoaded ? 'bg-green-500' : 'bg-red-500'}`}></div>
      </div>
      
      <div className="space-y-2 mb-4">
        <button
          onClick={testPageView}
          className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded text-sm transition-colors"
          disabled={!isAnalyticsLoaded}
        >
          Test Page View
        </button>
        
        <button
          onClick={testEvent}
          className="w-full text-left px-3 py-2 bg-green-50 hover:bg-green-100 rounded text-sm transition-colors"
          disabled={!isAnalyticsLoaded}
        >
          Test Custom Event
        </button>
        
        <button
          onClick={testFormSubmission}
          className="w-full text-left px-3 py-2 bg-yellow-50 hover:bg-yellow-100 rounded text-sm transition-colors"
          disabled={!isAnalyticsLoaded}
        >
          Test Form Submit
        </button>
        
        <button
          onClick={testLeadCapture}
          className="w-full text-left px-3 py-2 bg-purple-50 hover:bg-purple-100 rounded text-sm transition-colors"
          disabled={!isAnalyticsLoaded}
        >
          Test Lead Capture
        </button>
      </div>

      <div className="border-t pt-3">
        <h4 className="text-xs font-medium text-gray-700 mb-2">Test Sonuçları:</h4>
        <div className="max-h-32 overflow-y-auto space-y-1">
          {testResults.map((result, index) => (
            <div key={index} className="text-xs">
              <span className="text-gray-500">{result.timestamp}</span>
              <div className={`${
                result.type === 'success' ? 'text-green-600' :
                result.type === 'error' ? 'text-red-600' :
                'text-blue-600'
              }`}>
                {result.message}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 pt-2 border-t">
        <a
          href={`https://analytics.google.com/analytics/web/#/p${GA_MEASUREMENT_ID.replace('G-', '')}/reports/intelligenthome`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 hover:text-blue-800"
        >
          Google Analytics'i Aç →
        </a>
      </div>
    </div>
  );
};

export default AnalyticsTest;