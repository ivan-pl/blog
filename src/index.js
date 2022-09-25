import "normalize.css";
import "./styles/fonts.css";
import "./styles/main.scss";
import "./pages/index.html";
import "./library/carousel.scss";
import Carousel from "./library/carousel";

function initializeCarousel() {
  const options = { gap: "7%", duration: "0.7s", interval: "10000" };
  const carousel = new Carousel(document.querySelector(".carousel"), options);
  carousel.initialize();
}

initializeCarousel();
