var getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

function documentReady(callback) {
  if (document.readyState != "loading") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
}

function BrowserSupportsWEBP() {
  var element = document.createElement("canvas");

  if (!!(element.getContext && element.getContext("2d"))) {
    return element.toDataURL("image/webp").indexOf("data:image/webp") == 0;
  }

  return false;
}

function inject(container, file) {
  documentReady(function () {
    fetch(file)
      .then(function (response) {
        return response.text();
      })
      .then(function (body) {
        document.querySelector(container).innerHTML = body;
        refreshFsLightbox();
      });
  });
}

function loadPage(container, file) {
  inject(container, file);
  let element = document.getElementById(
    file.split("/")[1].replace(".html", "")
  );
  document.title = `Anneliese Greve | ${element.getAttribute("data-title")}`;

  ["works", "about"].forEach(function (page) {
    document.getElementById(page).classList.remove("active");
  });

  element.classList.add("active");
}

function loadMenu(file) {
  if (file == "index.html") {
    let rickRoll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    window.location.replace(
      getRandomInt(100) == 69
        ? rickRoll
        : "https://anneliesegreve.github.io/website/"
    );
  } else {
    loadPage("main", file);
  }
}

function loadWork(element) {
  work = document.getElementById(element.id);
  file = `html/works/${work.id}.html`;
  inject("main", file);
  document.title = `Anneliese Greve | ${work.getAttribute("data-title")}`;
}

// main event loop
documentReady(function () {
  var isWEBPCompatible = BrowserSupportsWEBP();

  var copyright = document.getElementById("copyright");
  copyright.innerHTML = `Anneliese Greve &copy; ${new Date().getFullYear()}. All Rights reserved.`;
});
