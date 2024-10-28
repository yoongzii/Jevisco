$(function(){
   // header
   $(window).scroll(function(){
      if($(window).scrollTop() >= 10) {
         $('header').hide()
      } else {$('header').show()}

      $('.hamburger_open').click(function(){
         $('.hamburger').css('display', 'flex')
      })

      $('.hamburger_close').click(function(){
         $('.hamburger ').css('display', 'none')
      })

      $('.burgerItem').hide();

      $('.bugerList a').click(function(event) {
         event.preventDefault();
         $('.burgerItem').hide();
         $('.bugerList a').css('color', '');

         $(this).siblings('.burgerItem').show();
         $(this).css('color', '#004BA9');
      });

      $(window).on('mousemove',function(e){
         const x = e.clientX
         const y = e.clientY
         $('.cursor').css({left: x , top: y})

         $('#business img').on('mouseover',function(){
            $('.cursor').css({width: '80px', height: '80px', background: 'rgba(255,255,255,0.6)'}).text("scroll")
            $(this).on('mouseleave', function(e){
               $('.cursor').css({width: '12px', height:'12px',color: '#004BA9'}).text("")
            })
         })

         $('a, button, .viewMore2 a').on('mouseover',function(){
            $('.cursor').css({width: '80px', height:'80px', background: 'rgba(255,255,255,0.6)'}).text("click")
            $(this).on('mouseleave', function(e){
               $('.cursor').css({width: '12px', height:'12px',color: '#004BA9'}).text("")
            })
         })
      })

      $('.langWrap').click(function(){
         $('.langWrap button, .langWrap ul').toggleClass('open')
      })


      $('#gnb .listBox').hover(function(){
         $(this).find('.dep2Wrap').show()
         $('header').addClass('on')
      },function(){
         $('#gnb .dep2Wrap').hide()
         $('header').removeClass('on')
      })


   // business

   $(function() {
      const swiper = new Swiper('.companyRight', {
      direction: "vertical",
      mousewheel: {
         invert: false,
      },
      on: {
         slideChange: function() {
            const activeIndex = this.activeIndex % $('.swiper-slide').length;
         $('.allName2_sub').hide();
         $('.allName2_sub').eq(activeIndex).show();
         },
      },
   });

   $('.allName2_sub').hide();
   $('.allName2_sub').first().show();

   if ($(window).width() <= 640) {
      $('.companyLeft').on('mousewheel', function(event) {
         event.preventDefault();
         const wheel = event.originalEvent.wheelDelta;

         if (wheel > 0) {
            swiper.slidePrev();

         } else {
            swiper.slideNext();
         }

      });

   }
});



})//ready()





   //field
      var swiper = new Swiper(".fieldSwiper", {
         spaceBetween: 50,
         grabCursor: true,
         loop: true,
         slidesPerView:2,
         autoplay: {
            delay: 3000,
            disableOnInteraction: false
      },
         pagination: {
         el: ".swiper-pagination",
         clickable: true,
         },
      });



   // color
   gsap.registerPlugin(ScrollTrigger);
   const ani2 = gsap.timeline()
   ani2.from('.colorPop .popText', {y: 100, autoAlpha: 0, })
   .from('.colorPop .popImg', {y: 100, autoAlpha: 0, })

   ScrollTrigger.create({
   animation: ani2,
   trigger: '#color',
   start: 'top top',
   end: '+=2000',
   pin: true,
   scrub: true,
   onEnter: () => {
      gsap.to('.colorBox .allName', {autoAlpha: 0, duration: 0.5});
      gsap.to('.colorPop .popImg', {scale: 1.5, duration: 0.5});
   },
   onLeaveBack: () => {
      gsap.to('.allName', {autoAlpha: 1, duration: 0.5});
      gsap.to('.colorPop .popImg', {scale: 1, duration: 0.5});
   }
   })




   // header
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mainVideo", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
   delay: 15000,
   disableOnInteraction: false
   },
   pagination: {
   el: ".swiper-pagination",
   clickable: true
   },
      on: {
      autoplayTimeLeft(s, time, progress) {
         progressCircle.style.setProperty("--progress", 1-progress);
         progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
   }
});

// news

const newsTitles = document.querySelectorAll('.newTab li')
const articleUl = document.querySelectorAll('.newList .article')


newsTitles.forEach((newsTitle, index) => {

   newsTitle.addEventListener('click', function() {
      articleUl.forEach(article => {
         article.classList.remove('show');
      });
      articleUl[index].classList.add('show');
      });
   })
})

//fieldSwiper
const buttons = document.querySelectorAll('.buttonLi button');
const swipers = document.querySelectorAll('.fieldSwiper');
const swipersWrap = document.querySelectorAll('.fieldWrapper');
const nameSub = document.querySelectorAll('.nameSub');

swipers.forEach(swiper => swiper.style.display = 'none');
swipers[0].style.display = 'block';
nameSub[0].style.display = 'block';


buttons.forEach((button, index) => {
button.addEventListener('click', () => {
   swipers.forEach(swiper => swiper.style.display = 'none');
   swipers[index].style.display = 'block';
   nameSub.forEach(nameSub => nameSub.style.display = 'none');
   nameSub[index].style.display ='block'
});
})
