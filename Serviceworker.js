const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/homepage.html',
  '/application.html',
  '/about.html',
  '/userguide.html',
  '/marketing.html',
  '/style.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
