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
