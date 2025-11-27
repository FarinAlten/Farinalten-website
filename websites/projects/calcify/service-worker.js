    self.addEventListener('install', function (e) {
    console.log('Service Worker installiert');
    e.waitUntil(
        caches.open('Web Calculator').then(function (cache) {
            return cache.addAll([
                './websites/projects/calculator.html',
                './css/style.css',
                './icons/icon-512.png'
            ])
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});