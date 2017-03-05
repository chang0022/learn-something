var cacheStroageKey = 'minimal-pwd-3'

var cacheList = [
  '/',
  'index.html',
  'main.css',
  'e.png'
]

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheStroageKey).then(function(cache) {
      return cache.addAll(cacheList)
    }).then(function() {
      return self.skipWaiting()
    })
  )
})

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response != null) {
        return response
      }
      return fetch(e.request.url)
    })
  )
})

self.addEventListener('activate', function(e) {
  e.waitUntil(
    Promise.all(
      caches.keys().then(cacheNames => {
        return cacheNames.map(name => {
          if (name !== cacheStroageKey) {
            return caches.delete(name)
          }
        })
      })
    ).then(() => {
      return self.clients.claim()
    })
  )
})