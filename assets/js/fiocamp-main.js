// WhatsApp Form Redirection
document.getElementById('whatsapp-contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const message = `Olá, meu nome é ${name}. Gostaria de solicitar um orçamento para materiais elétricos.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/551932545395?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
});

// Phone Input Mask: (XX) XXXXXXXXX
const phoneInput = document.getElementById('form-phone');
phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    let result = '';
    if (value.length > 0) {
        result = '(' + value.substring(0, 2);
        if (value.length > 2) {
            result += ') ' + value.substring(2);
        }
    }
    e.target.value = result;
});

// Scroll Reveal Observer
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once revealed, we don't need to observe it anymore
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px' 
});

revealElements.forEach(el => revealObserver.observe(el));

// Hero Parallax Effect
const heroBg = document.querySelector('.hero-parallax-bg');
if (heroBg) {
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        // Move the background slower than the content (0.3 factor)
        heroBg.style.transform = `translateY(${scrollValue * 0.3}px)`;
    });
}
