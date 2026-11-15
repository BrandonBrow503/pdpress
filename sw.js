/* Public Domain Press offline cache. Optional: the app works without it.
   Same-site files only. Catalog searches (gutendex.com) always go to the network. */
var CACHE = 'pdpress-v12', INBOX = 'pdpress-inbox';
var FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './study-bg-2.jpg', './study-bg.jpg', './library-bg.jpg',
  './fonts/federo-latin.woff2', './fonts/marcellus-sc-latin.woff2', './fonts/josefin-sans-latin.woff2',
  './fonts/poiret-one-latin.woff2', './fonts/limelight-latin.woff2'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { if (k !== CACHE && k !== INBOX) return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request, u = new URL(req.url);
  // v2.9: a project file shared to PD Press from Drive or Downloads (Android share sheet).
  if (req.method === 'POST' && u.origin === self.location.origin && u.searchParams.has('share-target')) {
    e.respondWith(req.formData().then(function (fd) {
      var files = fd.getAll('bundle').filter(function (f) { return f && typeof f !== 'string'; });
      return caches.open(INBOX).then(function (c) {
        return Promise.all(files.map(function (f, i) {
          return c.put('./__inbox/' + Date.now() + '-' + i, new Response(f, { headers: { 'content-type': f.type || 'application/octet-stream', 'x-name': encodeURIComponent(f.name || 'project.pdpress.zip') } }));
        }));
      }).then(function () { return files.length; });
    }).then(function (n) { return Response.redirect(new URL('./?shared=' + (n ? 1 : 0), self.location).href, 303); },
      function () { return Response.redirect(new URL('./?shared=0', self.location).href, 303); }));
    return;
  }
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
