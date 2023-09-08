// Function to scroll to the top of the page with smooth animation
function scrollToTop() {
    const scrollDuration = 1000; // Adjust the duration (in milliseconds) to control the speed of the scroll
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const easing = 'cubic-bezier(0.19, 1, 0.22, 1)'; // Adjust the cubic bezier values for a pronounced "ease-out" effect

    const scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);

    // Apply easing using CSS transition
    document.body.style.transitionTimingFunction = easing;
}

// Initialize a flag to track whether the page has fully loaded
let isPageLoaded = false;

// When the page has fully loaded, set the flag to true and trigger the scroll animation
window.addEventListener("load", function () {
    isPageLoaded = true;
    scrollToTop();
});

// Flag to track whether the initial scroll event has occurred
let initialScrollDone = false;

// Handle the initial scroll event
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    const headerImage = document.querySelector(".header-image");

    const offsetFromTop = headerImage.getBoundingClientRect().bottom;
    const threshold = 100;

    // Only apply the "sticky" class if the page has fully loaded and the initial scroll event has occurred
    if (isPageLoaded && initialScrollDone) {
        if (offsetFromTop <= threshold) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    }

    // Set the flag after the initial scroll event
    initialScrollDone = true;
});
