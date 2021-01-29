// When the screen scrolls
window.addEventListener("scroll", () => {
    // Parallax stuff
    const translate = document.querySelectorAll(".parallax, .gallery-img, .wood-link");
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = element.dataset.speed;

        element.style.transform = `translateY(${(scroll * speed)}px)`;
    });
})

/* This function gives each gallery image a random offset, as well as
 * a random scale value (within a given range, of course). This makes
 * the page slightly different with each load.
 */
function setGalleryParallax(imageCaller) {
    // Generate a random offset (between -1vw to 1vw)
    var offsetX = Math.random() * 2;
    var offsetY = Math.random() * 2;
    // Generate the scale of the image (between x0.9 to x1.1)
    var scale = (Math.random() * 0.2) + 0.9;
    // Assign properties
    if (Math.random() * 2 < 1) imageCaller.style.marginLeft = `${offsetX}vw`;
    else imageCaller.style.marginRight = `${offsetX}vw`;
    if (Math.random() * 2 < 1) imageCaller.style.marginTop = `${offsetY}vw`;
    else imageCaller.style.marginBottom = `${offsetY}vw`;
}