let header=document.querySelector('header'),
    menu=document.querySelector('.iconMenu');

menu.onclick=function(){
    header.classList.toggle('active');
};
window.onscroll=function(){
    header.classList.remove('active');
};

//Swiper home
var swiper = new Swiper(".homeSlider", {
    spaceBetween: 20,
    effect: "fade",
    gradCursor: true,
    loop:true,
    centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //Swiper Testimonals
var swiper = new Swiper(".content2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

  //Swiper Blogs
  var swiper = new Swiper(".containerBlogs", {
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
  });