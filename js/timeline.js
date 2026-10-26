(function () {
  const Timeline = {
    list: null,
    init() {
      this.list = document.getElementById('timeline-list');
      const items = (window.birthdayConfig && Array.isArray(window.birthdayConfig.timeline) && window.birthdayConfig.timeline.length)
        ? window.birthdayConfig.timeline
        : [];
      this.render(items);
    },
    render(items) {
      if (!this.list) return;
      this.list.innerHTML = '';
      if (!items.length) {
        this.list.innerHTML = '<div class="empty-state">Aún no hay recuerdos añadidos. Puedes personalizarlos desde la configuración.</div>';
        return;
      }

      items.forEach((item) => {
        const card = document.createElement('article');
        card.className = 'timeline-item';
        card.innerHTML = `
          <span class="timeline-dot" aria-hidden="true"></span>
          <div class="content">
            <span class="date">${item.date || 'Sin fecha'}</span>
            <h3>${item.title || 'Recuerdo'}</h3>
            <p>${item.description || 'Descripción de este momento especial.'}</p>
          </div>
        `;
        this.list.appendChild(card);
      });
    }
  };
  window.Timeline = Timeline;
})();
