document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            navbar.style.backdropFilter = 'blur(2px)';
            navbar.style.webkitBackdropFilter = 'blur(2px)'; // Safari support
        } else {
            navbar.style.backgroundColor = '#FAFAFA';
            navbar.style.backdropFilter = 'none';
            navbar.style.webkitBackdropFilter = 'none'; // Safari support
            navbar.style.boxShadow = 'none';
        }
    });

    // Back to Top Button functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const revealElements = document.querySelectorAll('.reveal');

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                el.classList.add('visible');
            }
        });
    });

    // Slide-in animations for left and right images
    const leftImages = document.querySelectorAll('.slide-left');
    const rightImages = document.querySelectorAll('.slide-right');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    function handleScroll() {
        leftImages.forEach(image => {
            if (isInViewport(image)) {
                image.classList.add('visible');
            }
        });

        rightImages.forEach(image => {
            if (isInViewport(image)) {
                image.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});
