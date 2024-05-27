//Mobile navigation//
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


  //Mikrobryggeri teaser in viewport fadein//
  document.addEventListener('DOMContentLoaded', (event) => {
    const teaser = document.querySelector('.mikrobryggeri-teaser');
    window.addEventListener('scroll', () => {
        const rect = teaser.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            teaser.classList.add('visible');
        }
    });
});

  //Vision fade in//
  document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Adjust this value as needed
    });

    const section = document.querySelector('.image-text-container-vision');
    observer.observe(section);
});