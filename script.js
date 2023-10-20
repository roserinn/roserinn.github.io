// ------------------- burger -----------------------


const burgerIcon = document.querySelector('.burger-icon');
const sideMenu = document.querySelector('.side-menu');
console.log(burgerIcon)

burgerIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  burgerIcon.classList.add('burger-menu__open');
});

// --------------------------- sections Anim ------------------------------

// first section

gsap.from('.anim', {
  duration: 1, y: -100, ease: "expoScale(0.5,7,none)", opacity: 0
})

gsap.from('.info__block', {
  duration: 1.5, x: -500, ease: "expoScale(0.5,7,none)", opacity: 0, delay: 1
});



// advantages section

gsap.registerPlugin(ScrollToPlugin, TextPlugin);

gsap.from('.advantages__card', {
  duration: .9,
  x: -100,
  opacity: 0,

  stagger: {
    each: 0.5,
    from: "start",
  },

  scrollTrigger: {
    markers: true,
    trigger: ".advantages",
    start: "top center",
    end: "bottom center",
  },
});

// ------------------------------ Icon Request -----------------------------

const iconRequestImg = document.querySelector(".icon__request__img");
const iconRequestTitle = document.querySelector(".icon__request__title")
const iconRequestText = document.querySelector(".icon__request__text")
const iconRequestButton = document.querySelector(".icon__request__button")


const imgIconRequestAnimation = gsap.from(iconRequestImg, {
  duration: 2.5,
   x: -400,
   ease: "back(3)", 
   opacity: 0, 
   delay: .1,
   paused: true
});

const iconRequestTitleAnimation = gsap.from(iconRequestTitle, {
  duration: 1,
   x: 200,
   ease: "power", 
   opacity: 0, 
   delay: 1,
   paused: true
});

const iconRequestTextAnimation = gsap.from(iconRequestText , {
  duration: 1,
   x: 200,
   ease: "power", 
   opacity: 0, 
   delay: 1.5,
   paused: true 
});

const iconRequestButtonAnimation =  gsap.to(iconRequestButton, {
   y: -10, 
   ease: "back", 
   opacity: 1, 
   delay: 2,
   paused: true
});

// iconRequestButton.addEventListener("mouseenter", function(){
//   gsap.to(iconRequestButton, {
//     duration: 2,
//     background: 'linear-gradient(90deg, rgba(36,29,253,1) 0%, rgba(173,0,168,1) 100%)',
//     ease: 'back(4)',
//   });
// });

// iconRequestButton.addEventListener("mouseleave", function() {
//   gsap.to(iconRequestButton, {
//     duration: 1,
//     background: "#9500ff",
//     ease: 'power1.inOut',
//   });
// });


ScrollTrigger.create({
  trigger: ".icon__request",
  start: "top 60%",
  end: "bottom 100%",
  onEnter: () => {
    imgIconRequestAnimation.play();
    iconRequestTitleAnimation.play();
    iconRequestTextAnimation.play();
    iconRequestButtonAnimation.play();
  },

  onLeaveBack: ()=> {
    imgIconRequestAnimation.reverse();
    iconRequestTitleAnimation.reverse();
    iconRequestTextAnimation.reverse();
    iconRequestButtonAnimation.reverse();
  },
});



// ---------------------------- grap the pack section animation ----------------------

const titleText = document.querySelector('.grab__the__pack__title')
const blockText = document.querySelector('.grab__the__pack__text')
const btn = document.querySelector('.grab__the__pack__button')

// tl is timeline
const tl = gsap.timeline();


const title = gsap.to(titleText, {
  opacity: 1,
  duration: 1.5,
  y: 150,
  ease: 'back(2)',
  paused: true
});

const block = gsap.to(blockText, {
  opacity: 1,
  duration: 1.3,
  y: 80,
  ease: 'back(2)',
  paused: true
}, "<");

const button = gsap.to(btn, {
  opacity: 1,
  duration: .9,
  y: 28,
  ease: 'back(4)',
  paused: true
},"1.1")

ScrollTrigger.create({
  trigger: ".grab__the__pack",
  markers: true,
  start: 'top 50%',
  end: 'bottom 80%',
  scrub: true, 
  onEnter: () => {
    title.play()
    block.play()
    button.play()
  },
  onLeaveBack: ()=> {
    title.reverse()
    block.reverse()
    button.reverse()
  },
});

// paralax 




// --------------------------- unique icons phone animation ----------------------------

const phone = document.querySelector('.unique__icons__img')
const phoneSliderImg = document.querySelector('.slider');
const screen = document.querySelector('.screen');


tl.from('.unique__icons__img', {
  y: 800,
  duration: 4,
  delay: .5,
  ease: 'back'
})

tl.to('.unique__icons__img', {
  y: 30,
  duration: 5,
  ease: 'back',
  yoyo: true,
  repeat: -1
})
 
const mainScreenAnim = tl.to(phoneSliderImg, {
  duration: 3,
  ease: 'linear',
  opacity: 1,
},"2")

const sliderAnim = gsap.to(phoneSliderImg, {
  x: -440,
 duration:1,
 ease: "power(2).in",
 paused: true
   });

screen.addEventListener('mouseenter', () => {
  sliderAnim.play()
});

screen.addEventListener('mouseleave', () => {
  sliderAnim.reverse()
});



screen.addEventListener("mouseenter", function () {
  sliderAnim.play();
});






// ScrollTrigger.create({
//   trigger: ".unique__icons__img",
//   start: "top 20%",
//   end: "+-" + amountToScroll,
//   pin: true,
//   animation: slider,
//   scrub: 1,
// })