(function () {
  const Gallery = {
    grid: null,
    modal: null,
    image: null,
    title: null,
    description: null,
    currentIndex: 0,
    items: [],
    init() {
      this.grid = document.getElementById('gallery-grid');
      this.modal = document.getElementById('gallery-modal');
      this.image = document.getElementById('gallery-modal-image');
      this.title = document.getElementById('gallery-modal-title');
      this.description = document.getElementById('gallery-modal-description');
      this.items = (window.birthdayConfig && Array.isArray(window.birthdayConfig.gallery) && window.birthdayConfig.gallery.length)
        ? window.birthdayConfig.gallery
        : [
            { image: 'assets/images/IMG-20251213-WA0054.jpg', alt: 'Foto de recuerdo', title: 'Añade tu primera foto', description: 'Aquí podrás colocar una imagen especial.' },
            { image: 'assets/images/IMG-20260101-WA0030.jpg', alt: 'Foto de recuerdo', title: 'Añade tu segunda foto', description: 'Este espacio está preparado para tus recuerdos favoritos.' }
          ];
      this.render();
      this.bindModalControls();
    },
    render() {
      if (!this.grid) return;
      this.grid.innerHTML = '';

      if (!this.items.length) {
        this.grid.innerHTML = '<div class="empty-state">Aún no hay fotografías para esta galería. Puedes añadirlas desde la configuración.</div>';
        return;
      }

      this.items.forEach((item, index) => {
        const figure = document.createElement('figure');
        figure.className = 'gallery-card';
        figure.tabIndex = 0;
        figure.setAttribute('role', 'button');
        figure.setAttribute('aria-label', item.title || 'Abrir imagen');
        figure.innerHTML = `
          <img src="${item.image}" alt="${item.alt || item.title || 'Foto'}" />
          <figcaption>
            <h3>${item.title || 'Recuerdo'}</h3>
            <p>${item.description || 'Un pequeño momento para guardar.'}</p>
          </figcaption>
        `;
        figure.addEventListener('click', () => this.open(index));
        figure.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.open(index);
          }
        });
        this.grid.appendChild(figure);
      });
    },
    bindModalControls() {
      document.getElementById('gallery-close').addEventListener('click', () => this.close());
      document.querySelector('[data-close-modal="true"]').addEventListener('click', () => this.close());
      document.getElementById('gallery-next').addEventListener('click', () => this.change(1));
      document.getElementById('gallery-prev').addEventListener('click', () => this.change(-1));
      document.addEventListener('keydown', (event) => {
        if (!this.modal || !this.modal.classList.contains('is-open')) return;
        if (event.key === 'Escape') this.close();
        if (event.key === 'ArrowRight') this.change(1);
        if (event.key === 'ArrowLeft') this.change(-1);
      });
    },
    open(index) {
      this.currentIndex = index;
      this.renderModal();
      this.modal.classList.add('is-open');
      this.modal.setAttribute('aria-hidden', 'false');
      const focusTarget = document.getElementById('gallery-close');
      if (focusTarget) focusTarget.focus();
    },
    close() {
      this.modal.classList.remove('is-open');
      this.modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    },
    change(offset) {
      const nextIndex = (this.currentIndex + offset + this.items.length) % this.items.length;
      this.currentIndex = nextIndex;
      this.renderModal();
    },
    renderModal() {
      const item = this.items[this.currentIndex];
      if (!item) return;
      this.image.src = item.image;
      this.image.alt = item.alt || item.title || 'Foto';
      this.title.textContent = item.title || 'Recuerdo';
      this.description.textContent = item.description || 'Un momento para recordar.';
    }
  };
  window.Gallery = Gallery;
})();
