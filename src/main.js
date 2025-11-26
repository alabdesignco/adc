import { initLoader, initPreviewFollower, initSliders, initManifesto, initServices, initFooter, initFaq } from "./pages/home/index.js";
import { initLightBeams, initTextScramble } from "./utils/dom.js";

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initPreviewFollower();
  initSliders();
  initManifesto();
  initServices();
  initFooter();
  initLightBeams();
  initFaq();
  
  document.fonts.ready.then(() => {
    initTextScramble();
  });
});
