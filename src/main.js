import { initLoader, initPreviewFollower, initSliders, initManifesto, initServices, initFooter, initFaq } from "./pages/home/index.js";
import { initLightBeams, initTextScramble } from "./utils/dom.js";
import "./pages/404/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const isHome = document.body.dataset.page === "home";
  
  initFooter();
  
  if (isHome) {
    initLoader();
    initPreviewFollower();
    initSliders();
    initManifesto();
    initServices();
    initLightBeams();
    initFaq();
    
    document.fonts.ready.then(() => {
      initTextScramble();
    });
  }
});
