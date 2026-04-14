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
