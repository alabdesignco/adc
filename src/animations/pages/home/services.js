export default function initServices() {
  const slides = document.querySelectorAll('.section_services .services-slide_component')
  if (!slides.length) return
  slides.forEach(slide => {
    const contentWrapper = slide.querySelector('.services-content_wrapper')
    const content = slide.querySelector('.services_content')
    if (!contentWrapper || !content) return
    gsap.to(content, {
      rotationZ: (Math.random() - 0.5) * 10,
      scale: 0.7,
      rotationX: 40,
      ease: 'power1.in',
      scrollTrigger: {
        pin: contentWrapper,
        trigger: slide,
        start: 'top 0%',
        end: '+=' + window.innerHeight,
        scrub: true
      }
    })
    gsap.to(content, {
      autoAlpha: 0,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: content,
        start: 'top -80%',
        end: '+=' + 0.2 * window.innerHeight,
        scrub: true
      }
    })
  })
}