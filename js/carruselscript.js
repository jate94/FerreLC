var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  centeredSlidesBounds: true, // Esto asegura que las imágenes estén centradas y no se desborden del contenedor
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1, // Modificador reducido para una transición más rápida
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  spaceBetween: 0, // Sin espacio entre las diapositivas
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
