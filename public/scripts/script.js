gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-we-text', {duration: 1, x: '-100%', delay: 0.5, ease: 'ease-in'});
gsap.from('.hero-web-text', {duration: 0.9, x: '60%', delay: 0.8, ease: 'ease-in'});
gsap.from('.we-love-web-hearth', {duration: 1, y: '-150%', delay: 1, ease: 'ease-out'});

// Heartbeat animation using GSAP
gsap.to(".we-love-web-hearth", {
    scale: 1.2,
    repeat: -1, // Infinite repeat
    yoyo: true, // Alternate direction
    duration: 0.5, // Half a second for each beat (scale up and down)
    ease: "power1.inOut"
});

gsap.to(".we-love-web-hearth", {
    scrollTrigger: {
        trigger: "#section1",
        start: "top 15%",
        end: "bottom 10%",
        scrub: 3,
        // markers: true
    },
    y: 1050,
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
    x: -200,
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
    x: 200,
    duration: 1
});

gsap.from("#section3", {
    scrollTrigger: {
        trigger: "#section3", // Setting the trigger to .we-love-web-text
        start: "top 40%", // Start when the top of .we-love-web-text is at 40% of the viewport height
        end: "top 60%", // End when the top of .we-love-web-text is at 60% of the viewport height
        scrub: 1,
        markers: true
    },
    x: -4000,
    opacity: 0,
    duration: 4,
    ease: "SlowMo.ease"
});