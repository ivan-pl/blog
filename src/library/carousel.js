/*
  Add the following markup:
  ul > il > img
  Then add class: <ul class="carousel">
*/

export default class Carousel {
  slides = [];

  currentSlideInd = 0;

  intervalTimer = null;

  constructor(
    element,
    { gap = "5%", duration = "0.5s", interval = null } = {}
  ) {
    this.options = { gap, duration, interval };
    this.carousel = element;
  }

  initialize() {
    this.carousel.classList.add("carousel");
    this.#initializeSlides();
    this.#addButtons();
    this.#setOptions();
  }

  #startAutoScroll() {
    const clickEvent = new Event("click");
    this.intervalTimer = setInterval(() => {
      this.rightArrow.dispatchEvent(clickEvent);
    }, this.options.interval);
  }

  #setOptions() {
    this.carousel.style.gap = this.options.gap;
    this.carousel.querySelectorAll(".carousel__slide").forEach((slide) => {
      slide.style["transition-duration"] = this.options.duration;
    });

    if (this.options.interval !== null) {
      this.#startAutoScroll();
    }
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

      if (this.intervalTimer) {
        clearInterval(this.intervalTimer);
        this.#startAutoScroll();
      }

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
      } else if (this.currentSlideInd === 0) {
        this.leftArrow.style.display = "none";
      }

      this.slides.forEach((slide) => {
        const translateX =
          this.currentSlideInd * 100 +
          this.currentSlideInd * parseFloat(this.options.gap);
        slide.style.transform = `translateX(-${translateX}%)`;
      });
    }

    this.leftArrow = this.#createButton("left-arrow", move.bind(this, -1));
    this.leftArrow.style.display = "none";
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
