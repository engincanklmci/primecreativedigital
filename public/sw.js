// Advanced Service Worker for Prime Dijital
const CACHE_NAME = 'prime-dijital-v2';
const STATIC_CACHE = 'prime-static-v2';
const DYNAMIC_CACHE = 'prime-dynamic-v2';
const IMAGE_CACHE = 'prime-images-v2';

// Static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
  '/logo.png',
  '/logo.svg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS)),
      self.skipWaiting()
    ])
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (!cacheName.includes('prime-') || 
                !cacheName.includes('v2')) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (url.origin !== location.origin) return;

  // Route-based caching strategies
  if (url.pathname.match(/\.(js|css|woff2?|ttf|eot)$/)) {
    // Static assets - Cache First
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
    // Images - Stale While Revalidate
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE));
  } else if (url.pathname.startsWith('/api/')) {
    // API calls - Network First
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    // HTML pages - Stale While Revalidate
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
  }
});

// Cache First Strategy
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return new Response('Offline', { status: 503 });
  }
}

// Network First Strategy
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    return cached || new Response('Offline', { status: 503 });
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request).then(response => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);
  
  return cached || fetchPromise;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Handle offline form submissions
  const cache = await caches.open(DYNAMIC_CACHE);
  const requests = await cache.keys();
  
  for (const request of requests) {
    if (request.url.includes('/api/contact')) {
      try {
        await fetch(request);
        await cache.delete(request);
      } catch (error) {
        console.log('Sync failed for:', request.url);
      }
    }
  }
}
