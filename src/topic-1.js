import "normalize.css";
import "./styles/fonts.css";
import "./styles/topic-1.scss";
import "./pages/topic-1.html";
import "./library/carousel.scss";
import Carousel from "./library/carousel";

const carousel = new Carousel(document.querySelector(".article__carousel"));
carousel.initialize();
