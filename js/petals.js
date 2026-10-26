(function () {
  const DEFAULTS = {
    enabled: true,
    colors: ['#C2183A', '#E75480', '#F4A6BE', '#F8D7E3'],
    density: 'medium',
    intensityByScene: true,
    wind: true,
    rotation: true
  };
  const SCENE_COUNTS = {
    scanner: { desktop: 4, mobile: 2 },
    reveal: { desktop: 15, mobile: 9 },
    welcome: { desktop: 7, mobile: 4 },
    countdown: { desktop: 7, mobile: 4 },
    reasons: { desktop: 7, mobile: 4 },
    gallery: { desktop: 5, mobile: 3 },
    timeline: { desktop: 6, mobile: 4 },
    letter: { desktop: 3, mobile: 2 },
    song: { desktop: 5, mobile: 3 },
    cake: { desktop: 9, mobile: 5 },
    final: { desktop: 16, mobile: 9 }
  };
  const DENSITY_SCALE = { low: 0.65, medium: 1, high: 1.35 };

  const Petals = {
    layer: null,
    config: null,
    scene: 'scanner',
    active: new Set(),
    timer: null,
    reducedMotion: false,
    mediaQuery: null,
    init() {
      const userConfig = window.birthdayConfig?.petals || {};
      const colors = Array.isArray(userConfig.colors)
        ? userConfig.colors.filter((color) => typeof color === 'string' && /^#[\da-f]{6}$/i.test(color))
        : [];

      this.config = {
        enabled: typeof userConfig.enabled === 'boolean' ? userConfig.enabled : DEFAULTS.enabled,
        colors: colors.length ? colors : [...DEFAULTS.colors],
        density: Object.hasOwn(DENSITY_SCALE, userConfig.density) ? userConfig.density : DEFAULTS.density,
        intensityByScene: typeof userConfig.intensityByScene === 'boolean'
          ? userConfig.intensityByScene
          : DEFAULTS.intensityByScene,
        wind: typeof userConfig.wind === 'boolean' ? userConfig.wind : DEFAULTS.wind,
        rotation: typeof userConfig.rotation === 'boolean' ? userConfig.rotation : DEFAULTS.rotation
      };
      this.mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.reducedMotion = this.mediaQuery.matches;
      const handleMotionPreferenceChange = (event) => {
        this.reducedMotion = event.matches;
        this.sync();
      };
      if (typeof this.mediaQuery.addEventListener === 'function') {
        this.mediaQuery.addEventListener('change', handleMotionPreferenceChange);
      } else {
        this.mediaQuery.addListener(handleMotionPreferenceChange);
      }
      document.addEventListener('visibilitychange', () => this.sync());

      if (!this.config.enabled || this.reducedMotion) return;
      this.layer = document.createElement('div');
      this.layer.className = 'petal-layer';
      this.layer.setAttribute('aria-hidden', 'true');
      document.body.appendChild(this.layer);
      this.sync();
    },
    getTargetCount() {
      if (!this.config) return 0;
      const isMobile = window.matchMedia('(max-width: 640px)').matches ||
        (navigator.deviceMemory && navigator.deviceMemory <= 4);
      const sceneCounts = this.config.intensityByScene
        ? SCENE_COUNTS[this.scene] || SCENE_COUNTS.scanner
        : { desktop: 7, mobile: 4 };
      const baseCount = isMobile ? sceneCounts.mobile : sceneCounts.desktop;
      return Math.max(1, Math.round(baseCount * DENSITY_SCALE[this.config.density]));
    },
    sync() {
      if (!this.config?.enabled || this.reducedMotion || document.hidden) {
        this.stop();
        return;
      }
      if (!this.layer) {
        this.layer = document.createElement('div');
        this.layer.className = 'petal-layer';
        this.layer.setAttribute('aria-hidden', 'true');
        document.body.appendChild(this.layer);
      }
      this.schedule();
    },
    setScene(scene) {
      this.scene = Object.hasOwn(SCENE_COUNTS, scene) ? scene : 'scanner';
      this.sync();
    },
    schedule() {
      if (this.timer !== null || !this.layer || this.reducedMotion || document.hidden) return;
      const targetCount = this.getTargetCount();
      const interval = Math.max(260, Math.round(9000 / targetCount));
      this.timer = window.setTimeout(() => {
        this.timer = null;
        if (this.active.size < this.getTargetCount()) this.createPetal();
        this.schedule();
      }, interval);
    },
    createPetal() {
      if (!this.layer || !this.config?.enabled || this.reducedMotion) return;
      const maxCount = window.matchMedia('(max-width: 640px)').matches ? 18 : 30;
      if (this.active.size >= maxCount) return;

      const petal = document.createElement('span');
      const color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)];
      const rgb = this.hexToRgb(color);
      const size = 8 + Math.random() * 13;
      const drift = this.config.wind ? (Math.random() - 0.5) * 34 : 0;
      const rotation = this.config.rotation ? (Math.random() - 0.5) * 600 : 0;
      const duration = 8 + Math.random() * 8;

      petal.className = 'rose-petal';
      petal.style.setProperty('--start-x', `${Math.random() * 100}vw`);
      petal.style.setProperty('--size', `${size.toFixed(1)}px`);
      petal.style.setProperty('--scale', (0.7 + Math.random() * 0.7).toFixed(2));
      petal.style.setProperty('--petal-opacity', (0.24 + Math.random() * 0.34).toFixed(2));
      petal.style.setProperty('--petal-color', color);
      petal.style.setProperty('--petal-light', this.mixColor(rgb, 0.42));
      petal.style.setProperty('--petal-dark', this.mixColor(rgb, -0.28));
      petal.style.setProperty('--drift', `${drift.toFixed(1)}vw`);
      petal.style.setProperty('--rotation', `${rotation.toFixed(1)}deg`);
      petal.style.setProperty('--start-rotation', `${(Math.random() - 0.5) * 120}deg`);
      petal.style.setProperty('--fall-duration', `${duration.toFixed(2)}s`);
      petal.addEventListener('animationend', () => {
        this.active.delete(petal);
        petal.remove();
      }, { once: true });
      this.active.add(petal);
      this.layer.appendChild(petal);
    },
    burst(count) {
      if (!this.config?.enabled || this.reducedMotion || document.hidden) return;
      const maxCount = window.matchMedia('(max-width: 640px)').matches ? 18 : 30;
      const available = Math.max(0, maxCount - this.active.size);
      for (let index = 0; index < Math.min(count, available); index += 1) {
        window.setTimeout(() => this.createPetal(), index * 100);
      }
    },
    stop() {
      window.clearTimeout(this.timer);
      this.timer = null;
      this.active.forEach((petal) => petal.remove());
      this.active.clear();
      if (this.layer) this.layer.remove();
      this.layer = null;
    },
    hexToRgb(hex) {
      const value = Number.parseInt(hex.slice(1), 16);
      return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
    },
    mixColor({ r, g, b }, amount) {
      const target = amount >= 0 ? 255 : 0;
      const ratio = Math.abs(amount);
      const channel = (value) => Math.round(value + (target - value) * ratio).toString(16).padStart(2, '0');
      return `#${channel(r)}${channel(g)}${channel(b)}`;
    }
  };

  window.Petals = Petals;
})();
