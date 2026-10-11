document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
        const item = this.parentElement;
        const active = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('active'));
        if (!active) item.classList.add('active');
    });
});

function openVillaPopup() {
    document.getElementById('villaPopup').classList.add('active');
}

function closeVillaPopup() {
    document.getElementById('villaPopup').classList.remove('active');
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
};

function scrollToTopAnimated(btn) {
    // Tambah animasi tombol terbang
    btn.classList.add('fly');

    // Smooth scroll halaman ke atas
    const duration = 1200;
    const start = window.pageYOffset;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing: easeInOutCubic
        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, start * (1 - ease));

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        } else {
            // Reset animasi tombol setelah selesai
            setTimeout(() => {
                btn.classList.remove('fly');
            }, 300);
        }
    }

    requestAnimationFrame(scrollStep);
}

// Loading screen & skeleton
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const skeleton = document.getElementById('skeleton');
    const mainContent = document.getElementById('mainContent');

    if (!loader) return;

    // Tunggu sedikit, lalu hilangkan loader
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        if (skeleton) skeleton.classList.add('hidden');
        
        setTimeout(() => {
            loader.classList.add('hidden');
            if (mainContent) {
                mainContent.style.display = 'block';
                mainContent.classList.add('fade-in');
            }
        }, 500);
    }, 500);
});
