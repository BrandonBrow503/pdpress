/* Public Domain Press offline cache. Optional: the app works without it.
   Same-site files only. Catalog searches (gutendex.com) always go to the network. */
var CACHE = 'pdpress-v7';
var FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './study-bg-2.jpg', './study-bg.jpg', './library-bg.jpg',
  './fonts/federo-latin.woff2', './fonts/marcellus-sc-latin.woff2', './fonts/josefin-sans-latin.woff2',
  './fonts/poiret-one-latin.woff2', './fonts/limelight-latin.woff2'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // Network first so updates show up right away; fall back to the cached copy offline.
  e.respondWith(fetch(req).then(function (resp) {
    if (resp && resp.ok) { var copy = resp.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
    return resp;
  }).catch(function () {
    return caches.match(req).then(function (r) { return r || caches.match('./index.html'); });
  }));
});
