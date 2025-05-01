self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('wordfind-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html'
                // Add more files if you extract CSS or JS later
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});