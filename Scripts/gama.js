// When the screen scrolls
window.addEventListener("scroll", () => {
    // Parallax stuff
    const translate = document.querySelectorAll(".parallax, .gallery-img");
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        var position = element.getBoundingClientRect();

        // Only do parallax if the thing is on the screen
        element.style.transform = `translateY(${(scroll * speed)}px)`;
    })
})

/* This function gives each gallery image a random offset, as well as
 * a random scale value (within a given range, of course), which then
 * affects the data-speed value given, affecting its parallax. Thus,
 * larger images will scroll more quickly than smaller images to mimic
 * actual parallax
 */
// function setGalleryParallax(imageCaller) {
//     // Generate a random offset (from the left or right)
//     var offset = (Math.random() * 1000) / 5;
//     // Generate the scale of the image (up to 3x as large)
//     var scale = Math.floor(Math.random() * 3) + 0.75;
//     var speed = (scale < 1) ? (- (scale / 2)) : (scale / 2);
//     var zIndex = scale + 20;
//     imageCaller.setAttribute("style", `transform: scale(${scale}, ${scale}) translateX(${offset}%); z-index: ${zIndex};`);
//     // imageCaller.setAttribute("data-speed", speed);
// }