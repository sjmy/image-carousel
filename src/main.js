import "./styles.css";
import imgOne from "./img/david-schultz-qMS4NnsZTY0-unsplash.jpg";
import imgTwo from "./img/jw-k-EY_hc694pm0-unsplash.jpg";
import imgThree from "./img/radek-skrzypczak-ds0vFWE7q6Q-unsplash.jpg";
import imgFour from "./img/spencer-plouzek-9MBK-eldjIQ-unsplash.jpg";

function populateImageContainer() {
  const imageContainer = document.querySelector(".image-container");
  const images = [imgOne, imgTwo, imgThree, imgFour];

  for (let i = 0; i < images.length; i++) {
    const imageElement = document.createElement("img");

    imageElement.src = images[i];
    imageContainer.appendChild(imageElement);
  }
}

populateImageContainer();
