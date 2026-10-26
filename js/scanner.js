(function () {
  const Scanner = {
    element: null,
    fill: null,
    status: null,
    message: null,
    active: false,
    progress: 0,
    timerId: null,
    startTime: null,
    unlockState: false,
    init() {
      this.element = document.getElementById('scanner');
      this.fill = document.getElementById('scan-fill');
      this.status = document.getElementById('scan-status');
      this.message = document.getElementById('scan-message');
      this.unlockButton = document.getElementById('unlock-button');
      this.cancelButton = document.getElementById('cancel-button');
      this.attachEvents();
    },
    attachEvents() {
      const holdTarget = this.element.querySelector('.fingerprint-wrap');

      const start = (event) => {
        if (this.active || this.unlockState) return;
        event.preventDefault();
        this.active = true;
        this.startTime = performance.now();
        this.message.textContent = 'Escaneando huella';
        this.progress = 0;
        this.fill.classList.add('active');
        this.tick();
      };

      const stop = () => {
        if (!this.active && !this.unlockState) return;
        this.active = false;
        this.unlockState = false;
        this.progress = 0;
        this.fill.style.width = '0%';
        this.status.textContent = '0%';
        this.message.textContent = 'Listo para iniciar';
        this.fill.classList.remove('active');
        clearTimeout(this.timerId);
        this.timerId = null;
      };

      const handlePointerUp = () => {
        if (!this.active) return;
        stop();
      };

      holdTarget.addEventListener('pointerdown', start);
      holdTarget.addEventListener('pointerup', handlePointerUp);
      holdTarget.addEventListener('pointerleave', handlePointerUp);
      holdTarget.addEventListener('pointercancel', stop);

      this.unlockButton.addEventListener('click', () => {
        if (this.unlockState) return;
        this.startUnlockSequence();
      });

      this.cancelButton.addEventListener('click', stop);
    },
    tick() {
      if (!this.active) return;
      const elapsed = performance.now() - this.startTime;
      const next = Math.min(100, Math.round((elapsed / 2100) * 100));
      this.progress = next;
      this.fill.style.width = next + '%';
      this.status.textContent = next + '%';
      if (next >= 100) {
        this.finishUnlock();
        return;
      }
      this.timerId = setTimeout(() => this.tick(), 40);
    },
    startUnlockSequence() {
      this.active = true;
      this.unlockState = false;
      this.startTime = performance.now();
      this.message.textContent = 'Escaneando huella';
      this.fill.classList.add('active');
      this.tick();
    },
    finishUnlock() {
      this.active = false;
      this.unlockState = true;
      this.progress = 100;
      this.fill.style.width = '100%';
      this.status.textContent = '100%';
      this.message.textContent = '¡Acceso concedido! ❤️';
      this.fill.classList.add('active');
      clearTimeout(this.timerId);
      this.timerId = null;
      setTimeout(() => {
        if (window.birthdayApp && typeof window.birthdayApp.unlockJourney === 'function') {
          window.birthdayApp.unlockJourney();
        }
      }, 220);
      setTimeout(() => {
        if (window.Effects && typeof window.Effects.startConfetti === 'function') {
          window.Effects.startConfetti();
        }
      }, 200);
    }
  };
  window.Scanner = Scanner;
})();
