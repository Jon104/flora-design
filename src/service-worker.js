import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("flora-design").then(function (cache) {
      return cache.addAll(["./vid", "./img"]);
    })
  );
});
