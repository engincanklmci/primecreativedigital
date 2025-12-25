/**
 * Email Marketing Automation API
 * Handles lead capture and automated email sequences
 */

// Email marketing service configuration
const EMAIL_CONFIG = {
  // You can use services like Mailchimp, SendGrid, or Mailgun
  provider: 'mailgun', // or 'sendgrid', 'mailchimp'
  
  // Mailgun configuration
  mailgun: {
    domain: 'mg.primedigitalcreative.com',
    apiKey: process.env.MAILGUN_API_KEY,
    baseUrl: 'https://api.mailgun.net/v3'
  },
  
  // Email templates
  templates: {
    welcome: 'welcome-template',
    seo_analysis: 'seo-analysis-template',
    discount_offer: 'discount-offer-template',
    premium_package: 'premium-package-template',
    newsletter: 'newsletter-template',
    exit_intent: 'exit-intent-template',
    return_visitor: 'return-visitor-template'
  }
};

class EmailMarketingService {
  constructor() {
    this.sequences = new Map();
    this.setupAutomationSequences();
  }

  setupAutomationSequences() {
    // 15-second visitor sequence
    this.sequences.set('interested_visitor', [
      { delay: 0, template: 'welcome', subject: 'Prime Dijital\'e Hoş Geldiniz!' },
      { delay: 3600000, template: 'services_info', subject: 'Hizmetlerimiz Hakkında Bilgi' }, // 1 hour
      { delay: 86400000, template: 'case_studies', subject: 'Projelerimizden Örnekler' }, // 1 day
      { delay: 259200000, template: 'consultation', subject: 'Ücretsiz Danışmanlık Hakkında' } // 3 days
    ]);

    // 45-second engaged visitor sequence
    this.sequences.set('engaged_visitor', [
      { delay: 0, template: 'services_detail', subject: 'Hizmet Detaylarımız' },
      { delay: 1800000, template: 'portfolio_showcase', subject: 'Portföyümüzü İnceleyin' }, // 30 min
      { delay: 86400000, template: 'contact_info', subject: 'Bizimle İletişime Geçin' }, // 1 day
      { delay: 172800000, template: 'testimonials', subject: 'Müşteri Yorumları' } // 2 days
    ]);

    // High intent visitor sequence
    this.sequences.set('high_intent_visitor', [
      { delay: 0, template: 'consultation_offer', subject: 'Ücretsiz Danışmanlık Teklifi' },
      { delay: 900000, template: 'contact_methods', subject: 'İletişim Yöntemlerimiz' }, // 15 min
      { delay: 3600000, template: 'project_process', subject: 'Proje Sürecimiz Nasıl İşler?' }, // 1 hour
      { delay: 86400000, template: 'next_steps', subject: 'Sonraki Adımlar' } // 1 day
    ]);
  }

  async captureLeadAndStartSequence(leadData) {
    try {
      // Save lead to database
      const lead = await this.saveLead(leadData);
      
      // Determine sequence based on lead source
      const sequenceType = this.determineSequenceType(leadData.source, leadData.leadScore);
      
      // Start email sequence
      await this.startEmailSequence(lead.email, sequenceType, leadData);
      
      // Add to CRM/mailing list
      await this.addToMailingList(lead);
      
      return { success: true, leadId: lead.id, sequence: sequenceType };
      
    } catch (error) {
      console.error('Lead capture error:', error);
      throw error;
    }
  }

  determineSequenceType(source, leadScore) {
    if (source === 'highIntent' || leadScore > 80) {
      return 'high_intent_visitor';
    } else if (source === 'engaged' || source === 'offer' || leadScore > 50) {
      return 'engaged_visitor';
    } else {
      return 'interested_visitor';
    }
  }

  async saveLead(leadData) {
    // This would typically save to your database
    // For now, we'll simulate with localStorage for demo
    const leads = JSON.parse(localStorage.getItem('captured_leads') || '[]');
    
    const lead = {
      id: Date.now().toString(),
      ...leadData,
      status: 'new',
      createdAt: new Date().toISOString(),
      lastContactAt: null,
      emailsSent: 0,
      conversions: []
    };
    
    leads.push(lead);
    localStorage.setItem('captured_leads', JSON.stringify(leads));
    
    return lead;
  }

  async startEmailSequence(email, sequenceType, leadData) {
    const sequence = this.sequences.get(sequenceType);
    if (!sequence) return;

    // Schedule each email in the sequence
    sequence.forEach((emailConfig, index) => {
      setTimeout(async () => {
        await this.sendEmail({
          to: email,
          template: emailConfig.template,
          subject: emailConfig.subject,
          data: {
            ...leadData,
            sequenceStep: index + 1,
            totalSteps: sequence.length
          }
        });
      }, emailConfig.delay);
    });
  }

  async sendEmail({ to, template, subject, data }) {
    try {
      // Get email template
      const emailContent = await this.getEmailTemplate(template, data);
      
      // Send via email service (Mailgun example)
      const response = await fetch(`${EMAIL_CONFIG.mailgun.baseUrl}/${EMAIL_CONFIG.mailgun.domain}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(`api:${EMAIL_CONFIG.mailgun.apiKey}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          from: 'Prime Dijital <noreply@primedigitalcreative.com>',
          to: to,
          subject: subject,
          html: emailContent.html,
          text: emailContent.text
        })
      });

      if (response.ok) {
        console.log(`Email sent successfully to ${to}`);
        this.trackEmailSent(to, template);
      } else {
        throw new Error(`Failed to send email: ${response.statusText}`);
      }

    } catch (error) {
      console.error('Email sending error:', error);
    }
  }

  async getEmailTemplate(templateName, data) {
    // Email templates - you can store these in files or database
    const templates = {
      welcome: {
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #FFD700;">Prime Dijital'e Hoş Geldiniz!</h1>
            <p>Merhaba,</p>
            <p>Prime Dijital ailesine katıldığınız için teşekkür ederiz! Size en iyi dijital çözümleri sunmak için buradayız.</p>
            <p><strong>Hizmetlerimiz:</strong></p>
            <ul>
              <li>🌐 Profesyonel Web Tasarım</li>
              <li>📱 Mobil Uygulama Geliştirme</li>
              <li>🚀 SEO ve Dijital Pazarlama</li>
              <li>🎨 Grafik Tasarım ve Kurumsal Kimlik</li>
            </ul>
            <p>Hizmetlerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.</p>
            <p>İyi günler,<br>Prime Dijital Ekibi</p>
          </div>
        `,
        text: 'Prime Dijital\'e hoş geldiniz! Size en iyi dijital çözümleri sunmak için buradayız.'
      },
      
      services_info: {
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #FFD700;">🔍 Hizmetlerimiz Hakkında</h1>
            <p>Merhaba,</p>
            <p>Prime Dijital olarak sunduğumuz hizmetler hakkında detaylı bilgi:</p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Dijital Çözümlerimiz:</h3>
              <p>✅ Web Tasarım ve Geliştirme<br>
              ✅ Mobil Uygulama Geliştirme<br>
              ✅ SEO ve Dijital Pazarlama<br>
              ✅ Grafik Tasarım Hizmetleri</p>
            </div>
            <a href="https://primedigitalcreative.com/hizmetler" 
               style="background: #FFD700; color: black; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Hizmetlerimizi İnceleyin
            </a>
            <p>Sorularınız için bize ulaşabilirsiniz!</p>
          </div>
        `,
        text: 'Hizmetlerimiz hakkında detaylı bilgi için sitemizi ziyaret edin.'
      },
      
      consultation_offer: {
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #FFD700;">🎉 Ücretsiz Danışmanlık</h1>
            <p>Projeniz hakkında konuşmak ister misiniz?</p>
            <div style="background: #FFD700; color: black; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin: 0;">Ücretsiz Danışmanlık</h2>
              <p style="margin: 5px 0;">Projenizi değerlendirelim</p>
            </div>
            <p>Size en uygun çözümü bulmak için buradayız.</p>
            <a href="https://primedigitalcreative.com/iletisim" 
               style="background: #FFD700; color: black; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              İletişime Geç
            </a>
          </div>
        `,
        text: 'Ücretsiz danışmanlık için bizimle iletişime geçin!'
      }
    };

    return templates[templateName] || templates.welcome;
  }

  trackEmailSent(email, template) {
    // Track email sending for analytics
    if (window.gtag) {
      window.gtag('event', 'email_sent', {
        event_category: 'email_marketing',
        event_label: template,
        custom_parameter_1: email
      });
    }
  }

  async addToMailingList(lead) {
    // Add to your mailing list service (Mailchimp, etc.)
    // This is a placeholder - implement based on your service
    console.log(`Added ${lead.email} to mailing list`);
  }

  // Unsubscribe handling
  async handleUnsubscribe(email, reason = '') {
    try {
      // Remove from active sequences
      // Update database
      // Send confirmation email
      console.log(`Unsubscribed: ${email}, Reason: ${reason}`);
    } catch (error) {
      console.error('Unsubscribe error:', error);
    }
  }

  // Analytics and reporting
  getEmailStats() {
    const leads = JSON.parse(localStorage.getItem('captured_leads') || '[]');
    
    return {
      totalLeads: leads.length,
      bySource: leads.reduce((acc, lead) => {
        acc[lead.source] = (acc[lead.source] || 0) + 1;
        return acc;
      }, {}),
      averageLeadScore: leads.reduce((sum, lead) => sum + (lead.leadScore || 0), 0) / leads.length,
      conversionRate: 0 // Calculate based on your conversion tracking
    };
  }
}

// Export for use in your application
export const emailMarketingService = new EmailMarketingService();

// API endpoint handler (if using Next.js API routes or similar)
export async function handleLeadCapture(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const result = await emailMarketingService.captureLeadAndStartSequence(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to capture lead' });
  }
}