export default class Carousel {
  slides = [];

  currentSlideInd = 0;

  constructor(element) {
    this.carousel = element;
  }

  initialize() {
    this.carousel.classList.add("carousel");
    this.#initializeSlides();
    this.#addButtons();
  }

  #initializeSlides() {
    for (const slide of this.carousel.children) {
      slide.classList.add("carousel__slide");
      slide.firstElementChild.classList.add("carousel__image");
      this.slides.push(slide);
    }
  }

  #addButtons() {
    function move(direction) {
      this.currentSlideInd += direction;

      if (this.currentSlideInd >= this.slides.length) {
        this.slides.forEach((slide) => {
          slide.style.transform = "translateX(0)";
          this.currentSlideInd = 0;
          this.leftArrow.style.display = "none";
        });
        return;
      }

      if (this.leftArrow.style.display === "none" && this.currentSlideInd > 0) {
        this.leftArrow.style.display = "block";
      }

      this.slides.forEach((slide) => {
        slide.style.transform = `translateX(-${this.currentSlideInd * 102}%)`;
      });
    }

    this.leftArrow = this.#createButton("left-arrow", move.bind(this, -1));
    this.rightArrow = this.#createButton("right-arrow", move.bind(this, 1));
  }

  #createButton(name, eventHandler) {
    const button = document.createElement("button");
    button.classList.add(`carousel__${name}`);
    button.addEventListener("click", eventHandler);
    const icon = document.createElement("div");
    icon.classList.add(`carousel__${name}-icon`);
    button.appendChild(icon);
    this.carousel.appendChild(button);

    return button;
  }
}
