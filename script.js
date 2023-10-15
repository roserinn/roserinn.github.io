

// import { CustomEase } from "gsap/CustomEase";
// import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Observer } from "gsap/Observer";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { EaselPlugin } from "gsap/EaselPlugin";
// import { PixiPlugin } from "gsap/PixiPlugin";
// import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);

gsap.from('.advantages__card', {
  duration: 1.5,
  x: -100,
  opacity: 0,
  // scrollTrigger: {
  //   trigger: '.advantages__card',
  //   start: 400
  // },
  stagger: {
    each: 0.5,
    from: "start",
  }
});


gsap.from('.anim', {
  duration: 1, y: -100, ease: "expoScale(0.5,7,none)", opacity: 0
})

gsap.from('.info__block', {
  duration: 2, x: -500, ease: "expoScale(0.5,7,none)", opacity: 0, delay: 1
});





// window.onscroll = () => {
//   advantagesCardAnim(advantagesCards)
// }

// const advantagesCards = document.querySelectorAll('.advantages__card');

// function advantagesCardAnim(elements) {
//   const windowHeight = window.innerHeight;
// elements.forEach(card => {
//   const top = window.scrollY;
//   const offset = card.offsetTop;
//   const offsetHeight = card.offsetHeight;

// if (top + windowHeight > offset && top < offset + offsetHeight ) {
//   gsap.from('.advantages__card', {
//     duration: 1.5,
//       opacity: 0,
//       x: -100,   
//       stagger: {
//         each: 0.5, 
//         from: "start",
//       }
//     })
  
  
// }



// });

// }




const burgerIcon = document.querySelector('.burger-icon');
const sideMenu = document.querySelector('.side-menu');
console.log(burgerIcon)

burgerIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  burgerIcon.classList.add('burger-menu__open');
});


