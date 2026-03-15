/* ============================================
   DEEP İNŞAAT — SCRIPT v3.0
   ============================================ */

// ===== PRELOADER =====
window.addEventListener('load', () => {
    const pl = document.querySelector('.preloader');
    if (!pl) return;
    setTimeout(() => {
        pl.classList.add('out');
        document.body.style.overflow = '';
    }, 1400);
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileNav();
    initHeroSlider();
    initCounters();
    initReveal();
    initBackToTop();
    initForms();
    initProjectFilter();
    initPageHeroBg();
});

// ===== HEADER =====
function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    const update = () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
}

// ===== MOBILE NAV =====
function initMobileNav() {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');
    if (!burger || !mobileNav) return;

    burger.addEventListener('click', () => {
        const open = burger.classList.toggle('open');
        if (open) {
            mobileNav.style.display = 'flex';
            requestAnimationFrame(() => mobileNav.classList.add('open'));
            document.body.style.overflow = 'hidden';
        } else {
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
            setTimeout(() => { mobileNav.style.display = 'none'; }, 500);
        }
    });

    mobileNav.querySelectorAll('.nav-a').forEach(a => {
        a.addEventListener('click', () => {
            burger.classList.remove('open');
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
            setTimeout(() => { mobileNav.style.display = 'none'; }, 500);
        });
    });
}

// ===== HERO SLIDER =====
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length < 2) return;
    let cur = 0;
    const tick = () => {
        slides[cur].classList.remove('active');
        cur = (cur + 1) % slides.length;
        slides[cur].classList.add('active');
    };
    setInterval(tick, 5500);
}

// ===== COUNTERS =====
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = +el.dataset.target;
            const dur = 1600;
            const step = 16;
            const inc = target / (dur / step);
            let cur = 0;
            const run = () => {
                cur = Math.min(cur + inc, target);
                el.textContent = Math.ceil(cur);
                if (cur < target) requestAnimationFrame(run);
            };
            requestAnimationFrame(run);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// ===== REVEAL ON SCROLL =====
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    els.forEach(el => observer.observe(el));
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const btn = document.querySelector('.btt');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 480);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== FORMS =====
function initForms() {
    // Newsletter
    document.querySelectorAll('.newsletter-form').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const inp = form.querySelector('input');
            if (!inp?.value) return;
            showToast('Bültenimize başarıyla abone oldunuz!');
            form.reset();
        });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const success = document.querySelector('.form-success');
        if (success) {
            success.classList.add('show');
            setTimeout(() => success.classList.remove('show'), 5000);
        }
        contactForm.reset();
    });
}

// ===== TOAST =====
function showToast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = `
    position:fixed; bottom:2rem; left:50%; transform:translateX(-50%) translateY(16px);
    background:#1A1A17; color:#E4C97A;
    padding:.875rem 2rem; border-radius:9999px;
    font-family:'DM Sans',sans-serif; font-size:.875rem; font-weight:500;
    border:1px solid rgba(201,168,76,.3);
    box-shadow:0 8px 32px rgba(13,13,11,.2);
    z-index:9999; opacity:0;
    transition:all .35s cubic-bezier(.4,0,.2,1);
  `;
    document.body.appendChild(t);
    requestAnimationFrame(() => {
        t.style.opacity = '1';
        t.style.transform = 'translateX(-50%) translateY(0)';
    });
    setTimeout(() => {
        t.style.opacity = '0';
        t.style.transform = 'translateX(-50%) translateY(8px)';
        setTimeout(() => t.remove(), 350);
    }, 3500);
}

// ===== PROJECT FILTER =====
function initProjectFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.proj-card');
    if (!btns.length) return;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            cards.forEach(card => {
                const show = filter === 'all' || card.dataset.category === filter;
                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                if (show) {
                    card.style.display = '';
                    requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = ''; });
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(12px)';
                    setTimeout(() => { if (card.style.opacity === '0') card.style.display = 'none'; }, 300);
                }
            });
        });
    });
}

// ===== PAGE HERO BG ANIMATION =====
function initPageHeroBg() {
    const bg = document.querySelector('.page-hero-bg');
    if (!bg) return;
    requestAnimationFrame(() => bg.classList.add('loaded'));
}

/* ============================================
   LUXURY ADD-ONS — script.js sonuna ekleyin
   ============================================ */

// ===== LENIS SMOOTH SCROLL =====
function initLenis() {
    // Lenis CDN'den yüklenmemişse basit polyfill
    if (typeof Lenis === 'undefined') {
        // Yine de scroll damping için CSS scroll-behavior smooth yeterli
        document.documentElement.style.scrollBehavior = 'smooth';
        return;
    }
    const lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: false,
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

// ===== CUSTOM CURSOR =====
function initCursor() {
    // Touch cihazlarda cursor yok
    if ('ontouchstart' in window) {
        document.querySelectorAll('*').forEach(el => el.style.cursor = '');
        return;
    }

    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let rafId;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
    });

    // Ring lerp takip
    function lerpCursor() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        rafId = requestAnimationFrame(lerpCursor);
    }
    lerpCursor();

    // Hover states
    const hoverEls = 'a, button, .btn, .svc-card, .port-item, .proj-card, .why-card, .partner-pill, .filter-btn, .hscroll-card, .team-card, .val-card';
    document.addEventListener('mouseover', e => {
        if (e.target.closest(hoverEls)) ring.classList.add('hover');
    });
    document.addEventListener('mouseout', e => {
        if (e.target.closest(hoverEls)) ring.classList.remove('hover');
    });
    document.addEventListener('mousedown', () => ring.classList.add('click'));
    document.addEventListener('mouseup', () => ring.classList.remove('click'));

    // Sayfa dışına çıkınca gizle
    document.addEventListener('mouseleave', () => ring.classList.add('hidden'));
    document.addEventListener('mouseenter', () => ring.classList.remove('hidden'));
}

// ===== SCROLL PROGRESS BAR =====
function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.prepend(bar);

    window.addEventListener('scroll', () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? window.scrollY / max : 0;
        bar.style.transform = `scaleX(${pct})`;
    }, { passive: true });
}

// ===== PAGE TRANSITIONS =====
function initPageTransitions() {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition';
    document.body.appendChild(overlay);

    // Sayfa girişi
    overlay.classList.add('exit');
    overlay.addEventListener('animationend', () => {
        overlay.classList.remove('exit');
    }, { once: true });

    // Linklere tıklama
    document.addEventListener('click', e => {
        const link = e.target.closest('a[href]');
        if (!link) return;
        const href = link.getAttribute('href');
        // Dış link, hash, mailto, tel — dokunma
        if (!href ||
            href.startsWith('#') ||
            href.startsWith('mailto') ||
            href.startsWith('tel') ||
            href.startsWith('http') ||
            link.target === '_blank') return;

        e.preventDefault();
        overlay.classList.add('enter');
        overlay.addEventListener('animationend', () => {
            window.location.href = href;
        }, { once: true });
    });
}

// ===== MARQUEE TICKER =====
function initMarquee() {
    const sections = document.querySelectorAll('.marquee-section');
    sections.forEach(section => {
        const track = section.querySelector('.marquee-track');
        if (!track) return;
        // İçeriği 2x klonla — seamless döngü
        const clone = track.cloneNode(true);
        section.querySelector('.marquee-track')?.parentElement
            ? section.querySelector('.marquee-track').after(clone)
            : null;
    });
}

// ===== STAGGER GROUPS =====
function initStaggerGroups() {
    const groups = document.querySelectorAll('.stagger-group');
    if (!groups.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    groups.forEach(g => observer.observe(g));
}

// ===== SPLIT TEXT HEADINGS =====
function initSplitText() {
    const headings = document.querySelectorAll('.split-heading');
    headings.forEach(el => {
        const text = el.textContent;
        el.innerHTML = '';
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.transitionDelay = `${i * 0.032}s`;
            el.appendChild(span);
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    headings.forEach(h => observer.observe(h));
}

// ===== GOLD DIVIDERS =====
function initGoldDividers() {
    const dividers = document.querySelectorAll('.gold-divider');
    if (!dividers.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    dividers.forEach(d => observer.observe(d));
}

// ===== HERO PARALLAX =====
function initHeroParallax() {
    const layers = document.querySelectorAll('.hero-parallax-layer');
    if (!layers.length) return;

    // Reduced motion kontrolü
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        layers.forEach((layer, i) => {
            const speed = 0.3 + i * 0.1;
            layer.style.transform = `translateY(${y * speed}px)`;
        });
    }, { passive: true });
}

// ===== MAGNETIC BUTTONS =====
function initMagneticButtons() {
    if ('ontouchstart' in window) return;

    document.querySelectorAll('.btn-magnetic').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) * 0.35;
            const dy = (e.clientY - cy) * 0.35;
            btn.style.transform = `translate(${dx}px, ${dy}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// ===== HORIZONTAL SCROLL (drag) =====
/* ===== CAROUSEL — Script.js'e ekleyin (eski initHorizontalScroll'u silin) ===== */
function initCarousel() {
    document.querySelectorAll('.hscroll-section').forEach(section => {
        const track = section.querySelector('.hscroll-track');
        const cards = section.querySelectorAll('.hscroll-card');
        const btnPrev = section.querySelector('.hscroll-btn-prev');
        const btnNext = section.querySelector('.hscroll-btn-next');
        const dotsWrap = section.querySelector('.hscroll-dots');
        const counter = section.querySelector('.hscroll-counter');
        const progFill = section.querySelector('.hscroll-progress-fill');
        const autoBtn = section.querySelector('.hscroll-autoplay-btn');

        if (!track || !cards.length) return;

        const total = cards.length;
        let current = 0;
        let autoplay = true;
        let autoTimer = null;
        let progTimer = null;
        let progVal = 0;
        const INTERVAL = 4000;

        /* --- Dots oluştur --- */
        if (dotsWrap) {
            cards.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'hscroll-dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', `Proje ${i + 1}`);
                dot.addEventListener('click', () => goTo(i));
                dotsWrap.appendChild(dot);
            });
        }

        /* --- Kart genişliği hesapla --- */
        function cardW() {
            const card = cards[0];
            const style = getComputedStyle(track);
            const gap = parseFloat(style.gap) || 24;
            return card.getBoundingClientRect().width + gap;
        }

        /* --- goTo --- */
        function goTo(idx, animate = true) {
            current = ((idx % total) + total) % total;

            /* Transform */
            const offset = current * cardW();
            track.style.transition = animate
                ? 'transform 0.65s cubic-bezier(0.4,0,0.2,1)'
                : 'none';
            track.style.transform = `translateX(-${offset}px)`;

            /* Aktif kart */
            cards.forEach((c, i) => c.classList.toggle('active', i === current));

            /* Dots */
            if (dotsWrap) {
                dotsWrap.querySelectorAll('.hscroll-dot').forEach((d, i) =>
                    d.classList.toggle('active', i === current)
                );
            }

            /* Counter */
            if (counter) {
                counter.innerHTML =
                    `<strong>${String(current + 1).padStart(2, '0')}</strong> / ${String(total).padStart(2, '0')}`;
            }

            /* Ok butonları */
            if (btnPrev) btnPrev.disabled = false;
            if (btnNext) btnNext.disabled = false;

            /* Progress sıfırla */
            resetProgress();
        }

        /* --- Progress bar --- */
        function resetProgress() {
            clearInterval(progTimer);
            progVal = 0;
            if (progFill) progFill.style.width = '0%';
            if (!autoplay) return;
            const step = 50;
            progTimer = setInterval(() => {
                progVal += (step / INTERVAL) * 100;
                if (progFill) progFill.style.width = progVal + '%';
                if (progVal >= 100) clearInterval(progTimer);
            }, step);
        }

        /* --- Autoplay --- */
        function startAuto() {
            clearInterval(autoTimer);
            if (!autoplay) return;
            autoTimer = setInterval(() => goTo(current + 1), INTERVAL);
            resetProgress();
        }
        function stopAuto() {
            clearInterval(autoTimer);
            clearInterval(progTimer);
        }
        function toggleAuto() {
            autoplay = !autoplay;
            if (autoBtn) {
                autoBtn.innerHTML = autoplay
                    ? '<i class="fas fa-pause"></i>'
                    : '<i class="fas fa-play"></i>';
            }
            autoplay ? startAuto() : stopAuto();
        }

        /* --- Butonlar --- */
        if (btnPrev) btnPrev.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
        if (btnNext) btnNext.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });
        if (autoBtn) autoBtn.addEventListener('click', toggleAuto);

        /* --- Klavye navigasyonu --- */
        section.setAttribute('tabindex', '0');
        section.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft') { stopAuto(); goTo(current - 1); startAuto(); }
            if (e.key === 'ArrowRight') { stopAuto(); goTo(current + 1); startAuto(); }
        });

        /* --- Touch / swipe --- */
        let touchStartX = 0, touchStartY = 0;
        section.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        section.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - touchStartX;
            const dy = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                stopAuto();
                goTo(dx < 0 ? current + 1 : current - 1);
                startAuto();
            }
        }, { passive: true });

        /* --- Mouse drag (masaüstü) --- */
        let dragStart = 0, isDragging = false;
        track.addEventListener('mousedown', e => {
            isDragging = true; dragStart = e.clientX;
            track.style.transition = 'none';
        });
        window.addEventListener('mouseup', e => {
            if (!isDragging) return;
            isDragging = false;
            const dx = e.clientX - dragStart;
            if (Math.abs(dx) > 60) {
                stopAuto(); goTo(dx < 0 ? current + 1 : current - 1); startAuto();
            } else {
                goTo(current); // snap back
            }
        });
        window.addEventListener('mousemove', e => {
            if (!isDragging) return;
            const dx = e.clientX - dragStart;
            const offset = current * cardW() - dx * 0.6;
            track.style.transform = `translateX(-${offset}px)`;
        });

        /* --- Hover'da dur --- */
        section.addEventListener('mouseenter', stopAuto);
        section.addEventListener('mouseleave', () => { if (autoplay) startAuto(); });

        /* --- Resize --- */
        window.addEventListener('resize', () => goTo(current, false));

        /* --- Init --- */
        goTo(0, false);
        startAuto();
    });
}

// DOMContentLoaded içinde çağrın:
// initCarousel();

// ===== FLOATING CONTACT BUTTON =====
function initFloatContact() {
    const btn = document.createElement('a');
    btn.href = 'https://wa.me/902121234567';
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.className = 'float-contact';
    btn.innerHTML = '<i class="fab fa-whatsapp"></i><span>WhatsApp</span>';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 480);
    }, { passive: true });
}

// ===== MASONRY (CSS columns fallback) =====
function initMasonry() {
    // Native CSS masonry veya column-count zaten CSS'te tanımlı.
    // JS'e ihtiyaç yok — sadece class ekle.
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;
    grid.classList.add('masonry-grid');
    // projects-grid class'ını da bırak (filter için)
}

// ===== IMAGE HOVER REVEAL (editoral effect) =====
function initImageReveal() {
    if ('ontouchstart' in window) return;

    const float = document.createElement('div');
    float.className = 'img-reveal-float';
    document.body.appendChild(float);

    document.querySelectorAll('[data-reveal-img]').forEach(trigger => {
        trigger.classList.add('img-reveal-trigger');
        const imgUrl = trigger.dataset.revealImg;

        trigger.addEventListener('mouseenter', () => {
            float.style.backgroundImage = `url('${imgUrl}')`;
            float.classList.add('show');
        });
        trigger.addEventListener('mousemove', e => {
            float.style.left = (e.clientX + 24) + 'px';
            float.style.top = (e.clientY - 160) + 'px';
        });
        trigger.addEventListener('mouseleave', () => {
            float.classList.remove('show');
        });
    });
}

// ===== SECTION DARK EDGES =====
function initDarkEdges() {
    // Why section ve stats section'a edge ekle
    document.querySelectorAll('.why-section, .stats-section').forEach(sec => {
        sec.classList.add('section-dark-edge');
        // Sonrasındaki sectionun rengine göre class belirle
        const next = sec.nextElementSibling;
        if (!next) return;
        if (next.classList.contains('testi-section') ||
            next.classList.contains('cream')) {
            sec.classList.add('to-cream');
        } else {
            sec.classList.add('to-white');
        }
    });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initCursor();
    initScrollProgress();
    initPageTransitions();
    initMarquee();
    initStaggerGroups();
    initSplitText();
    initGoldDividers();
    initHeroParallax();
    initMagneticButtons();
    initFloatContact();
    initMasonry();
    initImageReveal();
    initDarkEdges();
    initCarousel();
});