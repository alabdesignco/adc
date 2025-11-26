export default function initFooter() {
  const duplicateElement = document.querySelector('.footer_component .is-duplicate');
  const footerContentWrapper = document.querySelector('.footer-content_wrapper');
  
  if (!footerContentWrapper || !duplicateElement) {
    return;
  }
  
  const xTo = gsap.quickTo(duplicateElement, '--xpercent', {
    duration: 0.4,
    ease: "back"
  });
  
  const yTo = gsap.quickTo(duplicateElement, '--ypercent', {
    duration: 0.4,
    ease: "back"
  });
  
  footerContentWrapper.style.pointerEvents = 'auto';
  
  gsap.set(duplicateElement, { opacity: 0 });
  
  footerContentWrapper.addEventListener("mouseenter", () => {
    gsap.to(duplicateElement, { opacity: 1, duration: 0.3 });
  });
  
  footerContentWrapper.addEventListener("mouseleave", () => {
    gsap.to(duplicateElement, { opacity: 0, duration: 0.3 });
  });
  
  footerContentWrapper.addEventListener("mousemove", (e) => {
    const bounds = footerContentWrapper.getBoundingClientRect();
    const mRangeX = gsap.utils.mapRange(0, bounds.width, 0, 100, e.clientX - bounds.left);
    const mRangeY = gsap.utils.mapRange(0, bounds.height, 0, 100, e.clientY - bounds.top);
    xTo(mRangeX);
    yTo(mRangeY);
  });
}