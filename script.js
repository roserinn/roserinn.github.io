// ------------------- burger -----------------------

const burgerIcon = document.querySelector('.burger-icon');
const sideMenu = document.querySelector('.side-menu');
console.log(burgerIcon)

burgerIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  burgerIcon.classList.add('burger-menu__open');
});



//--------------------------- first section animation -----------------------------


gsap.from('.anim', {
  duration: 1, y: -100, ease: "expoScale(0.5,7,none)", opacity: 0
})

gsap.from('.info__block', {
  duration: 1.5, x: -500, ease: "expoScale(0.5,7,none)", opacity: 0, delay: 1
});



// ------------------------- advantages section animation --------------------------


gsap.registerPlugin(ScrollToPlugin);

gsap.from('.advantages__card', {
  duration: .9,
  x: -100,
  opacity: 0,

  stagger: {
    each: 0.5,
    from: "start",
  },

  scrollTrigger: {
    trigger: ".advantages",
    start: "top center",
    end: "bottom center",
  },
});



// --------------------------- unique icons phone animation ----------------------------


const phone = document.querySelector('.unique__icons__img')
const phoneSliderImg = document.querySelector('.slider');
const screen = document.querySelector('.screen');
const uniqueTitle = document.querySelector('.unique__icons__title');
const uniqueList = document.querySelector('.unique__icons__list');
const uniqueBtn = document.querySelector('.buy__button');

let list = uniqueList.querySelectorAll('li')
gsap.registerPlugin(ScrollTrigger);


const scrollTriggerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".unique__icons__info__block",
    start: "top 30%",
    end: "bottom bottom",
  }
});

scrollTriggerTimeline.to(uniqueTitle, {
  y: 50,
  ease: 'back',
  opacity: 1,
  duration: 1
})

scrollTriggerTimeline.from(list, {
  x: -40,
  opacity: 0,
  stagger: {
    each: 0.4,
    from: "start",
  }
})

scrollTriggerTimeline.to(uniqueBtn, {
  y: -50,
  ease: 'back',
  opacity: 1,
  duration: 1,
  delay: 0.3
});

//phone animation
const phoneAnim = scrollTriggerTimeline.from(phone, {
  y: 800,
  duration: 4,
  ease: 'back',
});

const phoneMovement = scrollTriggerTimeline.to('.unique__icons__img', {
  y: 30,
  duration: 5,
  ease: 'back',
  yoyo: true,
  repeat: -1,
});

const mainScreenAnim = scrollTriggerTimeline.to(phoneSliderImg, {
  duration: 3,
  ease: 'linear',
  delay: 3,
  opacity: 1,
}, "2");

const sliderAnim = gsap.to(phoneSliderImg, {
  x: -440,
  duration: 1,
  ease: "power(2).in",
  delay: 0.5,
  paused: true
});

screen.addEventListener('mouseenter', () => {
  sliderAnim.play()
});

screen.addEventListener('mouseleave', () => {
  sliderAnim.reverse()
});


// --------------------------- rendered icons animation ----------------------------

//icons falling animation
const canvas = document.getElementById("iconCanvas");
const ctx = canvas.getContext("2d");

const icons = [
  "./img/images of icons/icon1.png",
  "./img/images of icons/icon2.png",
  "./img/images of icons/icon3.png",
  "./img/images of icons/icon4.png",
  "./img/images of icons/icon3.png",
  "./img/images of icons/icon6.png",
  "./img/images of icons/icon7.png",
  "./img/images of icons/icon8.png",
  "./img/images of icons/icon9.png",
  "./img/images of icons/icon9.png",
  "./img/images of icons/icon10.png",
  "./img/images of icons/icon11.png",
  "./img/images of icons/icon3.png",
  "./img/images of icons/icon12.png",
  "./img/images of icons/icon13.png",
  "./img/images of icons/icon14.png",
  "./img/images of icons/icon15.png",
  "./img/images of icons/icon16.png",
  "./img/images of icons/icon15.png",
];

const iconObjects = [];

for (let i = 0; i < icons.length; i++) {
  iconObjects.push({
    img: new Image(),
    x: Math.random() * canvas.width,
    y: -150,
    speed: Math.random() * 3 + 1
  });
  iconObjects[i].img.src = icons[i];
}

function drawIcons() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < iconObjects.length; i++) {
    ctx.drawImage(iconObjects[i].img, iconObjects[i].x, iconObjects[i].y, 100, 100);
  }
}

function updateIcons() {
  for (let i = 0; i < iconObjects.length; i++) {
    iconObjects[i].y += iconObjects[i].speed;

    if (iconObjects[i].y > canvas.height) {
      iconObjects[i].y = -150;
      iconObjects[i].x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawIcons();
  updateIcons();
  requestAnimationFrame(animate);
}
animate();


//title & subtitle animations 
const renderedIconsTitle = document.querySelector('.rendered__icons__title ');
const renderedIconsSubtitle = document.querySelector('.rendered__icons__subtitle');

const renderedIconsTitleAnim = gsap.to(renderedIconsTitle, {
  opacity: 1,
  duration: 2,
  y: 250,
  ease: 'back',
  paused: true
})

const renderedIconsSubtitleAnim = gsap.to(renderedIconsSubtitle, {
  opacity: 1,
  duration: 2.1,
  y: 250,
  ease: 'back',
  delay: .3,
  paused: true
})

ScrollTrigger.create({
  trigger: ".rendered__icons",
  start: 'top 60%',
  end: 'bottom 80%',
  onEnter: () => {
    renderedIconsTitleAnim.play();
    renderedIconsSubtitleAnim.play()
  },
  onLeaveBack: () => {
    renderedIconsTitleAnim.reverse();
    renderedIconsSubtitleAnim.reverse();
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

const iconRequestTextAnimation = gsap.from(iconRequestText, {
  duration: 1,
  x: 200,
  ease: "power",
  opacity: 0,
  delay: 1.5,
  paused: true
});

const iconRequestButtonAnimation = gsap.to(iconRequestButton, {
  y: -10,
  ease: "back",
  opacity: 1,
  delay: 2,
  paused: true
});

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

  onLeaveBack: () => {
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
}, "1.1")

ScrollTrigger.create({
  trigger: ".grab__the__pack",
  start: 'top 50%',
  end: 'bottom 80%',
  onEnter: () => {
    title.play()
    block.play()
    button.play()
  },
  onLeaveBack: () => {
    title.reverse()
    block.reverse()
    button.reverse()
  },
});



/* ------------------------------- big sur ready section anim ------------------------- */



const bigSurTitle = document.querySelector('.big__sur__ready__title');
const bigSurBlock = document.querySelector('.big__sur__ready__info__block');

const bigSurTitleAnim = gsap.to(bigSurTitle, {
  y: 50,
  opacity: 1,
  delay: .4,
  ease: 'back',
  duration: 1,
  paused: true
})

const bigSurBlockAnim = gsap.to(bigSurBlock, {
  duration: 1,
  delay: .8,
  opacity: 1,
  paused: true
})

ScrollTrigger.create({
  trigger: ".big__sur__ready",
  start: 'top 60%',
  end: 'bottom 80%',
  onEnter: () => {
    bigSurTitleAnim.play();
    bigSurBlockAnim.play()
  },
  onLeaveBack: () => {
    bigSurTitleAnim.reverse();
    bigSurBlockAnim.reverse();
  },
});


