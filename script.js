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

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.box-sheet');

  let debounceTimeout;

  boxes.forEach(box => {
    const topLeftElement = box.querySelector('.top-left');
    const centerTextElement = box.querySelector('.center-text');
    const targetText = box.getAttribute('data-text');

    // Store the original text in a dataset attribute
    topLeftElement.dataset.originalText = topLeftElement.textContent;

    box.addEventListener('mouseover', () => {
      clearTimeout(debounceTimeout); // Clear any existing timeout
      debounceTimeout = setTimeout(() => {
        centerTextElement.textContent = targetText; // Change center text
        centerTextElement.style.opacity = 1; // Show center text
      }, 200); // Debounce delay before running the hover effect
    });

    box.addEventListener('mouseout', () => {
      clearTimeout(debounceTimeout); // Clear any existing timeout
      debounceTimeout = setTimeout(() => {
        centerTextElement.style.opacity = 0; // Hide center text
      }, 200); // Debounce delay before running the unhover effect
    });
  });

  // Add an event listener to the .boxes container
  const boxesContainer = document.querySelector('.boxes');

  boxesContainer.addEventListener('mouseleave', () => {
    boxes.forEach(box => {
      const centerTextElement = box.querySelector('.center-text');
      centerTextElement.style.opacity = 0; // Hide center text for all elements
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.box-sheet');

  let debounceTimeout;

  boxes.forEach(box => {
      const topLeftElement = box.querySelector('.top-left');
      const centerTextElement = box.querySelector('.center-text');
      const targetText = box.getAttribute('data-text');

      topLeftElement.dataset.originalText = topLeftElement.textContent;

      box.addEventListener('mouseover', () => {
          clearTimeout(debounceTimeout);
          debounceTimeout = setTimeout(() => {
              centerTextElement.textContent = targetText;
              centerTextElement.style.opacity = 1;
          }, 200);
      });

      box.addEventListener('mouseout', () => {
          clearTimeout(debounceTimeout);
          debounceTimeout = setTimeout(() => {
              centerTextElement.style.opacity = 0;
          }, 200);
      });
  });

  const swipeLeftButton = document.querySelector('.swipe-left');
  const swipeRightButton = document.querySelector('.swipe-right');
  const displayer3 = document.querySelector('.displayer3');

  swipeLeftButton.addEventListener('click', () => {
      displayer3.scrollBy({
          left: -350, // Adjust scroll distance as needed
          behavior: 'smooth'
      });
  });

  swipeRightButton.addEventListener('click', () => {
      displayer3.scrollBy({
          left: 350, // Adjust scroll distance as needed
          behavior: 'smooth'
      });
  });
});
