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

// Counter Animation
const counters = document.querySelectorAll('.counter');

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1000; // 1 second duration
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            counter.innerText = Math.floor(progress * target);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                counter.innerText = target;
            }
        };

        window.requestAnimationFrame(step);
    });
};

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const valueGrid = document.querySelector('.value-grid');
if (valueGrid) {
    counterObserver.observe(valueGrid);
}
