import "normalize.css";
import "./styles/fonts.css";
import "./styles/topic-1.scss";
import "./pages/topic-1.html";
import "./library/carousel.scss";
import Carousel from "./library/carousel";

function initializeCarousel() {
  const options = { gap: "7%", duration: "0.7s", interval: "10000" };
  const carousel = new Carousel(
    document.querySelector(".article__carousel"),
    options
  );
  carousel.initialize();
}

initializeCarousel();
