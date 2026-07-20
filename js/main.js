/* ============================================================
   La Esquina 24H — Interacciones compartidas (1a, 1b, 1c)
   Vanilla JS, sin librerías externas.

   1) Aparición al hacer scroll (fade-in + subida) con
      IntersectionObserver, para: banner de promoción, tabs y
      cada tarjeta de producto.
   2) Header sticky: añade una sombra cuando el header ya fijo en
      el diseño (position: sticky) queda pegado arriba al hacer scroll.
   ============================================================ */

(function () {
  'use strict';

  var prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- 1) Aparición al hacer scroll ----
  function initScrollReveal() {
    // Sin soporte o con movimiento reducido: no ocultamos nada.
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Marca un elemento para animarse y empieza a observarlo.
    function reveal(el) {
      if (!el || el.classList.contains('reveal')) return;
      el.classList.add('reveal');
      observer.observe(el);
    }

    // Secciones estáticas: banner de promoción (.promo / .hero) y tabs.
    document.querySelectorAll('.promo, .hero, .tabs').forEach(reveal);

    // Tarjetas de producto: se renderizan por JS y se re-renderizan al
    // cambiar de categoría, así que además de las iniciales observamos
    // las nuevas con un MutationObserver.
    var productsEl = document.getElementById('products');
    if (!productsEl) return;

    productsEl.querySelectorAll('.product').forEach(reveal);

    var domObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1 && node.classList.contains('product')) {
            reveal(node);
          }
        });
      });
    });
    domObserver.observe(productsEl, { childList: true });
  }

  // ---- 2) Header sticky: sombra al quedar fijo arriba ----
  function initStickyHeader() {
    // Solo los headers que el diseño ya deja fijos: .header (1a) y .ticker (1c).
    document.querySelectorAll('.header, .ticker').forEach(function (el) {
      if (getComputedStyle(el).position !== 'sticky') return;

      var onScroll = function () {
        el.classList.toggle('is-stuck', el.getBoundingClientRect().top <= 0);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    });
  }

  function init() {
    initScrollReveal();
    initStickyHeader();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
