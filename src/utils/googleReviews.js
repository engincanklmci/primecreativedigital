// Google My Business API Integration
// Ücretsiz ve güvenli yöntem

export const fetchGoogleBusinessReviews = async () => {
  try {
    // 1. OAuth 2.0 token al (backend'den)
    const token = await getOAuthToken();
    
    // 2. Business hesaplarını listele
    const accountsResponse = await fetch(
      'https://mybusinessaccountmanagement.googleapis.com/v1/accounts',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    const accounts = await accountsResponse.json();
    
    // 3. İlk hesaptaki lokasyonları bul
    const locationsResponse = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${accounts.accounts[0].name}/locations`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    const locations = await locationsResponse.json();
    
    // 4. Her lokasyonun yorumlarını çek
    const reviewsPromises = locations.locations.map(async (location) => {
      const reviewsResponse = await fetch(
        `https://mybusiness.googleapis.com/v4/${location.name}/reviews`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      return await reviewsResponse.json();
    });
    
    const allReviews = await Promise.all(reviewsPromises);
    
    // 5. Yorumları formatla
    const formattedReviews = allReviews
      .flat()
      .filter(review => review.rating >= 4) // Sadece 4+ yıldızlı yorumlar
      .slice(0, 10) // İlk 10 yorum
      .map(review => ({
        name: review.reviewer.displayName,
        rating: review.starRating,
        text: review.comment,
        time: formatTime(review.createTime),
        profile_photo_url: review.reviewer.profilePhotoUrl
      }));
    
    return formattedReviews;
    
  } catch (error) {
    console.error('Google Business Reviews error:', error);
    return [];
  }
};

// OAuth 2.0 token al (backend function)
const getOAuthToken = async () => {
  // Bu backend'de yapılacak - frontend'de güvenli değil
  const response = await fetch('/api/google-auth');
  const { token } = await response.json();
  return token;
};

// Zaman formatla
const formatTime = (timestamp) => {
  const now = Date.now();
  const diff = now - timestamp * 1000;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return 'Bugün';
  if (days === 1) return 'Dün';
  if (days < 7) return `${days} gün önce`;
  if (days < 30) return `${Math.floor(days / 7)} hafta önce`;
  return `${Math.floor(days / 30)} ay önce`;
};

// Manuel alternatif (API olmadan)
export const getManualReviews = () => [
  {
    name: "Yusuf Keskin",
    rating: 5,
    text: "Çok iligili ve işlerine verdikleri özen çok iyi kaliteli yapıyolar çok memnun kaldım",
    time: "2 hafta önce",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ADluMMqHj9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9=s120-c-rp-mo-br100"
  },
  {
    name: "Ahmet Yılmaz", 
    rating: 5,
    text: "Profesyonel çalışma, zamanında teslimat. Kesinlikle tavsiye ederim.",
    time: "1 ay önce",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ADluMMqHj9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9=s120-c-rp-mo-br100"
  }
];
