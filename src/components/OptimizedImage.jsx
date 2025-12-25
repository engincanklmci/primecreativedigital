import React, { useState, useRef, useEffect } from 'react';
import { getOptimizedImageProps, createLazyLoadObserver } from '../utils/imageOptimization';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Create lazy loading observer
  useEffect(() => {
    if (priority || isInView) return;

    observerRef.current = createLazyLoadObserver((target) => {
      setIsInView(true);
      if (observerRef.current) {
        observerRef.current.unobserve(target);
      }
    });

    if (imgRef.current && observerRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, isInView]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setError(true);
    onError?.(e);
  };

  // Generate WebP and fallback sources
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const optimizedProps = getOptimizedImageProps(src, alt, width, height);

  // Placeholder styles
  const placeholderStyle = {
    backgroundColor: '#f3f4f6',
    backgroundImage: blurDataURL ? `url(${blurDataURL})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: isLoaded ? 'none' : 'blur(10px)',
    transition: 'filter 0.3s ease-out'
  };

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}
        style={{ width, height }}
      >
        <span className="text-sm">Resim yüklenemedi</span>
      </div>
    );
  }

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && placeholder === 'blur' && (
        <div 
          className="absolute inset-0"
          style={placeholderStyle}
        />
      )}
      
      {/* Main Image */}
      {(isInView || priority) && (
        <picture>
          {/* WebP source */}
          <source 
            srcSet={webpSrc} 
            type="image/webp"
            sizes={sizes}
          />
          
          {/* Fallback */}
          <img
            {...optimizedProps}
            {...props}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={handleLoad}
            onError={handleError}
            sizes={sizes}
          />
        </picture>
      )}
      
      {/* Loading indicator */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-prime-yellow border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;