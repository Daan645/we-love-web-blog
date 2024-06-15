gsap.registerPlugin(ScrollTrigger);

// Functie om animatieafstanden te berekenen op basis van de schermgrootte
function calculateAnimationDistance(baseDistance) {
    return baseDistance * (window.innerWidth / 1920); // 1920 is een voorbeeld basisbreedte
}

// Bereken dynamische afstanden
const heroWeTextX = calculateAnimationDistance(-100);
const heroWebTextX = calculateAnimationDistance(60);
const weLoveWebHearthY = calculateAnimationDistance(-150);
const weLoveWebHearthScrollY = calculateAnimationDistance(1050);
const introTextY = calculateAnimationDistance(200);
const note1X = calculateAnimationDistance(-4000);


gsap.from('.hero-we-text', {
    duration: 1,
    x: `${heroWeTextX}%`,
    delay: 0.5,
    ease: 'ease-in'
});

gsap.from('.hero-web-text', {
    duration: 0.9,
    x: `${heroWebTextX}%`,
    delay: 0.8,
    ease: 'ease-in'
});

gsap.from('.we-love-web-hearth', {
    duration: 1,
    y: `${weLoveWebHearthY}%`,
    delay: 1,
    ease: 'ease-out'
});

gsap.to(".we-love-web-hearth", {
    scale: 1.2,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power1.inOut"
});

gsap.to(".we-love-web-hearth", {
    scrollTrigger: {
        trigger: "#section1",
        start: "top 15%",
        end: "bottom 10%",
        scrub: 3,

    },
    y: weLoveWebHearthScrollY,
    duration: 200,
    delay: 5,
    ease: "SlowMo.ease"
});

gsap.to("#introText1", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 1,
        // markers: true
    },
    y: -introTextY,
    duration: 1
});

gsap.to("#introText2", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 70%",
        end: "center center",
        scrub: 1,
        // markers: true
    },
    y: introTextY,
    duration: 1
});

gsap.from("#note1", {
    scrollTrigger: {
        trigger: "#note1",
        start: "top 40%",
        end: "top 60%",
        scrub: 1,
        markers: true
    },
    x: note1X,
    opacity: 0,
    duration: 4,
    ease: "SlowMo.ease"
});

gsap.from("#note2", {
    scrollTrigger: {
        trigger: "#note2",
        start: "top 40%",
        end: "top 60%",
        scrub: 1,
        markers: true
    },
    x: note1X,
    opacity: 0,
    duration: 4,
    ease: "SlowMo.ease"
});

gsap.from("#note3", {
    scrollTrigger: {
        trigger: "#note3",
        start: "top 40%",
        end: "top 60%",
        scrub: 1,
        markers: true
    },
    x: note1X,
    opacity: 0,
    duration: 4,
    ease: "SlowMo.ease"
});

gsap.from("#note4", {
    scrollTrigger: {
        trigger: "#note4",
        start: "top 40%",
        end: "top 60%",
        scrub: 1,
        markers: true
    },
    x: note1X,
    opacity: 0,
    duration: 4,
    ease: "SlowMo.ease"
});

gsap.from("#note5", {
    scrollTrigger: {
        trigger: "#note5",
        start: "top 40%",
        end: "top 60%",
        scrub: 1,
        markers: true
    },
    x: note1X,
    opacity: 0,
    duration: 4,
    ease: "SlowMo.ease"
});

gsap.from("#note6", {
    scrollTrigger: {
        trigger: "#note6",
        start: "top 40%",
        end: "top 60%",
        scrub: 1,
        markers: true
    },
    x: note1X,
    opacity: 0,
    duration: 4,
    ease: "SlowMo.ease"
});

// Animatie opnieuw berekenen bij het wijzigen van de schermgrootte
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});


//Details function
const detailsElement = document.querySelector('.notes')
const summaryElement = detailsElement.querySelector('summary');

detailsElement.addEventListener('toggle', () => {
    if (detailsElement.open) {
        summaryElement.textContent = 'Sluiten';
    } else {
        summaryElement.textContent = 'Bekijk aantekeningen';
    }
});