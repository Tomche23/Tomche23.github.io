const button = document.getElementById("kopce1");

button.addEventListener("mouseenter", function() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

button.addEventListener("click", function() {
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});