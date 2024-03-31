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

