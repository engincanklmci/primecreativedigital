/**
 * Content Enhancement Utilities for Better SEO
 */

// Content templates for better SEO
export const contentTemplates = {
  // FAQ sections for different pages
  homeFAQ: [
    {
      question: "Prime Dijital hangi hizmetleri sunuyor?",
      answer: "Web tasarım, mobil uygulama geliştirme, SEO hizmetleri, dijital pazarlama, grafik tasarım ve kurumsal kimlik çalışmaları sunuyoruz."
    },
    {
      question: "İstanbul'da dijital ajans hizmeti alabilir miyim?",
      answer: "Evet, İstanbul merkezli olarak hizmet veriyoruz. Ayrıca Türkiye genelinde uzaktan da projeler yürütüyoruz."
    },
    {
      question: "Web sitesi ne kadar sürede teslim edilir?",
      answer: "Proje kapsamına göre değişmekle birlikte, standart kurumsal web siteleri 2-4 hafta içinde teslim edilir."
    }
  ],
  
  servicesFAQ: [
    {
      question: "Web tasarım fiyatları nasıl belirlenir?",
      answer: "Fiyatlar projenin kapsamı, sayfa sayısı, özel tasarım gereksinimleri ve ek özellikler göz önünde bulundurularak belirlenir."
    },
    {
      question: "SEO hizmetleri ne kadar sürede sonuç verir?",
      answer: "SEO çalışmaları genellikle 3-6 ay içinde görünür sonuçlar vermeye başlar. Sürekli optimizasyon ile uzun vadeli başarı sağlanır."
    }
  ]
};

// Rich content sections
export const richContentSections = {
  whyChooseUs: {
    title: "Neden Prime Dijital'i Tercih Etmelisiniz?",
    content: [
      {
        title: "İstanbul'da Köklü Deneyim",
        description: "İstanbul'un dijital pazarını yakından tanıyan ekibimizle yerel ve global projelerde başarılı sonuçlar elde ediyoruz."
      },
      {
        title: "360° Dijital Çözümler",
        description: "Web tasarımdan dijital pazarlamaya, SEO'dan mobil uygulamaya kadar tüm dijital ihtiyaçlarınızı tek çatı altında karşılıyoruz."
      },
      {
        title: "Müşteri Odaklı Yaklaşım",
        description: "Her projeyi müşterimizin hedefleri doğrultusunda özelleştiriyor, sürekli iletişim halinde kalıyoruz."
      }
    ]
  },
  
  processSteps: {
    title: "Çalışma Sürecimiz",
    steps: [
      {
        step: 1,
        title: "Keşif ve Analiz",
        description: "İhtiyaçlarınızı analiz ediyor, hedef kitlenizi ve rakiplerinizi inceliyoruz."
      },
      {
        step: 2,
        title: "Strateji Geliştirme",
        description: "Analiz sonuçlarına göre size özel dijital strateji ve yol haritası oluşturuyoruz."
      },
      {
        step: 3,
        title: "Tasarım ve Geliştirme",
        description: "Modern tasarım anlayışı ve güncel teknolojilerle projenizi hayata geçiriyoruz."
      },
      {
        step: 4,
        title: "Test ve Optimizasyon",
        description: "Kapsamlı testler yapıyor, performansı optimize ediyor ve canlıya alıyoruz."
      },
      {
        step: 5,
        title: "Destek ve Bakım",
        description: "Proje teslimi sonrası sürekli destek ve güncellemelerle yanınızda olmaya devam ediyoruz."
      }
    ]
  }
};

// Local SEO content
export const localSEOContent = {
  istanbul: {
    neighborhoods: [
      "Beşiktaş", "Şişli", "Kadıköy", "Üsküdar", "Beyoğlu", 
      "Bakırköy", "Maltepe", "Kartal", "Pendik", "Tuzla"
    ],
    services: [
      "İstanbul web tasarım", "İstanbul dijital ajans", "İstanbul SEO hizmetleri",
      "İstanbul mobil uygulama", "İstanbul grafik tasarım"
    ]
  }
};

// Generate location-based content
export const generateLocationContent = (service, location = "İstanbul") => {
  return {
    title: `${service} Hizmetleri ${location}`,
    description: `${location}'da profesyonel ${service} hizmetleri. Prime Dijital ile işinizi dijital dünyada öne çıkarın.`,
    content: `${location} bölgesinde ${service} alanında uzman ekibimizle hizmet veriyoruz. Yerel pazar dinamiklerini bilen deneyimli ekibimiz ile projelerinizi başarıya ulaştırıyoruz.`
  };
};

// Content optimization suggestions
export const getContentSuggestions = (pageType, currentContent = "") => {
  const suggestions = [];
  
  // Word count check
  const wordCount = currentContent.split(' ').length;
  if (wordCount < 300) {
    suggestions.push({
      type: "content-length",
      priority: "high",
      message: `İçerik çok kısa (${wordCount} kelime). SEO için en az 300 kelime önerilir.`
    });
  }
  
  // Heading structure check
  const h1Count = (currentContent.match(/<h1/g) || []).length;
  const h2Count = (currentContent.match(/<h2/g) || []).length;
  
  if (h1Count === 0) {
    suggestions.push({
      type: "heading-structure",
      priority: "high",
      message: "Sayfada H1 başlığı bulunmuyor."
    });
  }
  
  if (h2Count < 2) {
    suggestions.push({
      type: "heading-structure",
      priority: "medium",
      message: "Daha fazla H2 başlığı ekleyerek içeriği yapılandırın."
    });
  }
  
  // Internal linking check
  const internalLinks = (currentContent.match(/href="\/[^"]*"/g) || []).length;
  if (internalLinks < 3) {
    suggestions.push({
      type: "internal-linking",
      priority: "medium",
      message: "Daha fazla iç bağlantı ekleyerek sayfa otoritesini artırın."
    });
  }
  
  return suggestions;
};