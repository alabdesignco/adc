export default function initLoader() {
  const loaderComponent = document.querySelector('.loader_component');
  const loaderLogo = document.querySelector('.loader_logo');
  
  if (!loaderComponent) return;
  
  loaderComponent.style.display = 'flex';
  
  const blinds = document.querySelectorAll('.loader_component .gradient-blind');
  
  const tl = gsap.timeline({
    onComplete: () => {
      loaderComponent.style.display = 'none';
      const pageWrapper = document.querySelector('.page-wrapper');
      if (pageWrapper) {
        pageWrapper.style.visibility = 'visible';
      }
      
      gsap.fromTo('.page-wrapper', 
                  { autoAlpha: 0 }, 
                  { autoAlpha: 1, duration: 0.8, ease: 'power1.out' }
                 );
    }
  });
  
  tl.fromTo(
    loaderLogo,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.8, ease: 'power2.inOut' }
  );
  
  tl.to(loaderLogo, { duration: 0.5 });
  
  tl.to(
    loaderLogo,
    { autoAlpha: 0, duration: 0.8, ease: 'power2.inOut' }
  );
  
  tl.fromTo(
    blinds,
    { y: 0 },
    { 
      y: '400vh',
      duration: 2,
      stagger: 0.05,
      ease: 'power4.inOut',
    },
    ">"
  );
}
