const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Modal gallery logic
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('modal-img').src = this.src;
        document.getElementById('gallery-modal').classList.remove('hidden');
    });
});
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('gallery-modal').classList.add('hidden');
    document.getElementById('modal-img').src = '';
});
// Cerrar modal al hacer click fuera de la imagen
document.getElementById('gallery-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.add('hidden');
        document.getElementById('modal-img').src = '';
    }
});