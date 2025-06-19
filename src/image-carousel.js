import imgOne from "./img/david-schultz-qMS4NnsZTY0-unsplash.jpg";
import imgTwo from "./img/jw-k-EY_hc694pm0-unsplash.jpg";
import imgThree from "./img/radek-skrzypczak-ds0vFWE7q6Q-unsplash.jpg";
import imgFour from "./img/spencer-plouzek-9MBK-eldjIQ-unsplash.jpg";

export default function imageCarouselObject() {
  function populateImageContainer() {
    const imageContainer = document.querySelector(".image-container");
    const rawImages = [imgOne, imgTwo, imgThree, imgFour];

    for (let i = 0; i < rawImages.length; i++) {
      const imageElement = document.createElement("img");

      imageElement.src = rawImages[i];
      imageContainer.appendChild(imageElement);
    }
  }

  function drawCarouselButtons() {
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");
    const pageImages = document.querySelectorAll("img");

    prevButton.classList.add("prevButton");
    nextButton.classList.add("nextButton");

    pageImages[0].before(prevButton);
    pageImages[pageImages.length - 1].after(nextButton);
  }

  function addButtonListeners() {
    const prevButton = document.querySelector(".prevButton");
    const nextButton = document.querySelector(".nextButton");

    nextButton.addEventListener("click", () => {
      nextImage();
    });

    prevButton.addEventListener("click", () => {
      prevImage();
    });
  }

  function prevImage() {
    const pageImages = document.querySelectorAll("img");

    for (let i = 0; i < pageImages.length; i++) {
      if (pageImages[i].classList.contains("show")) {
        pageImages[i].classList.remove("show");

        if (i === 0) {
          pageImages[pageImages.length - 1].classList.add("show");
        } else {
          pageImages[i - 1].classList.add("show");
        }
        break;
      }
    }
  }

  function nextImage() {
    const pageImages = document.querySelectorAll("img");

    for (let i = 0; i < pageImages.length; i++) {
      if (pageImages[i].classList.contains("show")) {
        pageImages[i].classList.remove("show");

        if (i === pageImages.length - 1) {
          pageImages[0].classList.add("show");
        } else {
          pageImages[i + 1].classList.add("show");
        }
        break;
      }
    }
  }

  function startCarousel() {
    const firstImage = document.querySelector("img");
    firstImage.classList.add("show");
  }

  function start() {
    populateImageContainer();
    drawCarouselButtons();
    addButtonListeners();
    startCarousel();
  }

  return { start };
}
