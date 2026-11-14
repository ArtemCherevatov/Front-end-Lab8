document.addEventListener('DOMContentLoaded', () => {
    // 1. Логіка модального вікна "Watch Video"
    const videoTrigger = document.getElementById('watchVideoTrigger');
    const videoModal = document.getElementById('videoModal');
    const closeVideoModal = document.getElementById('closeVideoModal');
    const youtubePlayer = document.getElementById('youtubePlayer');

    // Посилання на відео
    const videoUrl = 'https://youtu.be/ODpB9-MCa5s?si=348t6sxzkVRW6efy';

    videoTrigger.addEventListener('click', () => {
        youtubePlayer.src = videoUrl;
        videoModal.classList.add('open');
    });

    function closeVideo() {
        videoModal.classList.remove('open');
        youtubePlayer.src = ''; // Зупиняємо відтворення при закритті
    }

    closeVideoModal.addEventListener('click', closeVideo);

    // 2. Логіка модального вікна "Say Hello" / "Contact"
    const contactBtns = document.querySelectorAll('.open-contact-modal');
    const contactModal = document.getElementById('contactModal');
    const closeContactModal = document.getElementById('closeContactModal');
    const contactForm = document.getElementById('contactForm');
    const formSuccessMsg = document.getElementById('formSuccessMsg');

    contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            formSuccessMsg.style.display = 'none';
            contactForm.reset();
            contactModal.classList.add('open');
        });
    });

    closeContactModal.addEventListener('click', () => {
        contactModal.classList.remove('open');
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formSuccessMsg.style.display = 'block';
        setTimeout(() => {
            contactModal.classList.remove('open');
        }, 1500);
    });

    // Закриття модальних вікон при кліку на темний фон або клавішу Esc
    window.addEventListener('click', (e) => {
        if (e.target === videoModal) closeVideo();
        if (e.target === contactModal) contactModal.classList.remove('open');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideo();
            contactModal.classList.remove('open');
        }
    });

    // 3. Підтримка кліку на випадаючі меню для мобільних екранів
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                toggle.parentElement.classList.toggle('active');
            }
        });
    });
});