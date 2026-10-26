(function () {
  const Letter = {
    button: null,
    card: null,
    content: null,
    init() {
      this.button = document.getElementById('envelope-button');
      this.card = document.getElementById('letter-opened');
      this.content = document.getElementById('letter-content');
      this.button.addEventListener('click', () => this.toggle());
      const body = (window.birthdayConfig && window.birthdayConfig.letterBody) ? window.birthdayConfig.letterBody : 'Mi amor, hoy es un día muy especial.';
      this.content.textContent = body;
    },
    toggle() {
      const isOpen = this.button.classList.toggle('is-open');
      this.card.classList.toggle('is-visible', isOpen);
      this.button.setAttribute('aria-expanded', String(isOpen));
    }
  };
  window.Letter = Letter;
})();
