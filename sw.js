importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js'
);

workbox.routing.registerRoute(
  new RegExp('https://newsapi.org/v2'),
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  })
);

workbox.precaching.precacheAndRoute([
  {
    "url": "bundle.js",
    "revision": "b1b806d9c2d640f315020e000b7ef711"
  },
  {
    "url": "favicon.ico",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "index.html",
    "revision": "a2653e89849f783f4abd161667259d57"
  },
  {
    "url": "manifest.json",
    "revision": "5c365d4aa7d4cfdfb646dbd0624dcd3d"
  },
  {
    "url": "report.html",
    "revision": "96582a133ad20543d46c4f697f769753"
  }
]);
