document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".load-container h1, .load-container .getStarted-btn, .main-container, .main-headers");
  
    elements.forEach(element => {
      console.log('Observing element:', element);
    });
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Element is intersecting:', entry.target);
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        } else {
          console.log('Element is NOT intersecting:', entry.target);
        }
      });
    }, {
      threshold: 0.2 // Adjust threshold here
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerNavmenu = document.querySelector(".hamburger-navmenu");
  
    hamburger.addEventListener("click", () => {
      hamburgerNavmenu.classList.toggle("active");
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video");
    const toggleButton = document.getElementById("toggleButton");

    if (video && toggleButton) {
        console.log('Video and button elements found.');

        toggleButton.addEventListener("click", () => {
            console.log('Button clicked.');

            if (video.paused) {
                video.play();
                toggleButton.innerHTML = '<i class="bx bx-pause"></i>';
                console.log('Video playing.');
            } else {
                video.pause();
                toggleButton.innerHTML = '<i class="bx bx-play"></i>';
                console.log('Video paused.');
            }
        });
    } else {
        console.error('Video or button elements not found.');
    }
});


