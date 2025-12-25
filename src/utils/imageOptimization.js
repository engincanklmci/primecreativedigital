/**
 * Image optimization utilities for better performance
 */

// WebP support detection
export const supportsWebP = () => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Generate responsive image sources
export const generateImageSources = (imagePath, sizes = [400, 800, 1200]) => {
  const extension = imagePath.split('.').pop();
  const basePath = imagePath.replace(`.${extension}`, '');
  
  return sizes.map(size => ({
    srcSet: `${basePath}-${size}w.webp ${size}w`,
    media: `(max-width: ${size}px)`,
    type: 'image/webp'
  }));
};

// Lazy loading intersection observer
export const createLazyLoadObserver = (callback) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
};

// Optimized image component props
export const getOptimizedImageProps = (src, alt, width, height) => ({
  src,
  alt,
  width,
  height,
  loading: 'lazy',
  decoding: 'async',
  style: { aspectRatio: `${width}/${height}` }
});