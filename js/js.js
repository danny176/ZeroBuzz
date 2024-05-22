//Mobile navigation//
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
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