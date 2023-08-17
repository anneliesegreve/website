const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

function documentReady(callback) {
  if (document.readyState != "loading") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
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

function loadPage(event) {
  let element = document.getElementById(event.currentTarget.id);
  document.title = `Anneliese Greve | ${element.getAttribute("data-title")}`;

  ["works", "about"].forEach(function (page) {
    document.getElementById(page).classList.remove("active");
  });

  element.classList.add("active");
  inject("main", `html/${element.id}.html`);
}

function loadWork(element) {
  const work = document.getElementById(element.id);
  inject("main", `html/works/${work.id}.html`);
  document.title = `Anneliese Greve | ${work.getAttribute("data-title")}`;
}

function scrollToTop () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}
