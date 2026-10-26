(function () {
  const Countdown = {
    countdownEl: null,
    messageEl: null,
    timerId: null,
    init() {
      this.countdownEl = document.getElementById('countdown-display');
      this.messageEl = document.getElementById('countdown-message');
      this.update();
      this.timerId = setInterval(() => this.update(), 1000);
    },
    getTargetDate() {
      const raw = window.birthdayConfig && window.birthdayConfig.birthdayDate ? window.birthdayConfig.birthdayDate : '2026-11-04';
      const [year, month, day] = raw.split('-').map(Number);
      return new Date(year, month - 1, day, 0, 0, 0);
    },
    formatTime(diffMs) {
      const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      return { days, hours, minutes, seconds };
    },
    update() {
      const target = this.getTargetDate();
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        this.countdownEl.innerHTML = '';
        this.messageEl.textContent = '¡Hoy es tu día, mi Andreína! ¡Felices 34 años! ❤️🎂';
        if (this.timerId) {
          clearInterval(this.timerId);
          this.timerId = null;
        }
        return;
      }

      const { days, hours, minutes, seconds } = this.formatTime(diff);
      const parts = [
        { label: 'Días', value: days },
        { label: 'Horas', value: hours },
        { label: 'Min.', value: minutes },
        { label: 'Seg.', value: seconds }
      ];
      this.countdownEl.innerHTML = parts.map((part) => `
        <div class="countdown-item">
          <span class="countdown-value">${String(part.value).padStart(2, '0')}</span>
          <span class="countdown-label">${part.label}</span>
        </div>
      `).join('');
      this.messageEl.textContent = 'Estamos contando cada segundo hasta tu día.';
    }
  };
  window.Countdown = Countdown;
})();
