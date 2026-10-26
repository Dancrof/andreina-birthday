(function () {
  const STEPS = [
    { id: 'scanner', label: 'Bienvenida' },
    { id: 'reveal', label: 'Revelación' },
    { id: 'welcome', label: 'Un regalo para ti' },
    { id: 'countdown', label: 'Cuenta regresiva' },
    { id: 'reasons', label: '34 razones' },
    { id: 'gallery', label: 'Galería' },
    { id: 'timeline', label: 'Recuerdos' },
    { id: 'letter', label: 'Carta' },
    { id: 'song', label: 'Canción' },
    { id: 'cake', label: 'Pastel' },
    { id: 'final', label: 'Final' }
  ];
  const REVEAL_SELECTOR = [
    '.scanner-panel',
    '.section > .hero-card',
    '.section > .content-card > .eyebrow',
    '.section > .content-card > h2',
    '.section > .content-card > .lead-text',
    '.countdown-grid',
    '.reason-card',
    '.gallery-card',
    '.timeline-item',
    '.letter-card',
    '.song-player',
    '.cake-scene',
    '.final-actions'
  ].join(', ');

  const App = {
    maxProgressIndex: 0,
    sectionVisibility: new Map(),
    observer: null,
    init() {
      this.validateConfig();
      this.bindGlobalActions();
      this.render();
      if (window.Petals && typeof window.Petals.init === 'function') window.Petals.init();
      if (window.Scanner && typeof window.Scanner.init === 'function') window.Scanner.init();
      if (window.Countdown && typeof window.Countdown.init === 'function') window.Countdown.init();
      if (window.Reasons && typeof window.Reasons.init === 'function') window.Reasons.init();
      if (window.Gallery && typeof window.Gallery.init === 'function') window.Gallery.init();
      if (window.Timeline && typeof window.Timeline.init === 'function') window.Timeline.init();
      if (window.Letter && typeof window.Letter.init === 'function') window.Letter.init();
      if (window.Cake && typeof window.Cake.init === 'function') window.Cake.init();
      if (window.Music && typeof window.Music.init === 'function') window.Music.init();
      this.initScrollExperience();
      if (window.Effects && typeof window.Effects.setFloatingBackground === 'function') {
        window.Effects.setFloatingBackground('.final-card');
      }
    },
    validateConfig() {
      const config = window.birthdayConfig || {};
      if (!config.recipientName) config.recipientName = 'Andreína';
      if (!config.senderName) config.senderName = 'Tu novio';
      if (!config.age) config.age = 34;
      if (!config.birthdayDate) config.birthdayDate = '2026-11-04';
      if (!config.title) config.title = '¡Felices 34 años, mi Andreína! ❤️';
      if (!config.letterBody && config.letterMessage) config.letterBody = config.letterMessage;
      if (!config.finalText && config.finalMessage) config.finalText = config.finalMessage;
      if (!Array.isArray(config.reasons) || !config.reasons.length) {
        config.reasons = Array.from({ length: 34 }, (_, index) => `Razón ${index + 1} para celebrar este momento tan especial.`);
      }
      if (!Array.isArray(config.gallery)) config.gallery = [];
      if (!Array.isArray(config.timeline)) config.timeline = [];
    },
    bindGlobalActions() {
      document.getElementById('share-button')?.addEventListener('click', async () => {
        const shareData = {
          title: 'Felices 34 años, Andreína ❤️',
          text: 'Te invito a descubrir una sorpresa especial para mi amor.',
          url: window.location.href
        };
        if (!navigator.share) return;
        try {
          await navigator.share(shareData);
        } catch (error) {
          if (error.name !== 'AbortError') console.error('No se pudo compartir la sorpresa.', error);
        }
      });

      document.getElementById('copy-link-button')?.addEventListener('click', async () => {
        const url = window.location.href;
        const button = document.getElementById('copy-link-button');
        try {
          await navigator.clipboard.writeText(url);
        } catch (error) {
          const fallback = document.createElement('textarea');
          fallback.value = url;
          fallback.setAttribute('readonly', '');
          fallback.style.position = 'fixed';
          fallback.style.opacity = '0';
          document.body.appendChild(fallback);
          fallback.select();
          const copied = document.execCommand('copy');
          fallback.remove();
          if (!copied) {
            console.error('No se pudo copiar el enlace.', error);
            return;
          }
        }
        button.textContent = '¡Enlace copiado!';
        window.setTimeout(() => {
          button.textContent = 'Copiar enlace';
        }, 1500);
      });
    },
    render() {
      const title = document.querySelector('title');
      if (title) title.textContent = `${window.birthdayConfig?.recipientName || 'Andreína'} cumple ${window.birthdayConfig?.age || 34} años`;
    },
    initScrollExperience() {
      const progressFill = document.getElementById('reading-progress-fill');
      const progressLabel = document.getElementById('reading-progress-label');
      const sections = [...document.querySelectorAll('.section')];
      const revealTargets = [...document.querySelectorAll(REVEAL_SELECTOR)];
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduceMotion || typeof IntersectionObserver !== 'function') return;

      sections.forEach((section, index) => {
        section.dataset.sceneIndex = String(index);
      });
      revealTargets.forEach((element, index) => {
        element.classList.add('scene-reveal');
        element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 45}ms`);
      });

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target.matches('.section')) {
            if (entry.isIntersecting) {
              this.sectionVisibility.set(entry.target.id, entry.intersectionRatio);
            } else {
              this.sectionVisibility.delete(entry.target.id);
            }
            const index = Number(entry.target.dataset.sceneIndex);
            if (entry.isIntersecting) {
              this.maxProgressIndex = Math.max(this.maxProgressIndex, index);
            }
            const progress = Math.round((this.maxProgressIndex / (STEPS.length - 1)) * 100);
            progressFill.style.width = `${progress}%`;
            progressFill.parentElement.setAttribute('aria-valuenow', String(progress));
            progressLabel.textContent = STEPS[this.maxProgressIndex]?.label || 'Inicio';
            const visibleScene = this.getMostVisibleScene();
            if (visibleScene && window.Petals && typeof window.Petals.setScene === 'function') {
              window.Petals.setScene(visibleScene);
            }
          } else if (entry.isIntersecting && !entry.target.classList.contains('is-visible')) {
            entry.target.classList.add('is-visible');
          }
        });
      }, {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0, 0.08, 0.2, 0.4, 0.65]
      });

      sections.forEach((section) => this.observer.observe(section));
      revealTargets.forEach((element) => this.observer.observe(element));
    },
    getMostVisibleScene() {
      let selectedId = 'scanner';
      let maxRatio = 0;
      this.sectionVisibility.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          selectedId = id;
          maxRatio = ratio;
        }
      });
      return selectedId;
    },
    showStep(index) {
      const step = STEPS[Math.min(Math.max(index, 0), STEPS.length - 1)];
      const target = step && document.getElementById(step.id);
      if (target) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      }
    },
    unlockJourney() {
      this.showStep(1);
      if (window.Petals && typeof window.Petals.burst === 'function') {
        window.Petals.burst(10);
      }
      if (window.Effects && typeof window.Effects.startConfetti === 'function') {
        window.Effects.startConfetti();
      }
    }
  };

  window.birthdayApp = App;
  window.addEventListener('DOMContentLoaded', () => App.init());
})();
