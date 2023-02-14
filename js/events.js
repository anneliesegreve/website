const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

function copyMailAddress(element) {
  navigator.clipboard
    .writeText(element.innerHTML.trim())
    .then(() => {
      alert("Copied mail address to clipboard!");
    })
    .catch((err) => {
      console.error(`Could not copy text to clipboard: ${err}`);
    });
}
