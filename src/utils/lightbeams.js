export default function initLightBeams() {
  const gridContainer = document.querySelector('.grid-lines_component');
  const gridLines = document.querySelectorAll('.grid-lines_wrapper');
  
  if (!gridContainer || !gridLines.length) return;
  
  document.querySelectorAll('.light-beam').forEach(beam => beam.remove());
  
  gridLines.forEach((line, index) => {
    const beam = document.createElement('div');
    beam.classList.add('light-beam');
    beam.dataset.index = index;
    const lineRect = line.getBoundingClientRect();
    const containerRect = gridContainer.getBoundingClientRect();
    const leftPosition = lineRect.left - containerRect.left + (lineRect.width / 2) - 1;
    beam.style.left = `${leftPosition}px`;
    gridContainer.appendChild(beam);
  });
  
  const beams = document.querySelectorAll('.light-beam');
  const beamsArray = Array.from(beams);
  
  gsap.set(beams, {
    y: -120,
    opacity: 0
  });
  
  function animateBeamsRandomly() {
    const shuffledBeams = [...beamsArray].sort(() => Math.random() - 0.5);
    const tl = gsap.timeline();
    shuffledBeams.forEach((beam, i) => {
      tl.to(beam, {
        y: window.innerHeight,
        opacity: 0.8,
        duration: 4,
        ease: "power1.in",
        onComplete: () => {
          gsap.set(beam, { y: -120, opacity: 0 });
        }
      }, i * 0.6);
    });
    return tl;
  }
  
  function loopBeams() {
    const seq = animateBeamsRandomly();
    seq.eventCallback("onComplete", () => {
      gsap.delayedCall(5, loopBeams);
    });
  }
  
  loopBeams();
}