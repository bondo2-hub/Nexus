document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for elements
  const elements = document.querySelectorAll(".load-container h1, .load-container .getStarted-btn, .main-container, .main-headers");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.1
  });

  elements.forEach(element => {
      observer.observe(element);
  });

  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const hamburgerNavmenu = document.querySelector(".hamburger-navmenu");

  hamburger.addEventListener("click", () => {
      hamburgerNavmenu.classList.toggle("active");
  });

  // Video play/pause toggle
  const video = document.getElementById("video");
  const toggleButton = document.getElementById("toggleButton");

  if (video && toggleButton) {
      toggleButton.addEventListener("click", () => {
          if (video.paused) {
              video.play();
              toggleButton.innerHTML = '<i class="bx bx-pause"></i>';
          } else {
              video.pause();
              toggleButton.innerHTML = '<i class="bx bx-play"></i>';
          }
      });
  }

  const boxes = document.querySelectorAll('.box-sheet');

  boxes.forEach(box => {
      const topLeftElement = box.querySelector('.top-left');
      const centerTextElement = box.querySelector('.center-text');
      const targetText = box.getAttribute('data-text');

      topLeftElement.dataset.originalText = topLeftElement.textContent;

      box.addEventListener('mouseover', () => {
          clearTimeout(box.debounceTimeout);
          box.debounceTimeout = setTimeout(() => {
              centerTextElement.textContent = targetText;
              centerTextElement.style.opacity = 1;
          }, 200);
      });

      box.addEventListener('mouseout', () => {
          clearTimeout(box.debounceTimeout);
          box.debounceTimeout = setTimeout(() => {
              centerTextElement.style.opacity = 0;
          }, 200);
      });
  });

  // Add an event listener to the .boxes container to hide center text when leaving the container
  const boxesContainer = document.querySelector('.boxes');
  boxesContainer.addEventListener('mouseleave', () => {
      boxes.forEach(box => {
          const centerTextElement = box.querySelector('.center-text');
          centerTextElement.style.opacity = 0;
      });
  });

  // Navigation buttons for scrolling
  const swipeLeftButton = document.querySelector('.swipe-left');
  const swipeRightButton = document.querySelector('.swipe-right');
  const displayer3 = document.querySelector('.displayer3');
  const boxWidth = document.querySelector('.box-container').offsetWidth;

  swipeLeftButton.addEventListener('click', () => {
      displayer3.scrollBy({
          left: -boxWidth,
          behavior: 'smooth'
      });
  });

  swipeRightButton.addEventListener('click', () => {
      displayer3.scrollBy({
          left: boxWidth,
          behavior: 'smooth'
      });
  });
});


const black_theme_btn = document.getElementById('black-color-theme');
const white_theme_btn = document.getElementById('white-color-theme');

black_theme_btn.addEventListener('click', () => {
    document.body.className = 'dark-theme';
});

white_theme_btn.addEventListener('click', () => {
    document.body.className = 'light-theme';
});

