const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
})
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder',"")
})

// scroll event

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle( function (){
  if (window.scrollY > 500) {
    gsap.to(badgeEl,.6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl,.2,{ //버튼보이기
      x: 0
    });
  } else {
    gsap.to(badgeEl,.6, {
      opacity: 1,
      display: 'block'
    });
    // 탑버튼 숨기기
    gsap.to(toTopEl,.2,{
      x: 100
    });
  }
}, 300))

toTopEl.addEventListener('click', function() {
  gsap.to(window,0.7, {
    scrollTo : 0,
  })
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  });
});


// Swiper
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여 줄 슬라이드 수
  spaceBetween: 10, //슬라이드 사이 마진
  centeredSlides: true,
  loop : true,
  autoplay : { //오토플레이의 옵션을 설정
    delay: 5000
  },
  pagination : {
    el : '.promotion .swiper-pagination',
    clickable : true,
  },
  navigation: {
    prevEl : ".promotion .swiper-prev",
    nextEl : ".promotion .swiper-next"
  }
});

new Swiper('.awards .swiper-container' , {
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next',
  }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
})


function floatingObject(selector,delay,size) {
  gsap.to(selector , 1, {
    y: size,
    repeat : -1,
    yoyo: true,
    ease : Power1.easeInOut,
    delay : delay
  })
}
floatingObject('.floating1',1,20)
floatingObject('.floating2',2,24)
floatingObject('.floating3',1.5,16)


const spyEls = document.querySelectorAll ('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement : spyEl, //보여짐 여부를 감시할 요소
      triggerHook : .8  //0.8부분에서 보여짐
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller);
});

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();