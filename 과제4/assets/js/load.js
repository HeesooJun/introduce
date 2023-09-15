document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(content => {
            document.getElementById('header').innerHTML = content;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(content => {
            document.getElementById('footer').innerHTML = content;
        });
});