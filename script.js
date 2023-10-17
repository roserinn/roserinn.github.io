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
  duration: 2, x: -500, ease: "expoScale(0.5,7,none)", opacity: 0, delay: 1
});



// advantages section

gsap.registerPlugin(ScrollTrigger);

gsap.from('.advantages__card', {
  duration: 1.5,
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


// ---------------- unique icons section ---------------




//some code




 


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

iconRequestButton.addEventListener("mouseenter", function(){
  gsap.to(iconRequestButton, {
    duration: 2,
    background: 'linear-gradient(90deg, rgba(36,29,253,1) 0%, rgba(173,0,168,1) 100%)',
    ease: 'back(4)',
  });
});

iconRequestButton.addEventListener("mouseleave", function() {
  gsap.to(iconRequestButton, {
    duration: 1,
    background: "#9500ff",
    ease: 'power1.inOut',
  });
});


ScrollTrigger.create({
  trigger: ".icon__request",
  start: "top 100%",
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