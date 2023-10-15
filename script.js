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

















