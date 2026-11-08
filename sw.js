// Semiyoloji Rehberi: offline cache
const CACHE = 'semiyoloji-v11';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'jspdf.umd.min.js', 'fonts.js',
  'img/b003.jpg', 'img/b005.jpg', 'img/b006.jpg', 'img/b007.jpg', 'img/b011.jpg', 'img/b012.jpg', 'img/b013.jpg', 'img/b018.jpg', 'img/b019.jpg', 'img/b020.jpg', 'img/b021.jpg', 'img/b028.jpg', 'img/b029.jpg', 'img/b030.jpg', 'img/b036.jpg', 'img/b037.jpg', 'img/b038.jpg', 'img/b039.jpg', 'img/b040.jpg', 'img/b041.jpg', 'img/b042.jpg', 'img/b044.jpg', 'img/b070.jpg', 'img/b071.jpg', 'img/b072.jpg', 'img/b073.jpg', 'img/b074.jpg', 'img/b075.jpg', 'img/b079.jpg', 'img/b080.jpg', 'img/b082.jpg', 'img/b087.jpg', 'img/b091.jpg', 'img/b092.jpg', 'img/b093.jpg', 'img/b094.jpg', 'img/b095.jpg', 'img/b096.jpg', 'img/b097.jpg', 'img/b114.jpg', 'img/b117.jpg', 'img/b118.jpg', 'img/b119.jpg', 'img/b120.jpg', 'img/b123.jpg', 'img/b124.jpg', 'img/b125.jpg', 'img/b138.jpg', 'img/b139.jpg', 'img/b140.jpg', 'img/b141.jpg', 'img/b143.jpg', 'img/b144.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Pages: network first (updates show at once when online), cache when offline.
// Other files: cache first, refreshed in the background.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('index.html', copy));
        return res;
      }).catch(() => caches.match('index.html'))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => {
      const net = fetch(e.request).then(res => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
