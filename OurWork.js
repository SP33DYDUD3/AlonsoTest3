document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.image-grid img').forEach(image =>{
        image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
        }
    });
    
    document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').style.display = 'none';
    }
    
    document.body.addEventListener('click', function(event) {
        if (!event.target.closest('.image-grid img')) {
            document.querySelector('.popup-image').style.display = 'none';
        }
    });
    
    let currentIndex = 0;

    const images = Array.from(document.querySelectorAll('.image-grid img'));
    const popupImage = document.querySelector('.popup-image img');

    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            currentIndex = index;
            popupImage.src = image.src;
            document.querySelector('.popup-image').style.display = 'block';
        });
    });

    function showPreviousImage(event) {
        event.stopPropagation(); // Prevent the event from bubbling up to the body
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        popupImage.src = images[currentIndex].getAttribute('src');
    }

    function showNextImage(event) {
        event.stopPropagation(); // Prevent the event from bubbling up to the body
        currentIndex = (currentIndex + 1) % images.length;
        popupImage.src = images[currentIndex].getAttribute('src');
    }

    document.querySelector('.container .popup-image .prev-btn').addEventListener('click', showPreviousImage);
    document.querySelector('.container .popup-image .next-btn').addEventListener('click', showNextImage);

});

////////////////////////////////////////////////////////////////


const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnExit");
        backToTopButton.classList.add("btnEntrance");
        backToTopButton.style.display = "block";
    }
}
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnEntrance");
        backToTopButton.classList.add("btnExit");
        setTimeout(function() {
        backToTopButton.style.display = "none";
        }, 250);
    }
}
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
const targetPosition = 0;
const startPosition = window.pageYOffset;
const distance = targetPosition - startPosition;
const duration = 750;
let start = null;

window.requestAnimationFrame(step);

function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
}
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};
