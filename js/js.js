//Mobile navigation//
function myFunction() {
  var links = document.getElementById("myLinks");
  var icon = document.querySelector(".icon");

  // Open class icon
  icon.classList.toggle("open");

  // Vis links
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
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