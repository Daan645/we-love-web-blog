gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-we-text', {duration: 1, x: '100%', delay: 0.5, ease: 'ease-in'});
gsap.from('.hero-web-text', {duration: 0.9, x: '-60%', delay: 0.8, ease: 'ease-in'});
gsap.from('.we-love-web-hearth', {duration: 1, y: '-150%', delay: 1, ease: 'ease-out'});

gsap.to(".we-love-web-hearth", {
    scrollTrigger: {
        trigger: "#section1",
        start: "top 15%",
        end: "bottom 10%",
        scrub: 3,
        markers: true
    },
    y: 1200,
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
        markers: true
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
        markers: true
    },
    x: 200,
    duration: 1
});