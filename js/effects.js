(function () {
  const Effects = {
    confettiCanvas: null,
    particles: [],
    animationFrame: null,
    init() {
      if (this.confettiCanvas) return;
      this.confettiCanvas = document.createElement('canvas');
      this.confettiCanvas.style.position = 'fixed';
      this.confettiCanvas.style.inset = '0';
      this.confettiCanvas.style.width = '100%';
      this.confettiCanvas.style.height = '100%';
      this.confettiCanvas.style.pointerEvents = 'none';
      this.confettiCanvas.style.zIndex = '30';
      document.body.appendChild(this.confettiCanvas);
    },
    startConfetti() {
      this.init();
      const canvas = this.confettiCanvas;
      const ctx = canvas.getContext('2d');
      const rect = document.body.getBoundingClientRect();
      canvas.width = Math.max(window.innerWidth * window.devicePixelRatio, 400);
      canvas.height = Math.max(window.innerHeight * window.devicePixelRatio, 700);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      const colors = ['#ff7cc5', '#ffb9e8', '#d7c5ff', '#fff0a9', '#90d8ff'];
      const particles = [];
      for (let i = 0; i < 120; i += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: -20,
          w: 6 + Math.random() * 6,
          h: 10 + Math.random() * 14,
          r: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 5,
          vy: 2 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      this.particles = particles;
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const particleCount = particles.length;
        for (let i = particleCount - 1; i >= 0; i -= 1) {
          const p = particles[i];
          p.x += p.vx * 1.5;
          p.y += p.vy * 2;
          p.r += 0.08;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.r);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
          if (p.y > canvas.height) {
            particles.splice(i, 1);
          }
        }
        if (particles.length > 0) {
          this.animationFrame = requestAnimationFrame(render);
        } else {
          this.animationFrame = null;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      };
      render();
    },
    burstHearts(containerSelector) {
      const container = document.querySelector(containerSelector);
      if (!container) return;
      for (let i = 0; i < 16; i += 1) {
        const heart = document.createElement('span');
        heart.textContent = '❤';
        heart.className = 'floating-heart';
        heart.style.left = 10 + Math.random() * 80 + '%';
        heart.style.animationDelay = (Math.random() * 0.8).toFixed(2) + 's';
        heart.style.fontSize = (16 + Math.random() * 24) + 'px';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 2400);
      }
    },
    setFloatingBackground(selector) {
      const container = document.querySelector(selector);
      if (!container) return;
      for (let i = 0; i < 20; i += 1) {
        const particle = document.createElement('span');
        particle.className = 'floating-particle';
        particle.style.left = (Math.random() * 100) + '%';
        particle.style.bottom = (-20 - Math.random() * 50) + 'px';
        particle.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
        particle.style.animationDuration = (5 + Math.random() * 6).toFixed(2) + 's';
        container.appendChild(particle);
      }
    }
  };
  window.Effects = Effects;
})();
