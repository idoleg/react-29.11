// set true in prod
const doCache = true;

const CACHE_NAME = 'react-chat-cache';

self.addEventListener('activate', (event) => {
  const cacheWhiteList = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then((keyList) =>
        Promise.all(keyList.map((key) => {
          if (!cacheWhiteList.includes(key)) {
            console.log('Deleting cache: ' + key);
            return caches.delete(key);
          }
        })),
      ),
  );
});

self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          fetch('../manifest/manifest.json')
            .then((response) => {
              response.json();
            })
            .then(() => {
              const urlsToCache = [
                '',
                '/chat/*',
                '/profile/*',
              ];
              cache.addAll(urlsToCache);
              console.log('cached');
            });
        }),
    );
  }
});

self.addEventListener('fetch', function(event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      }),
    );
  }
});
