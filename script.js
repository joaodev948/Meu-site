/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Assuming bx-x is from boxicons, but we used fontawesome in HTML. Let's fix this logic or finding the icon.
    // In CSS we used fa-bars. We should probably toggle a class that changes the icon or just rotate it.
    // For simplicity with FontAwesome, let's just toggle 'active' on navbar.
    // If we want to change the icon, we can swap the class.

    // Let's swap fa-bars to fa-xmark
    let icon = menuIcon.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }

    navbar.classList.toggle('active');
};

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link (scroll) */
    let icon = menuIcon.querySelector('i');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
    navbar.classList.remove('active');
};

/* Scroll Reveal */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* Typed JS */
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Frontend', 'Web Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* Custom Cursor */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    // Smooth animation for outline
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});
