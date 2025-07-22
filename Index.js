// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const privacy = document.getElementById('privacy').checked;
    
    if (name && email && privacy) {
        // Show success message
        alert('✅ Randevu talebiniz başarıyla gönderildi!\n\n24 saat içinde size dönüş yapacağım.\n\nAcil durumlar için WhatsApp: +90 555 123 45 67');
        this.reset();
        
        // Optionally redirect to WhatsApp with pre-filled message
        const whatsappMessage = `Merhaba Derya Hanım, web sitesinden randevu talebi gönderdim. Adım: ${name}`;
        const whatsappUrl = `https://wa.me/905551234567?text=${encodeURIComponent(whatsappMessage)}`;
        
        if (confirm('WhatsApp üzerinden de hemen iletişime geçmek ister misiniz?')) {
            window.open(whatsappUrl, '_blank');
        }
    } else {
        alert('❌ Lütfen zorunlu alanları doldurun ve gizlilik sözleşmesini kabul edin.');
    }
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-10px) scale(1)';
    });
});

// Testimonial cards animation
document.querySelectorAll('.testimonial-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Gallery item hover effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(1deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
});

// WhatsApp float button pulse effect
setInterval(() => {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    whatsappBtn.style.boxShadow = '0 0 20px rgba(37, 211, 102, 0.8)';
    setTimeout(() => {
        whatsappBtn.style.boxShadow = '2px 2px 20px rgba(0,0,0,.2)';
    }, 1000);
}, 5000);

// Add click tracking for social media links
document.querySelectorAll('.social-icon, .footer-social-links a').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Social media link clicked:', this.getAttribute('title') || this.href);
    });
});

// Emergency contact alert
function showEmergencyInfo() {
    alert('🚨 ACİL DURUM BİLGİSİ 🚨\n\nEğer kendine zarar verme düşüncen varsa:\n\n• Acil Servis: 112\n• İntihar Önleme Hattı: 182\n• WhatsApp: +90 555 123 45 67\n\nSen değerlisin ve yalnız değilsin! 💙');
}

// Add emergency button (optional)
const emergencyBtn = document.createElement('div');
emergencyBtn.innerHTML = '🆘';
emergencyBtn.style.cssText = `
    position: fixed;
    bottom: 40px;
    left: 40px;
    width: 50px;
    height: 50px;
    background: #ff4757;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 20px;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(255, 71, 87, 0.4);
    transition: all 0.3s ease;
`;
emergencyBtn.onclick = showEmergencyInfo;
emergencyBtn.title = 'Acil Durum Yardımı';
document.body.appendChild(emergencyBtn);