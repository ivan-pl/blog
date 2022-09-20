import "normalize.css";
import "./styles/fonts.css";
import "./styles/main.scss";
import "./pages/index.html";

import "./library/carousel.scss";
import Carousel from "./library/carousel";

const carousel = new Carousel(document.querySelector(".main__carousel"));
carousel.initialize();
