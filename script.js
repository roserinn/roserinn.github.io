

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


// gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

gsap.from('.info__block', {
  duration: 1, x: -300, ease: "expo.in"
});


const burgerIcon = document.querySelector('.burger-icon');
const sideMenu = document.querySelector('.side-menu');
console.log(burgerIcon)

burgerIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  burgerIcon.classList.add('burger-menu__open');
});


