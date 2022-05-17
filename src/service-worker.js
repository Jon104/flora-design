import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("flora-design-v1").then(function (cache) {
      return cache.addAll([
        "/vid/main_video.mp4",
        "/vid/vertical.mp4",
        "/img/logo.png",
        "/img/main_alt.png",
        "/img/middle_section_long_image.jpeg",
        "/img/my_approach.png",
        "/img/panaches_main.png",
        "/img/panaches_main_mobile.png",
        "/img/personalPiece_mobile.png",
        "/img/personalPiece.png",
        "/img/landing_middle_view.jpg",
      ]);
    })
  );
});
