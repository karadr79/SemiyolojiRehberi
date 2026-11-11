// Semiyoloji Rehberi: offline cache
const CACHE = 'semiyoloji-v14';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'jspdf.umd.min.js', 'fonts.js', 'fonts.css', 'ortak.css', 'ortak.js', 'atkinson-hyperlegible-mono-latin-400-normal.woff2', 'atkinson-hyperlegible-mono-latin-600-normal.woff2', 'atkinson-hyperlegible-mono-latin-ext-400-normal.woff2', 'atkinson-hyperlegible-mono-latin-ext-600-normal.woff2', 'atkinson-hyperlegible-next-latin-400-normal.woff2', 'atkinson-hyperlegible-next-latin-500-normal.woff2', 'atkinson-hyperlegible-next-latin-700-normal.woff2', 'atkinson-hyperlegible-next-latin-800-normal.woff2', 'atkinson-hyperlegible-next-latin-ext-400-normal.woff2', 'atkinson-hyperlegible-next-latin-ext-500-normal.woff2', 'atkinson-hyperlegible-next-latin-ext-700-normal.woff2', 'atkinson-hyperlegible-next-latin-ext-800-normal.woff2',
  'img/b003.jpg', 'img/b005.jpg', 'img/b006.jpg', 'img/b007.jpg', 'img/b011.jpg', 'img/b012.jpg', 'img/b013.jpg', 'img/b018.jpg', 'img/b019.jpg', 'img/b020.jpg', 'img/b021.jpg', 'img/b028.jpg', 'img/b029.jpg', 'img/b030.jpg', 'img/b036.jpg', 'img/b037.jpg', 'img/b038.jpg', 'img/b039.jpg', 'img/b040.jpg', 'img/b041.jpg', 'img/b042.jpg', 'img/b044.jpg', 'img/b070.jpg', 'img/b071.jpg', 'img/b072.jpg', 'img/b073.jpg', 'img/b074.jpg', 'img/b075.jpg', 'img/b079.jpg', 'img/b080.jpg', 'img/b082.jpg', 'img/b087.jpg', 'img/b091.jpg', 'img/b092.jpg', 'img/b093.jpg', 'img/b094.jpg', 'img/b095.jpg', 'img/b096.jpg', 'img/b097.jpg', 'img/b114.jpg', 'img/b117.jpg', 'img/b118.jpg', 'img/b119.jpg', 'img/b120.jpg', 'img/b123.jpg', 'img/b124.jpg', 'img/b125.jpg', 'img/b138.jpg', 'img/b139.jpg', 'img/b140.jpg', 'img/b141.jpg', 'img/b143.jpg', 'img/b144.jpg', 'img/t019_1.png', 'img/t021_2.png', 'img/t044_1.png', 'img/t054_1.png', 'img/t059_1.png', 'img/t063_1.png', 'img/t065_2.png', 'img/t067_3.png', 'img/t068_4.png', 'img/t072_1.png', 'img/t080_1.png', 'img/t081_2.png', 'img/t086_1.png', 'img/t089_2.png', 'img/t095_1.png', 'img/t099_1.png', 'img/t100_2.png', 'img/t102_3.png', 'img/t108_1.png', 'img/t109_2.png', 'img/t112_1.png', 'img/t113_2.png', 'img/t120_1.png', 'img/t121_2.png', 'img/t124_1.png', 'img/t131_1.png', 'img/t148_1.png', 'img/t149_2.png', 'img/t150_3.png', 'img/t152_4.png', 'img/t166_1.png', 'img/t168_1.png', 'img/t170_2.png', 'img/t179_1.png', 'img/t183_2.png', 'img/t184_3.png', 'img/t188_1.png', 'img/t188_2.png', 'img/t194_1.png', 'img/t195_2.png', 'img/t196_3.png', 'img/t197_4.png', 'img/t201_1.png', 'img/t202_2.png', 'img/t204_3.png', 'img/t205_4.png', 'img/t220_1.png', 'img/t233_1.png', 'img/t235_2.png', 'img/t241_1.png', 'img/t247_1.png', 'img/t248_2.png', 'img/t264_1.png', 'img/t267_2.png', 'img/t272_1.png', 'img/t276_1.png', 'img/t280_2.png', 'img/t281_3.png', 'img/t282_4.png', 'img/t288_1.png', 'img/t291_2.png', 'img/t292_3.png', 'img/t295_1.png', 'img/t301_1.png', 'img/t307_1.png', 'img/t308_2.png', 'img/t314_1.png', 'img/t320_1.png', 'img/t325_1.png', 'img/t327_2.png', 'img/t333_1.png', 'img/t334_2.png', 'img/t341_1.png', 'img/t341_2.png', 'img/t347_1.png', 'img/t349_2.png', 'img/t363_1.png', 'img/t364_2.png', 'img/t369_3.png', 'img/t374_1.png', 'img/t376_2.png', 'img/t377_3.png', 'img/t379_4.png', 'img/t386_5.png', 'img/t388_6.png', 'img/t388_7.png', 'img/t389_8.png', 'img/t390_10.png', 'img/t390_11.png', 'img/t390_9.png', 'img/t396_1.png', 'img/t397_2.png', 'img/t397_3.png', 'img/t398_4.png', 'img/t400_5.png', 'img/t455_1.png', 'img/t465_1.png', 'img/t466_2.png', 'img/t508_1.png', 'img/t512_2.png', 'img/t540_1.png', 'img/t543_2.png', 'img/t549_1.png', 'img/t555_2.png', 'img/t557_3.png', 'img/t558_4.png', 'img/t571_1.png', 'img/t582_1.png', 'img/t628_1.png', 'img/t630_2.png', 'img/t632_3.png', 'img/t645_1.png', 'img/t650_2.png', 'img/t653_1.png', 'img/t658_2.png', 'img/t707_1.png', 'img/t708_2.png', 'img/t714_3.png', 'img/t718_1.png', 'img/t721_2.png', 'img/t722_3.png'];

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
