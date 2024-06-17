if ($(".box-performance").length) {
  const swiperShortVideo = new Swiper(".box-performance .box-content.swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
