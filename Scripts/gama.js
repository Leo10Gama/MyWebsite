// When the screen scrolls
window.addEventListener("scroll", () => {
    // Parallax stuff
    const translate = document.querySelectorAll(".parallax");
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        var position = element.getBoundingClientRect();
        // Only do parallax if the thing is on the screen
        if ((position.top >= 0 && position.bottom <= window.innerHeight) || (position.top < window.innerHeight && position.bottom >= 0)) {
            element.style.transform = `translateY(${(scroll - position.top) * speed}px)`;
        }
    })
})