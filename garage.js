// counters
const counters = document.querySelectorAll('.count');

const animate = (el) => {
  const target = +el.dataset.target;
  let n = 0;
  const step = Math.max(1, Math.round(target / 60));

  const tick = () => {
    n += step;
    if (n >= target) {
      el.textContent = target;
    } else {
      el.textContent = n;
      requestAnimationFrame(tick);
    }
  };
  tick();
};

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animate(e.target);
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach((c) => io.observe(c));
