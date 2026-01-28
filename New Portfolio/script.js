        // ============================================
        // CUSTOM CURSOR
        // ============================================
        const cursor = document.querySelector('.cursor');
        const cursorRing = document.querySelector('.cursor-ring');
        const cursorGlow = document.querySelector('.cursor-glow');

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let glowX = 0, glowY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX - 6 + 'px';
            cursor.style.top = mouseY - 6 + 'px';
        });

        function animateCursor() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.left = ringX - 20 + 'px';
            cursorRing.style.top = ringY - 20 + 'px';

            glowX += (mouseX - glowX) * 0.08;
            glowY += (mouseY - glowY) * 0.08;
            cursorGlow.style.left = glowX - 50 + 'px';
            cursorGlow.style.top = glowY - 50 + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects for cursor
        const hoverElements = document.querySelectorAll('a, button, .glass-card, .project-card, .work-card, .skill-category');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorRing.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorRing.classList.remove('hover');
            });
        });

        // ============================================
        // NAVIGATION
        // ============================================
        const navbar = document.getElementById('navbar');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu on link click
        document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        // ============================================
        // HERO SECTION ANIMATIONS
        // ============================================
        // Create particles
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            particle.style.animationDuration = (3 + Math.random() * 2) + 's';
            particlesContainer.appendChild(particle);
        }

        // Animated title
        const heroTitle = document.getElementById('heroTitle');
        const titleText = 'DEVELOPER';
        titleText.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = (0.4 + index * 0.05) + 's';
            heroTitle.appendChild(span);
        });

        // ============================================
        // SCROLL ANIMATIONS
        // ============================================
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '-50px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // ============================================
        // CONTACT FORM
        // ============================================
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent! ✓';
                submitBtn.style.background = 'linear-gradient(135deg, hsl(160, 100%, 40%), hsl(180, 100%, 50%))';
                
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }, 1500);
        });

        // ============================================
        // PARALLAX EFFECT
        // ============================================
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            
            document.querySelectorAll('.hero-gradient-1, .hero-gradient-2').forEach(el => {
                el.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.2}px)`;
            });
        });