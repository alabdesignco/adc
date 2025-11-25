import { initLoader, initPreviewFollower, initSliders, initManifesto, initServices, initFooter, initFaq } from "./animations/pages/home/index.js";
import { initLightBeams, initTextScramble } from "./utils/dom.js";

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initPreviewFollower();
  initSliders();
  initManifesto();
  initServices();
  initFooter();
  initLightBeams();
  initTextScramble();
  initFaq();
});
