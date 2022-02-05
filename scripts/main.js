const swiper_1 = new Swiper('.swiper-container_1', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination_1",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next_1",
      prevEl: ".swiper-button-prev_1",
    },
});

const swiper_2 = new Swiper('.swiper-container_2', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination_2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next_2",
      prevEl: ".swiper-button-prev_2",
    },
});