/**
 * The type definition of SlideOptions
 * @typedef {Object} SlideOptions
 * @property {string} imageSrc The src of the image.
 * @property {string} imageAlt The alt of the image.
 * @property {string} title The title text for the slide.
 * @property {string} description The description text for the slide.
 */

export const Carousel = {
  /**
   * Creates and initializes the carousel.
   * @param {string} id id of the HTMLElement where the carousel will be injected.
   * @param {SlideOptions[]} slides Array of slide objects to be used in the carousel.
   * @param {number} interval Time in milliseconds for automatic slide transitions.
   */
  create(id, slides, interval = 3000) {
    const carouselElement = document.getElementById(id);
    if (!carouselElement) throw new Error("Não foi possível encontrar o elemento para inserir o carrosel");

    const carouselContainer = createElementAndAddCssClassToIt("div", "carousel");
    const trackContainer = createElementAndAddCssClassToIt('div', "carousel-track-container");
    const track = createElementAndAddCssClassToIt('ul', "carousel-track");

    slides.forEach((slide, index) => {
      const slideItem = createElementAndAddCssClassToIt('li', "carousel-slide");
      if (index === 0) slideItem.classList.add("current");

      const slideContent = createElementAndAddCssClassToIt("div", "slide-content");

      const img = createElementAndAddCssClassToIt("img", "");
      img.src = slide.imageSrc;
      img.alt = slide.imageAlt;

      const title = document.createElement("h3");
      title.textContent = slide.title;

      const description = document.createElement("p");
      description.textContent = slide.description;

      slideItem.appendChild(img);
      if (slide.title) slideContent.appendChild(title);
      if (slide.description) slideContent.appendChild(description);

      slideItem.appendChild(slideContent);
      track.appendChild(slideItem);
    });

    trackContainer.appendChild(track);

    const indicatorsContainer = createElementAndAddCssClassToIt("div", "carousel-indicators");
    slides.forEach((_, index) => {
      const indicator = createElementAndAddCssClassToIt("span", "indicator");
      if (index === 0) indicator.classList.add("current");
      indicatorsContainer.appendChild(indicator);
    });

    carouselContainer.appendChild(trackContainer);
    carouselContainer.appendChild(indicatorsContainer);
    carouselElement.appendChild(carouselContainer);

    this.init(carouselContainer, interval);
  },

  /**
   * Initializes the carousel with automatic transitions and indicator handling.
   * @param {HTMLElement} carousel The carousel container element.
   * @param {number} interval Time in milliseconds for automatic transitions.
   */
  init(carousel, interval) {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const indicators = Array.from(carousel.querySelectorAll(".indicator"));

    let currentIndex = 0;

    const moveToSlide = (index) => {
      const currentSlide = track.querySelector('.current');
      const currentIndicator = carousel.querySelector('.indicator.current');

      const targetSlide = slides[index];
      const targetIndicator = indicators[index];

      track.style.transform = `translateX(-${index * 200}%)`; // Fixed translation logic
      currentSlide.classList.remove('current');
      targetSlide.classList.add('current');

      currentIndicator.classList.remove('current');
      targetIndicator.classList.add('current');
    };

    slides.forEach((slide, index) => {
      slide.style.left = `${100 * index}%`;
    });

    // Automatic slide transition
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      moveToSlide(currentIndex);
    }, interval);

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        moveToSlide(currentIndex);
      });
    });
  }
};

/**
 * Creates an element and adds a CSS class to it.
 * @param {keyof HTMLElementTagNameMap} tag The element that will be created.
 * @param {string} cssClass The class that will be added.
 * @returns {HTMLElementTagNameMap[tag]} The created element with the class.
 */
function createElementAndAddCssClassToIt(tag, cssClass) {
  const element = document.createElement(tag);
  if (cssClass) element.classList.add(cssClass);
  return element;
}
