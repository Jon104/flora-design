self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("mysite-static-v3").then(function (cache) {
      return cache.addAll(["/vid/main_video.mp4"]);
    })
  );
});
