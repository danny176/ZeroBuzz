//Mobile navigation//
function myFunction() {
  var x = document.getElementById("myLinks");
  var topnav = document.querySelector('.topnavmobile');
  if (x.style.display === "block") {
    x.style.display = "none";
    topnav.classList.remove('open');
  } else {
    x.style.display = "block";
    topnav.classList.add('open');
  }
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