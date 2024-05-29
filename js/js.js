  // Mobile navigation
  function myFunction() {
    var x = document.getElementById("myLinks");
    var topnav = document.querySelector('.hamburger');
    if (x.style.display === "block") {
      x.style.display = "none";
      topnav.classList.remove('open');
    } else {
      x.style.display = "block";
      topnav.classList.add('open');
    }
  }

  // Mikrobryggeri teaser in viewport fadein
  document.addEventListener('DOMContentLoaded', () => {
  const teaser = document.querySelector('.mikrobryggeri-teaser');
  window.addEventListener('scroll', () => {
    const rect = teaser.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      teaser.classList.add('visible');
    }
  });

  // Vision fade in
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  const section = document.querySelector('.image-text-container-vision');
  if (section) {
    observer.observe(section);
  }

  // Video spiller kun i viewport
  document.querySelectorAll('.parallax-video').forEach(function(element) {
    element.loop = true;
  });
  $(".parallax-video").each(function() {
    $(this).prop({
      controls: false,
      controlslist: "nodownload"
    });
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (this.paused) {
            $(this).prop("muted", true);
            this.play();
          }
        } else {
          this.pause();
        }
      }, {
        threshold: 0.7,
      }
    );
    observer.observe(this);
  });
});