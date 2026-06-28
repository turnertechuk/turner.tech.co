// =========================
// TURNER TECH - MAIN JS
// =========================

// Smooth scroll for internal links (future-proofing)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple navbar shadow on scroll (luxury feel)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 10) {
        header.style.boxShadow = "0 6px 25px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
    }
});
