function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
   menu.classList.toggle("open")
   icon.classList.toggle("open")
}

var swiper = new Swiper(".slider-content", {
    slidesPerView: 3,
    spaceBetween: 29,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        560:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        },
    }
  });

// there is one more way to create mepty object



