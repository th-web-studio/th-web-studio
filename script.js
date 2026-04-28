const trigger = document.getElementById('menuTrigger');
const overlay = document.getElementById('navOverlay');
const body = document.body;

trigger.addEventListener('click', () => {
    trigger.classList.toggle('active');
    overlay.classList.toggle('active');
    body.style.overflow = overlay.classList.contains('active') ? 'hidden' : 'auto';
});
