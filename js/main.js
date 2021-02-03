const PAGES = ['works', 'cv', 'contact'];

var capitalize = (string) => string.replace(/^\w/, (c) => c.toUpperCase());

function documentReady(callback) {
    if (document.readyState != 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

function loadMenu(file) {
    if (file == 'index.html') {
        window.location.replace('https://anneliesegreve.github.io/website/');
    } else {
        loadPage('main', file);
    }
}

function loadPage(container, file) {
    fetch(file)
    .then(function(response) {
        return response.text();
    })
    .then(function(body) {
        document.querySelector(container).innerHTML = body;
    });
    let id = file.split('/')[1].replace('.html', '');
    document.title = id === 'cv' ? 'CV' : capitalize(id);
    
    PAGES.forEach(function(page) {
        document.getElementById(page).classList.remove('active');
    });
    
    document.getElementById(id).classList.add('active');
}

var copyright = document.getElementById("copyright"); 
copyright.innerHTML = `Anneliese Greve &copy; ${new Date().getFullYear()}. All Rights reserved.`;