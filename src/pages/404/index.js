(() => {
  const is404 = document.body.dataset.page === "404";
  if (!is404) return;

  const loadThree = () => {
    return new Promise((resolve) => {
      if (window.THREE) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/three@latest/build/three.min.js';
      script.onload = resolve;
      document.head.appendChild(script);
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    loadThree().then(() => {
      import("./dither.js").then(({ initDitherBackground }) => {
        initDitherBackground();
      });
    });
  });
})();
