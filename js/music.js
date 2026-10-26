(function () {
  const Music = {
    audio: null,
    buttons: [],
    volumeSlider: null,
    isPlaying: false,
    init() {
      const config = window.birthdayConfig || {};
      this.audio = new Audio();
      this.audio.loop = true;
      this.audio.volume = 0.6;
      this.buttons = [
        document.getElementById('music-toggle'),
        document.getElementById('music-section-toggle')
      ].filter(Boolean);
      this.volumeSlider = document.getElementById('music-volume');
      this.buttons.forEach((button) => button.addEventListener('click', () => this.toggle()));
      this.volumeSlider.addEventListener('input', (event) => {
        if (!this.audio) return;
        const value = Number(event.target.value);
        this.audio.volume = value;
      });

      const candidates = [config.music, config.musicFallback, 'assets/audios/Mi-Andreína.mp3'];
      const validSource = candidates.find((item) => typeof item === 'string' && item.trim().length > 0);
      if (!validSource) {
        this.disablePlayer('Sin música disponible');
        return;
      }

      this.audio.src = validSource;
      this.audio.preload = 'auto';
      this.audio.addEventListener('error', () => {
        const fallback = candidates.filter((entry) => entry && entry !== validSource).find(Boolean);
        if (fallback && this.audio.src !== new URL(fallback, window.location.href).href) {
          this.audio.src = fallback;
          return;
        }
        this.disablePlayer('No se pudo cargar la canción');
      });
    },
    toggle() {
      if (!this.audio) return;
      if (this.isPlaying) {
        this.audio.pause();
        this.isPlaying = false;
        this.updateButtons();
        return;
      }
      this.audio.play().then(() => {
        this.isPlaying = true;
        this.updateButtons();
      }).catch(() => {
        this.isPlaying = false;
        this.updateButtons();
      });
    },
    updateButtons() {
      this.buttons.forEach((button, index) => {
        button.textContent = this.isPlaying
          ? '⏸ Pausar música'
          : (index === 0 ? '♪ Música' : 'Reproducir canción ❤️');
        button.setAttribute('aria-label', this.isPlaying ? 'Pausar música' : 'Reproducir música');
      });
    },
    disablePlayer(reasonMessage) {
      if (!this.buttons.length) return;
      this.buttons.forEach((button) => {
        button.disabled = true;
        button.textContent = '♪ Música no disponible';
      });
      this.audio = null;
      if (this.volumeSlider) {
        this.volumeSlider.disabled = true;
      }
      if (reasonMessage) {
        this.buttons.forEach((button) => button.setAttribute('title', reasonMessage));
      }
    }
  };
  window.Music = Music;
})();
