  var swiper = new Swiper(".visual_swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var vidswiper = new Swiper(".vid_swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


var c3swiper = new Swiper(".c3_swiper", {

    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
