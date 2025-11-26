export default function initManifesto() {
  const words = document.querySelectorAll('.manifesto-heading .word')
  if (!words.length) return
  words.forEach(word => {
    gsap.to(word.children, {
      yPercent: '+=100',
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: word,
        start: "bottom bottom",
        end: "top 55%",
        scrub: 0.4
      }
    })
  })
}