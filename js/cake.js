(function () {
  const Cake = {
    message: null,
    candles: [],
    blowButton: null,
    wishButton: null,
    defaultMessage: 'Que tus 34 años estén llenos de amor, felicidad, salud y sueños cumplidos. ¡Te mereces todo lo bonito del mundo, mi vida! 🎂❤️',
    init() {
      this.message = document.getElementById('cake-message');
      this.candles = [...document.querySelectorAll('.cake-candle')];
      this.blowButton = document.getElementById('blow-button');
      this.wishButton = document.getElementById('wish-button');
      this.blowButton.addEventListener('click', () => this.blowOutCandles());
      this.wishButton.addEventListener('click', () => {
        if (window.Effects && typeof window.Effects.startConfetti === 'function') {
          window.Effects.startConfetti();
        }
        this.message.textContent = 'Pide un deseo con el corazón y celebra este momento tan especial. ❤️';
      });
      this.message.textContent = this.defaultMessage;
    },
    blowOutCandles() {
      this.candles.forEach((candle) => candle.classList.add('is-out'));
      this.message.textContent = this.defaultMessage;
      if (window.Petals && typeof window.Petals.burst === 'function') {
        window.Petals.burst(8);
      }
      if (window.Effects && typeof window.Effects.startConfetti === 'function') {
        window.Effects.startConfetti();
      }
      setTimeout(() => {
        this.candles.forEach((candle) => candle.classList.remove('is-out'));
      }, 2300);
    }
  };
  window.Cake = Cake;
})();
