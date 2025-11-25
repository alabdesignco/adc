export default function initTextScramble() {
  const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

  class ScrambleTextAnimator {
    constructor(textElement) {
      this.textElement = textElement;
      this.splitText = new SplitText(this.textElement, { type: 'chars,words' });
      this.originalChars = Array.from(this.splitText.chars || []).map(char => char.innerHTML);
      this.setupEventListeners();
    }

    setupEventListeners() {
      this.textElement.addEventListener('mouseenter', () => this.animate());
      this.textElement.addEventListener('mouseleave', () => this.animateBack());
    }

    animate() {
      this.reset();
      const chars = this.splitText.chars || [];

      chars.forEach((char, position) => {
        const initialHTML = char.innerHTML;
        gsap.fromTo(char, {
          opacity: 0
        }, {
          duration: 0.03,
          onComplete: () => gsap.set(char, { innerHTML: initialHTML, delay: 0.1 }),
          repeat: 2,
          repeatRefresh: true,
          repeatDelay: 0.05,
          delay: (position + 1) * 0.06,
          innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
          opacity: 1
        });
      });

      gsap.fromTo(this.textElement, {
        '--anim': 0
      }, {
        duration: 1,
        ease: 'expo',
        '--anim': 1
      });
    }

    animateBack() {
      gsap.killTweensOf(this.textElement);
      gsap.to(this.textElement, {
        duration: 0.6,
        ease: 'power4',
        '--anim': 0
      });
    }

    reset() {
      const chars = this.splitText.chars || [];
      chars.forEach((char, index) => {
        gsap.killTweensOf(char);
        char.innerHTML = this.originalChars[index] || '';
      });
      gsap.killTweensOf(this.textElement);
      gsap.set(this.textElement, { '--anim': 0 });
    }
  }

  document.querySelectorAll('[data-scramble-text]').forEach(element => {
    new ScrambleTextAnimator(element);
  });
}