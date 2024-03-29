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