/* PottyMap site — tiny progressive enhancement.
   Adds `.js` so CSS can hide reveal elements only when JS is available (no-JS
   users see everything), then fades sections in on scroll. Honors reduced-motion. */
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  var els = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // No animation wanted (or supported) → just show everything.
  if (reduce || !('IntersectionObserver' in window)) {
    for (var i = 0; i < els.length; i++) els[i].classList.add('in');
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  for (var j = 0; j < els.length; j++) io.observe(els[j]);
})();
