const CACHE_NAME = "simple-pwa-cache-v1";
const urlsToCache = [
  "/",
  "./index.html",
  "./styles.css",
  "./index.js",
  "./manifest.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(
      (response) =>
        response ||
        fetch(event.request, {
          mode: "no-cors",
        })
    )
  );
});
