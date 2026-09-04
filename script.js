// Efek Mengetik Otomatis pada Terminal Badge
const typingText = document.getElementById('typing-text');
const textToType = "user@oky: who?";
let index = 0;

function typeEffect() {
    if (index < textToType.length) {
        typingText.textContent = textToType.substring(0, index + 1);
        index++;
        setTimeout(typeEffect, 100);
    }
}

// Jalankan efek saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    typingText.textContent = "";
    typeEffect();
});
document.addEventListener("DOMContentLoaded", () => {
    // Pilih elemen yang ingin diberi animasi scroll
    const elementsToAnimate = document.querySelectorAll('.card, .section-title, .section-subtitle, .connect-card, .timeline-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15 // Animasi jalan saat 15% elemen masuk layar
    });

    elementsToAnimate.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});