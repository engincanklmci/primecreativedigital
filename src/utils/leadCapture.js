/**
 * Lead Capture and Behavioral Email Marketing System
 * GDPR Compliant Visitor Tracking and Email Collection
 */

// Lead capture configuration
const LEAD_CAPTURE_CONFIG = {
  timeThresholds: {
    interested: 15000,    // 15 seconds - show subtle popup
    engaged: 45000,       // 45 seconds - show offer popup
    highIntent: 120000    // 2 minutes - show premium offer
  },
  scrollThresholds: {
    interested: 25,       // 25% scroll
    engaged: 50,          // 50% scroll
    highIntent: 75        // 75% scroll
  },
  exitIntent: true,       // Show popup on exit intent
  returnVisitor: true     // Special offers for return visitors
};

class LeadCaptureSystem {
  constructor() {
    this.sessionData = {
      startTime: Date.now(),
      timeSpent: 0,
      maxScroll: 0,
      pagesViewed: [],
      interactions: 0,
      leadScore: 0,
      hasEmail: false,
      consentGiven: false
    };
    
    this.triggers = new Set();
    this.init();
  }

  init() {
    // Check GDPR consent first
    if (!this.hasGDPRConsent()) {
      this.showConsentBanner();
      return;
    }

    this.startTracking();
  }

  hasGDPRConsent() {
    return localStorage.getItem('gdpr_consent') === 'true';
  }

  showConsentBanner() {
    // GDPR consent banner will be shown
    const consentBanner = document.createElement('div');
    consentBanner.innerHTML = `
      <div id="gdpr-banner" class="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="text-sm">
            <p>Bu site, size daha iyi hizmet verebilmek için çerezler kullanır. 
            Ayrıca size özel teklifler sunabilmek için davranışsal analiz yaparız.</p>
          </div>
          <div class="flex gap-2">
            <button id="accept-all" class="bg-prime-yellow text-black px-4 py-2 rounded font-medium">
              Kabul Et
            </button>
            <button id="reject-all" class="border border-white px-4 py-2 rounded">
              Reddet
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(consentBanner);
    
    // Event listeners for consent
    document.getElementById('accept-all').addEventListener('click', () => {
      this.setGDPRConsent(true);
      document.getElementById('gdpr-banner').remove();
      this.startTracking();
    });
    
    document.getElementById('reject-all').addEventListener('click', () => {
      this.setGDPRConsent(false);
      document.getElementById('gdpr-banner').remove();
    });
  }

  setGDPRConsent(consent) {
    localStorage.setItem('gdpr_consent', consent.toString());
    this.sessionData.consentGiven = consent;
  }

  startTracking() {
    this.trackTimeSpent();
    this.trackScrollDepth();
    this.trackInteractions();
    this.trackExitIntent();
    this.checkReturnVisitor();
  }

  trackTimeSpent() {
    setInterval(() => {
      this.sessionData.timeSpent = Date.now() - this.sessionData.startTime;
      this.checkTimeBasedTriggers();
    }, 1000);
  }

  trackScrollDepth() {
    let ticking = false;
    
    const updateScrollDepth = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > this.sessionData.maxScroll) {
        this.sessionData.maxScroll = scrollPercent;
        this.checkScrollBasedTriggers();
      }
      
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDepth);
        ticking = true;
      }
    }, { passive: true });
  }

  trackInteractions() {
    const interactionEvents = ['click', 'keydown', 'mousemove', 'touchstart'];
    
    interactionEvents.forEach(event => {
      document.addEventListener(event, () => {
        this.sessionData.interactions++;
        this.calculateLeadScore();
      }, { passive: true });
    });
  }

  trackExitIntent() {
    let hasTriggered = false;
    
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY <= 0 && !hasTriggered && this.sessionData.timeSpent > 10000) {
        hasTriggered = true;
        this.triggerExitIntentPopup();
      }
    });
  }

  checkReturnVisitor() {
    const visitCount = parseInt(localStorage.getItem('visit_count') || '0') + 1;
    localStorage.setItem('visit_count', visitCount.toString());
    
    if (visitCount > 1) {
      this.sessionData.isReturnVisitor = true;
      // Return visitors get special treatment after 30 seconds
      setTimeout(() => {
        if (!this.sessionData.hasEmail) {
          this.showReturnVisitorOffer();
        }
      }, 30000);
    }
  }

  checkTimeBasedTriggers() {
    const { timeSpent } = this.sessionData;
    
    if (timeSpent >= LEAD_CAPTURE_CONFIG.timeThresholds.interested && 
        !this.triggers.has('interested')) {
      this.triggers.add('interested');
      this.showInterestedVisitorPopup();
    }
    
    if (timeSpent >= LEAD_CAPTURE_CONFIG.timeThresholds.engaged && 
        !this.triggers.has('engaged')) {
      this.triggers.add('engaged');
      this.showEngagedVisitorPopup();
    }
    
    if (timeSpent >= LEAD_CAPTURE_CONFIG.timeThresholds.highIntent && 
        !this.triggers.has('highIntent')) {
      this.triggers.add('highIntent');
      this.showHighIntentPopup();
    }
  }

  checkScrollBasedTriggers() {
    const { maxScroll } = this.sessionData;
    
    if (maxScroll >= LEAD_CAPTURE_CONFIG.scrollThresholds.engaged && 
        !this.triggers.has('scrollEngaged')) {
      this.triggers.add('scrollEngaged');
      this.showScrollEngagedPopup();
    }
  }

  calculateLeadScore() {
    const { timeSpent, maxScroll, interactions, pagesViewed } = this.sessionData;
    
    let score = 0;
    
    // Time spent scoring
    if (timeSpent > 120000) score += 40;      // 2+ minutes
    else if (timeSpent > 60000) score += 25;  // 1+ minute
    else if (timeSpent > 30000) score += 15;  // 30+ seconds
    else if (timeSpent > 15000) score += 10;  // 15+ seconds
    
    // Scroll depth scoring
    if (maxScroll > 75) score += 25;
    else if (maxScroll > 50) score += 15;
    else if (maxScroll > 25) score += 10;
    
    // Interaction scoring
    score += Math.min(interactions * 2, 20);
    
    // Page views scoring
    score += Math.min(pagesViewed.length * 10, 30);
    
    this.sessionData.leadScore = score;
    return score;
  }

  showInterestedVisitorPopup() {
    if (this.sessionData.hasEmail) return;
    
    this.showPopup({
      title: "Prime Dijital'e Hoş Geldiniz! 👋",
      message: "Dijital dünyada işinizi büyütmek için buradayız. Size özel fırsatlardan haberdar olmak ister misiniz?",
      type: "subtle",
      offer: "Ücretsiz SEO Analizi",
      buttonText: "Evet, İlgiliyim"
    });
  }

  showEngagedVisitorPopup() {
    if (this.sessionData.hasEmail) return;
    
    this.showPopup({
      title: "🎯 Size Özel Teklif!",
      message: "Web sitenizi incelediğinizi görüyoruz. Size özel %20 indirimli web tasarım teklifi hazırladık!",
      type: "offer",
      offer: "%20 İndirim + Ücretsiz SEO",
      buttonText: "Teklifi Al",
      urgency: "Bu teklif sadece bugün geçerli!"
    });
  }

  showHighIntentPopup() {
    if (this.sessionData.hasEmail) return;
    
    this.showPopup({
      title: "🚀 Premium Paket Fırsatı!",
      message: "Ciddi bir şekilde dijital çözümler arıyorsunuz. Size özel premium paket teklifimiz var!",
      type: "premium",
      offer: "Web + Mobil + SEO Paketi",
      buttonText: "Detayları Gör",
      urgency: "Sadece 5 kişiye özel!"
    });
  }

  showScrollEngagedPopup() {
    if (this.sessionData.hasEmail || this.triggers.has('engaged')) return;
    
    this.showPopup({
      title: "📧 Haftalık İpuçları",
      message: "Dijital pazarlama ipuçlarımızı kaçırmayın! Haftalık newsletter'ımıza katılın.",
      type: "newsletter",
      offer: "Ücretsiz E-book Hediyeli",
      buttonText: "Katıl"
    });
  }

  showExitIntentPopup() {
    if (this.sessionData.hasEmail) return;
    
    this.showPopup({
      title: "⏰ Dur! Gitmeden Önce...",
      message: "Size özel hazırladığımız ücretsiz dijital strateji rehberini almayı unutmayın!",
      type: "exit",
      offer: "Ücretsiz Strateji Rehberi",
      buttonText: "Hemen Al",
      urgency: "Bu fırsat bir daha gelmeyebilir!"
    });
  }

  showReturnVisitorOffer() {
    this.showPopup({
      title: "🎉 Tekrar Hoş Geldiniz!",
      message: "Sizi tekrar görmek harika! Sadece sizin için özel bir teklif hazırladık.",
      type: "return",
      offer: "Sadece Size Özel %30 İndirim",
      buttonText: "Teklifi Gör"
    });
  }

  showPopup(config) {
    // Create popup HTML
    const popup = document.createElement('div');
    popup.className = 'lead-capture-popup';
    popup.innerHTML = `
      <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl max-w-md w-full p-6 relative animate-bounce-in">
          <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600" onclick="this.closest('.lead-capture-popup').remove()">
            ✕
          </button>
          
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">${config.title}</h3>
            <p class="text-gray-600 mb-4">${config.message}</p>
            
            ${config.offer ? `
              <div class="bg-prime-yellow/10 border border-prime-yellow rounded-lg p-3 mb-4">
                <p class="font-semibold text-prime-black">${config.offer}</p>
              </div>
            ` : ''}
            
            ${config.urgency ? `
              <p class="text-red-600 text-sm font-medium mb-4">${config.urgency}</p>
            ` : ''}
            
            <form class="space-y-3" onsubmit="leadCaptureSystem.handleEmailSubmit(event, '${config.type}')">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prime-yellow focus:border-transparent"
              >
              <button 
                type="submit"
                class="w-full bg-prime-yellow text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                ${config.buttonText}
              </button>
            </form>
            
            <p class="text-xs text-gray-500 mt-3">
              E-postanızı sadece size özel teklifler için kullanırız. İstediğiniz zaman abonelikten çıkabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(popup);
    
    // Auto-close after 30 seconds if no interaction
    setTimeout(() => {
      if (document.contains(popup)) {
        popup.remove();
      }
    }, 30000);
  }

  async handleEmailSubmit(event, popupType) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    try {
      // Save lead to database/CRM
      await this.saveLeadToDatabase(email, popupType);
      
      // Mark as captured
      this.sessionData.hasEmail = true;
      localStorage.setItem('email_captured', 'true');
      
      // Show success message
      this.showSuccessMessage(popupType);
      
      // Remove popup
      event.target.closest('.lead-capture-popup').remove();
      
      // Track conversion
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'lead_capture',
          event_label: popupType,
          value: 1
        });
      }
      
    } catch (error) {
      console.error('Lead capture error:', error);
      this.showErrorMessage();
    }
  }

  async saveLeadToDatabase(email, source) {
    const leadData = {
      email,
      source,
      leadScore: this.sessionData.leadScore,
      timeSpent: this.sessionData.timeSpent,
      maxScroll: this.sessionData.maxScroll,
      interactions: this.sessionData.interactions,
      page: window.location.pathname,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      sessionId: this.generateSessionId()
    };
    
    // Send to your backend API
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to save lead');
    }
    
    return response.json();
  }

  showSuccessMessage(popupType) {
    const messages = {
      subtle: "Teşekkürler! Ücretsiz SEO analizinizi e-postanıza göndereceğiz.",
      offer: "Harika! %20 indirim kodunuz e-postanızda. Hemen kontrol edin!",
      premium: "Mükemmel! Premium paket detaylarını e-postanıza gönderdik.",
      newsletter: "Başarılı! İlk newsletter'ınız yolda. E-book'u da unutmadık!",
      exit: "Teşekkürler! Strateji rehberiniz e-postanızda sizi bekliyor.",
      return: "Hoş geldin tekrar! Özel indirim kodun e-postanda."
    };
    
    // Show toast notification
    this.showToast(messages[popupType] || "Teşekkürler! Size yakında ulaşacağız.");
  }

  showErrorMessage() {
    this.showToast("Bir hata oluştu. Lütfen tekrar deneyin.", "error");
  }

  showToast(message, type = "success") {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 p-4 rounded-lg text-white ${
      type === 'error' ? 'bg-red-500' : 'bg-green-500'
    } animate-slide-in`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 5000);
  }

  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
}

// Initialize the system
let leadCaptureSystem;

export const initLeadCapture = () => {
  if (typeof window !== 'undefined') {
    leadCaptureSystem = new LeadCaptureSystem();
    window.leadCaptureSystem = leadCaptureSystem; // Make it globally accessible
  }
};

export { leadCaptureSystem };