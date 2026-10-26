(function () {
  const Reasons = {
    grid: null,
    init() {
      this.grid = document.getElementById('reasons-grid');
      const items = (window.birthdayConfig && Array.isArray(window.birthdayConfig.reasons) && window.birthdayConfig.reasons.length)
        ? window.birthdayConfig.reasons
        : Array.from({ length: 34 }, (_, index) => `Razón ${index + 1} para celebrar este momento tan especial.`);

      if (!this.grid) return;
      this.grid.innerHTML = '';
      items.slice(0, 34).forEach((reason, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'reason-card';
        button.setAttribute('aria-pressed', 'false');
        button.innerHTML = `
          <span class="reason-number">${index + 1}</span>
          <span class="reason-text">${reason}</span>
        `;
        button.addEventListener('click', () => {
          const isOpen = button.classList.toggle('is-active');
          button.setAttribute('aria-pressed', String(isOpen));
        });
        this.grid.appendChild(button);
      });
    }
  };
  window.Reasons = Reasons;
})();
