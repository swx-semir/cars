document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobilePreviewBtn = document.getElementById('mobilePreviewBtn');

    if (menuToggle && mobileMenu && mobilePreviewBtn) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobilePreviewBtn.addEventListener('click', () => {
            window.location.href = 'phone-view.html';
        });
    } else {
        console.error('Bir veya daha fazla DOM elemanı bulunamadı:', {
            menuToggle, mobileMenu, mobilePreviewBtn
        });
    }
});