import gsap from 'gsap';

export default function animationIceCream() {
    const svg = document.querySelector('#iceCreamSVG');
    let isAnimating = false;

    svg.addEventListener('mouseenter', () => {
        if (!isAnimating) {
            isAnimating = true;

            gsap.to(svg, {
                duration: 2,
                rotation: 3,
                transformOrigin: '50% 20%',
                repeat: 0,
                ease: 'power1.inOut',
            });

            gsap.to('#strawberry', {
                duration: 2,
                fill: '#FF92D3',
                repeat: -1,
                yoyo: true,
            });

            gsap.to('#strawberry', {
                duration: 1,
                y: -5,
                repeat: 1,
                yoyo: true,
                onComplete: () => {
                    gsap.to('#strawberry', {
                        duration: 0.9,
                        x: 3,
                        y: 0,
                    });
                },
            });

            gsap.to('#mint', {
                duration: 1,
                x: '+=4',
                y: 2,
                repeat: 2,
                yoyo: true,
                onComplete: () => {
                    gsap.to('#mint', {
                        duration: 0.9,
                        x: 3,
                        y: 0,
                        onComplete: () => {
                            isAnimating = false;
                        },
                    });
                },
            });

            gsap.to('#chocolate', {
                duration: 1,
                y: -4,
                x: 2,
                onComplete: () => {
                    gsap.to('#chocolate', {
                        duration: 0.5,
                        x: 0,
                        y: 0,
                    });
                },
            });
        }
    });

    svg.addEventListener('click', () => {
        if (!isAnimating) {
            isAnimating = true;

            gsap.killTweensOf('#chocolate');
            gsap.to('#chocolate', {
                duration: 0.4,
                y: -30,
                x: -2,
                ease: 'power1.inOut',
                onComplete: () => {
                    gsap.to('#chocolate', {
                        duration: 0.6,
                        y: 0,
                        x: 0,
                    });
                },
            });

            gsap.killTweensOf('#strawberry');
            gsap.to('#strawberry', {
                duration: 0.4,
                y: -50,
                x: 15,
                ease: 'power1.inOut',
                onComplete: () => {
                    gsap.to('#strawberry', {
                        duration: 0.6,
                        y: 0,
                        x: 0,
                    });
                },
            });

            gsap.killTweensOf('#mint');
            gsap.to('#mint', {
                duration: 0.4,
                y: -10,
                ease: 'power1.inOut',
                onComplete: () => {
                    gsap.to('#mint', {
                        duration: 0.6,
                        y: 0,
                        onComplete: () => {
                            isAnimating = false;
                        },
                    });
                },
            });
        }
    });

    svg.addEventListener('mouseleave', () => {
        gsap.killTweensOf(['#chocolate', '#strawberry', '#mint']);
        isAnimating = false;
    });
}
