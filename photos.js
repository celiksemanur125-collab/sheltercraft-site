document.querySelectorAll("img[src^='media/']").forEach(function (img) {
  var src = img.getAttribute("src");
  if (!src || src.indexOf(".b64") !== -1 || src.indexOf("data:") === 0) return;
  fetch(src + ".b64").then(function (r) { return r.ok ? r.text() : ""; }).then(function (b64) {
    if (!b64) return;
    var mime = /\.png$/i.test(src) ? "image/png" : "image/jpeg";
    img.src = "data:" + mime + ";base64," + b64.trim();
  });
});
