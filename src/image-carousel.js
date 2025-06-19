import prevButtonImage from "./img/arrow_back.svg";
import nextButtonImage from "./img/arrow_forward.svg";
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
      imageElement.classList.add("carouselImage");
      imageElement.classList.add(`image${i}`);
      imageContainer.appendChild(imageElement);
    }
  }

  function drawCarouselNavButtons() {
    const prevDiv = document.createElement("div");
    const nextDiv = document.createElement("div");
    const prevButton = document.createElement("img");
    const nextButton = document.createElement("img");
    const carouselImages = document.querySelectorAll(".carouselImage");

    prevDiv.classList.add("prevDiv");
    nextDiv.classList.add("nextDiv");
    prevButton.classList.add("prevButton");
    nextButton.classList.add("nextButton");
    prevButton.src = prevButtonImage;
    nextButton.src = nextButtonImage;
    prevDiv.appendChild(prevButton);
    nextDiv.appendChild(nextButton);

    carouselImages[0].before(prevDiv);
    carouselImages[carouselImages.length - 1].after(nextDiv);
  }

  function drawCarouselCircleButtons() {
    const circleButtonsDiv = document.createElement("div");
    const body = document.querySelector("body");
    const carouselImages = document.querySelectorAll(".carouselImage");

    for (let i = 0; i < carouselImages.length; i++) {
      const circleButton = document.createElement("div");
      circleButton.classList.add("circleButton");
      circleButton.classList.add(`image${i}`);
      circleButtonsDiv.appendChild(circleButton);
    }

    circleButtonsDiv.classList.add("circleButtonsDiv");
    body.appendChild(circleButtonsDiv);
  }

  function addButtonListeners() {
    const prevButton = document.querySelector(".prevDiv");
    const nextButton = document.querySelector(".nextDiv");
    const circleButtons = document.querySelectorAll(".circleButton");

    nextButton.addEventListener("click", () => {
      nextImage();
    });

    prevButton.addEventListener("click", () => {
      prevImage();
    });

    for (let i = 0; i < circleButtons.length; i++) {
      circleButtons[i].addEventListener("click", (e) => {
        const imageNum = e.target.classList[1];
        showImage(imageNum);
        circleButtons[i].classList.add("active");
      });
    }
  }

  function showImage(imageNum) {
    const carouselImages = document.querySelectorAll(".carouselImage");
    const circleButtons = document.querySelectorAll(".circleButton");

    for (let i = 0; i < carouselImages.length; i++) {
      if (carouselImages[i].classList.contains("show")) {
        carouselImages[i].classList.remove("show");
      }

      if (carouselImages[i].classList.contains(imageNum)) {
        carouselImages[i].classList.add("show");
      }
    }

    for (let i = 0; i < circleButtons.length; i++) {
      if (circleButtons[i].classList.contains("active")) {
        circleButtons[i].classList.remove("active");
      }

      if (circleButtons[i].classList.contains(imageNum)) {
        circleButtons[i].classList.add("active");
      }
    }
  }

  function prevImage() {
    const carouselImages = document.querySelectorAll(".carouselImage");

    for (let i = 0; i < carouselImages.length; i++) {
      if (carouselImages[i].classList.contains("show")) {
        carouselImages[i].classList.remove("show");

        if (i === 0) {
          carouselImages[carouselImages.length - 1].classList.add("show");
        } else {
          carouselImages[i - 1].classList.add("show");
        }
        break;
      }
    }
  }

  function nextImage() {
    const carouselImages = document.querySelectorAll(".carouselImage");

    for (let i = 0; i < carouselImages.length; i++) {
      if (carouselImages[i].classList.contains("show")) {
        carouselImages[i].classList.remove("show");

        if (i === carouselImages.length - 1) {
          carouselImages[0].classList.add("show");
        } else {
          carouselImages[i + 1].classList.add("show");
        }
        break;
      }
    }
  }

  function startCarousel() {
    const firstCarouselImage = document.querySelector(".carouselImage");
    const firstCircleButton = document.querySelector(".circleButton");

    firstCarouselImage.classList.add("show");
    firstCircleButton.classList.add("active");
  }

  function start() {
    populateImageContainer();
    drawCarouselCircleButtons();
    drawCarouselNavButtons();
    addButtonListeners();
    startCarousel();
  }

  return { start };
}
