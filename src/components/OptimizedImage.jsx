import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Lazy loading observer
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, isInView]);

  // Generate srcSet for responsive images
  const getSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    const ext = baseSrc.split('.').pop();
    const base = baseSrc.replace(`.${ext}`, '');
    return [400, 800, 1200, 1920]
      .map(size => `${base}-${size}w.webp ${size}w`)
      .join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // If it's a local image, use the optimized version
  const isLocalImage = !src.startsWith('http') && !src.startsWith('//');
  const webpSrc = isLocalImage ? src.replace(/\.[^/.]+$/, '.webp') : src;
  const srcSet = getSrcSet(webpSrc);
  const baseName = webpSrc.split('/').pop();
  const ext = baseName.split('.').pop();
  const isSvg = ext.toLowerCase() === 'svg';

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        backgroundColor: isLoaded ? 'transparent' : '#f3f4f6'
      }}
      {...props}
    >
      {(isInView || priority) && (
        <picture>
          {/* WebP format for modern browsers */}
          {!isSvg && (
            <source
              srcSet={srcSet}
              type="image/webp"
              sizes={sizes}
            />
          )}
          
          {/* Fallback for browsers that don't support WebP */}
          <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={handleLoad}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              contentVisibility: 'auto'
            }}
            {...(priority ? { fetchPriority: 'high' } : {})}
          />
        </picture>
      )}

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-prime-yellow border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  sizes: PropTypes.string,
  priority: PropTypes.bool
};

export default OptimizedImage;