import gsap from 'gsap';

export default function animationOrangeBall() {
    gsap.to('#orangeCircle', {
        x: 15,
        y: 25,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'easeInOutSine',
    });
}
