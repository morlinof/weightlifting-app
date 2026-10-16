/* Service worker di Scheda Pesistica — versione e3013e2ad6
   - pagina: prima la rete (così gli aggiornamenti arrivano subito), poi la copia salvata se sei offline;
   - librerie, font e icone: dalla copia salvata. */
const CACHE = "scheda-e3013e2ad6";
const FILES = [
  "./",
  "fonts/barlow-condensed-latin-600-normal.woff2",
  "fonts/barlow-condensed-latin-700-normal.woff2",
  "fonts/fonts.css",
  "fonts/public-sans-latin-400-normal.woff2",
  "fonts/public-sans-latin-500-normal.woff2",
  "fonts/public-sans-latin-600-normal.woff2",
  "fonts/public-sans-latin-700-normal.woff2",
  "icons/apple-touch-icon.png",
  "icons/favicon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "manifest.webmanifest",
  "vendor/exceljs.min.js",
  "vendor/jspdf.umd.min.js",
  "vendor/pdf.min.js",
  "vendor/pdf.worker.min.js",
  "index.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("scheda-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put("index.html", copy));
          return res;
        })
        .catch(() => caches.match("index.html"))
    );
    return;
  }
  event.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
