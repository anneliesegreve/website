const PAGES = ['home', 'works', 'exhibitions', 'contact'];

var capitalize = (string) => string.replace(/^\w/, (c) => c.toUpperCase());

function copyMailAddress() {
    navigator.clipboard.writeText('greve.anneliese@outlook.de')
    .then(() => {
        alert('Copied mail address to clipboard!');
    })
    .catch(err => {
        console.error(`Could not copy text to clipboard: ${err}`);
    });
}

function documentReady(callback) {
    if (document.readyState != 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

function loadMenu(file) {
    if (file == 'index.html') {
        window.location.replace('http://127.0.0.1:5500/index.html');
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
    document.title = capitalize(id);
    
    PAGES.forEach(function(page) {
        document.getElementById(page).classList.remove('active');
    });
    
    document.getElementById(id).classList.add('active');
}

var copyright = document.getElementById("copyright"); 
copyright.innerHTML = `Anneliese Greve &copy; ${new Date().getFullYear()}. All Rights reserved.`;