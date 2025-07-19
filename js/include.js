window.addEventListener("DOMContentLoaded", () => {
    fetch('../components/navbar.html')
        .then(r => r.text())
        .then(html => document.querySelector('nav').innerHTML = html);

    fetch('../components/footer.html')
        .then(r => r.text())
        .then(html => document.querySelector('footer').innerHTML = html);
});
