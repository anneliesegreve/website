function copyMailAddress() {
    navigator.clipboard.writeText('greve.anneliese@outlook.de')
    .then(() => {
        alert('Copied mail address to clipboard!');
    })
    .catch(err => {
        console.error(`Could not copy text to clipboard: ${err}`);
    });
}
