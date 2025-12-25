// Resim optimizasyon yardımcıları
export const optimizeImage = (src, alt, loading = 'lazy') => {
  return {
    src,
    alt,
    loading,
    decoding: 'async',
    style: {
      contentVisibility: 'auto',
      containIntrinsicSize: '800 600'
    }
  };
};

// WebP format desteği kontrolü
export const supportsWebP = () => {
  return new Promise(resolve => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Resim yükleme optimizasyonu
export const loadImageOptimized = async (imageSrc) => {
  const webPSupported = await supportsWebP();
  const optimizedSrc = webPSupported ? imageSrc.replace(/\.(jpg|jpeg|png)$/, '.webp') : imageSrc;
  
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(optimizedSrc);
    img.onerror = () => reject(new Error('Image load failed'));
    img.src = optimizedSrc;
  });
};
