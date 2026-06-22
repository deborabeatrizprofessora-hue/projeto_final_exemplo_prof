// ================================
// INICIAÇÃO DO DOCUMENTO
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initCounter();
    initScrollAnimations();
    initNavbarScroll();
    initFormHandler();
    initSmoothScroll();
});

// ================================
// CONTADOR ANIMADO
// ================================

function initCounter() {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(counter) {
    const target = +counter.dataset.target;
    const duration = 2000; // 2 segundos
    const start = Date.now();

    function update() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function para animação suave
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const count = Math.floor(target * easeOut);

        counter.innerText = count.toLocaleString('pt-BR');

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            counter.innerText = target.toLocaleString('pt-BR');
        }
    }

    update();
}

// ================================
// ANIMAÇÕES AO SCROLL
// ================================

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Animar seções
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Animar elementos individuais
    document.querySelectorAll('.stat-card, .gallery-item, .form-box').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ================================
// NAVBAR SCROLL
// ================================

function initNavbarScroll() {
    const navbar = document.querySelector('.custom-navbar');
    let lastScrollY = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;

        // Muda cor da navbar ao fazer scroll
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(24, 13, 8, 0.98)';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(24, 13, 8, 0.95)';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }

        // Efeito de hide/show da navbar
        if (currentScroll > lastScrollY && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
            navbar.style.transition = 'transform 0.3s ease-in-out';
        } else {
            navbar.style.transform = 'translateY(0)';
            navbar.style.transition = 'transform 0.3s ease-in-out';
        }

        lastScrollY = currentScroll;
    }, { passive: true });
}

// ================================
// TRATAMENTO DE FORMULÁRIOS
// ================================

function initFormHandler() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do formulário
            const submitBtn = this.querySelector('button[type=\"submit\"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class=\"bi bi-check-circle me-2\"></i>Cadastrado com sucesso!';
            submitBtn.disabled = true;
            submitBtn.classList.add('btn-success');
            submitBtn.classList.remove('btn-caramel');
            
            // Resetar após 3 segundos
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('btn-success');
                submitBtn.classList.add('btn-caramel');
                this.reset();
            }, 3000);
        });
    }
}

// ================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                const navHeight = document.querySelector('.custom-navbar').offsetHeight;
                
                window.scrollTo({
                    top: target.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ================================
// UTILITY: Debounce
// ================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}