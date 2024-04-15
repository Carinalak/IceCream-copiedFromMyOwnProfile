import gsap from 'gsap';

export default function animationOrangeBall() {
    gsap.to('#orangeCircle', {
        x: 25,
        y: 30,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'easeInOutSine',
    });
}
