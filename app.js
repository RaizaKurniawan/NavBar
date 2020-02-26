const navSlide = () => {
    const jokowi = document.querySelector('.jokowi');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    jokowi.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    navLinks.forEach((link, index) =>{
        if (link.style.animation) {
            link.style.animation = '';
        } else {
       link.style.animation = 'navLinkFade 0.5 ease forwards ${index / 7 + 1.3}s';
        }
    });
    // animation
    jokowi.classList.toggle('toggle');
}

navSlide();