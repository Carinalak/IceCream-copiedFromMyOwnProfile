import gsap from 'gsap';

export default function animationPinkBall() {
    gsap.to('#pinkCircle', {
        x: 15,
        y: 30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'easeInOutSine',
    });
}
