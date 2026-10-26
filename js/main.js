/**
 * Experiencia romántica para Andreína.
 * Personaliza el objeto CONFIG antes de publicar.
 */
(function () {
  "use strict";

  const CONFIG = {
    recipientName: "Andreína",
    age: 34,
    birthdayISO: "2026-11-04",
    birthdayDisplay: "4 DE NOVIEMBRE DE 2026",
    birthdayLong: "4 de noviembre de 2026",
    kicker: "UNA SORPRESA PARA TI",
    welcome: "Hay algo hermoso que preparé especialmente para ti",
    birthdayTitle: "Feliz cumpleaños, mi amor",
    /**
     * EJEMPLO — sustituye esta fecha por el inicio real de la relación (YYYY-MM-DD).
     * No publiques con el valor de ejemplo si no corresponde.
     */
    relationshipStart: "2023-01-15",
    relationshipStartIsExample: true,
    counterPhrase: "Cada segundo a tu lado es un regalo que agradezco",
    musicSrc: "assets/audio/cancion.mp3",
    unlockStorageKey: "andreina-sorpresa-desbloqueada",
    colors: {
      bg: "#070406",
      burgundy: "#5c1224",
      wine: "#8a1c33",
      rose: "#c9899a",
      dusty: "#d4a5b0",
      gold: "#c4a574",
    },
    welcomeParagraphs: [
      "Hay vidas que se sienten como una habitación iluminada apenas se abre la puerta. La tuya, Andreína, tiene esa claridad: una forma de estar en el mundo que vuelve más humano todo lo que te rodea.",
      "Hoy cumples 34 años y no celebro un número: celebro la mujer que eres cuando nadie mira y la que eres cuando eliges quedarte. Celebro tu belleza, sí, pero sobre todo la inteligencia serena con la que sostienes los días, el humor que desarma, la ternura que no pide permiso.",
      "Compartir el tiempo contigo me ha enseñado a prestar atención. A los gestos pequeños. A la manera en que tu presencia ordena el ruido. Gracias por dejarme caminar a tu lado en esta fecha y en todas las que todavía no tienen nombre.",
    ],
    letter: {
      greeting: "Andreína, mi amor:",
      paragraphs: [
        "Si pudiera condensar este cumpleaños en una sola verdad, sería esta: estoy agradecido de que existas, y más agradecido aún de que tu existencia se cruce con la mía.",
        "A tus 34 años traes una madurez luminosa. No es prisa ni pose: es la calma de quien conoce su valor. Admiro cómo cuidas lo que amas, cómo piensas antes de herir, cómo conviertes lo cotidiano en un lugar al que apetece volver.",
        "Gracias por tu compañía. Por las conversaciones que se alargan sin darnos cuenta. Por la paciencia. Por la risa. Por el privilegio de conocerte de cerca.",
        "Deseo que este año te devuelva belleza en la misma medida en que la ofreces. Y deseo, con una fe tranquila, seguir construyendo recuerdos a tu lado: los simples y los grandes, los que todavía no sabemos nombrar.",
      ],
      signature: "Con todo mi amor",
    },
    /**
     * Recuerdos de ejemplo. Sustituye fecha, título, descripción e imagen
     * por acontecimientos reales antes de compartir la página.
     */
    timeline: [
      {
        isExample: true,
        date: "Fecha por definir",
        title: "El día en que comenzó nuestra historia",
        description: "Ejemplo editable: escribe aquí cómo empezó todo, con la fecha verdadera.",
        image: "",
      },
      {
        isExample: true,
        date: "Fecha por definir",
        title: "Nuestro primer recuerdo especial",
        description: "Ejemplo editable: un instante que todavía los hace sonreír.",
        image: "",
      },
      {
        isExample: true,
        date: "Fecha por definir",
        title: "Los momentos que nos hicieron más fuertes",
        description: "Ejemplo editable: aquello que los acercó cuando más importaba.",
        image: "",
      },
      {
        isExample: true,
        date: "Fecha por definir",
        title: "Cada pequeña aventura compartida",
        description: "Ejemplo editable: un viaje, una caminata, una cena, un secreto a medias.",
        image: "",
      },
      {
        isExample: true,
        date: "Fecha por definir",
        title: "Todos los sueños que todavía nos quedan por cumplir",
        description: "Ejemplo editable: lo que todavía quieren construir juntos.",
        image: "",
      },
    ],
    /**
     * Sustituye estos archivos en assets/images/ por fotografías reales.
     * Si un archivo no existe, se muestra placeholder-foto.svg.
     */
    gallery: [
      {
        src: "assets/images/IMG-20251213-WA0054.jpg",
        caption: "",
        alt: "Fotografía de nuestros recuerdos, 1",
      },
      {
        src: "assets/images/IMG-20260101-WA0030.jpg",
        caption: "",
        alt: "Fotografía de nuestros recuerdos, 2",
      },
      {
        src: "assets/images/IMG-20260101-WA0031.jpg",
        caption: "",
        alt: "Fotografía de nuestros recuerdos, 3",
      },
      {
        src: "assets/images/foto-4.jpg",
        caption: "Añade foto-4.jpg en assets/images y escribe su descripción.",
        alt: "Fotografía personal 4. Sustituye foto-4.jpg",
      },
      {
        src: "assets/images/foto-5.jpg",
        caption: "Añade foto-5.jpg en assets/images y escribe su descripción.",
        alt: "Fotografía personal 5. Sustituye foto-5.jpg",
      },
      {
        src: "assets/images/foto-6.jpg",
        caption: "Añade foto-6.jpg en assets/images y escribe su descripción.",
        alt: "Fotografía personal 6. Sustituye foto-6.jpg",
      },
    ],
    placeholderImage: "assets/images/placeholder-foto.svg",
    holdDurationMs: 2500,
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const CIRCUMFERENCE = 2 * Math.PI * 54;

  function applyColors() {
    const root = document.documentElement;
    root.style.setProperty("--bg", CONFIG.colors.bg);
    root.style.setProperty("--burgundy", CONFIG.colors.burgundy);
    root.style.setProperty("--wine", CONFIG.colors.wine);
    root.style.setProperty("--rose", CONFIG.colors.rose);
    root.style.setProperty("--dusty", CONFIG.colors.dusty);
    root.style.setProperty("--gold", CONFIG.colors.gold);
  }

  function bindText() {
    const map = {
      name: CONFIG.recipientName,
      kicker: CONFIG.kicker,
      welcome: CONFIG.welcome,
      birthdayTitle: CONFIG.birthdayTitle,
      birthdayDisplay: CONFIG.birthdayDisplay,
      birthdayLong: CONFIG.birthdayLong,
      counterPhrase: CONFIG.counterPhrase,
      letterSignature: CONFIG.letter.signature,
      age: String(CONFIG.age),
    };
    document.querySelectorAll("[data-bind]").forEach((el) => {
      const key = el.getAttribute("data-bind");
      if (map[key] != null) el.textContent = map[key];
    });
    document.title = `Una sorpresa para ${CONFIG.recipientName}`;
  }

  function renderWelcome() {
    const wrap = document.getElementById("welcome-prose");
    wrap.innerHTML = "";
    CONFIG.welcomeParagraphs.forEach((text, i) => {
      const p = document.createElement("p");
      p.className = "is-line";
      p.style.animationDelay = `${i * 0.18}s`;
      p.textContent = text;
      wrap.appendChild(p);
    });
  }

  /** Suma meses a una fecha sin desbordar (31 ene + 1 mes = 28/29 feb). */
  function addMonths(date, n) {
    const y = date.getFullYear();
    const m = date.getMonth() + n;
    const lastDay = new Date(y, m + 1, 0).getDate();
    return new Date(
      y,
      m,
      Math.min(date.getDate(), lastDay),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
  }

  /** Diferencia de calendario: años y meses completos, y el resto en d/h/m/s. */
  function calendarDiff(from, to) {
    let totalMonths = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
    let anchor = addMonths(from, totalMonths);
    if (anchor > to) {
      totalMonths -= 1;
      anchor = addMonths(from, totalMonths);
    }
    let rest = Math.floor((to - anchor) / 1000);
    const days = Math.floor(rest / 86400);
    rest %= 86400;
    const hours = Math.floor(rest / 3600);
    rest %= 3600;
    const minutes = Math.floor(rest / 60);
    const seconds = rest % 60;
    return {
      years: Math.floor(totalMonths / 12),
      months: totalMonths % 12,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function initCounter() {
    const start = new Date(`${CONFIG.relationshipStart}T00:00:00`);
    const note = document.getElementById("counter-note");
    if (Number.isNaN(start.getTime())) {
      note.hidden = false;
      note.textContent = "Configura relationshipStart en js/main.js con una fecha válida (YYYY-MM-DD).";
      return;
    }
    if (CONFIG.relationshipStartIsExample) {
      note.hidden = false;
      note.textContent = "Mostrando una fecha de ejemplo. Sustituye relationshipStart en js/main.js antes de publicar.";
    }

    const nodes = {
      years: document.querySelector('[data-unit="years"]'),
      months: document.querySelector('[data-unit="months"]'),
      days: document.querySelector('[data-unit="days"]'),
      hours: document.querySelector('[data-unit="hours"]'),
      minutes: document.querySelector('[data-unit="minutes"]'),
      seconds: document.querySelector('[data-unit="seconds"]'),
    };

    function setValue(node, value) {
      const next = String(value);
      if (node.textContent === next) return;
      node.textContent = next;
      if (reduceMotion) return;
      node.classList.remove("is-tick");
      void node.offsetWidth;
      node.classList.add("is-tick");
    }

    function tick() {
      const now = new Date();
      const from = now >= start ? start : now;
      const to = now >= start ? now : start;
      const diff = calendarDiff(from, to);
      setValue(nodes.years, diff.years);
      setValue(nodes.months, diff.months);
      setValue(nodes.days, diff.days);
      setValue(nodes.hours, pad(diff.hours));
      setValue(nodes.minutes, pad(diff.minutes));
      setValue(nodes.seconds, pad(diff.seconds));
    }

    tick();
    window.setInterval(tick, 1000);
  }

  function initTimeline() {
    const list = document.getElementById("timeline");
    list.innerHTML = "";
    CONFIG.timeline.forEach((item) => {
      const li = document.createElement("li");
      li.className = "timeline__item";
      const card = document.createElement("article");
      card.className = "timeline__card";
      if (item.isExample) {
        const tag = document.createElement("span");
        tag.className = "example-tag";
        tag.textContent = "Ejemplo editable";
        card.appendChild(tag);
      }
      const date = document.createElement("p");
      date.className = "timeline__date";
      date.textContent = item.date;
      const title = document.createElement("h3");
      title.textContent = item.title;
      const desc = document.createElement("p");
      desc.textContent = item.description;
      card.append(date, title, desc);
      if (item.image) {
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;
        img.loading = "lazy";
        img.addEventListener("error", () => img.remove());
        card.appendChild(img);
      }
      li.appendChild(card);
      list.appendChild(li);
    });
  }

  function initGallery() {
    const root = document.getElementById("gallery");
    const dialog = document.getElementById("lightbox");
    const dialogImg = document.getElementById("lightbox-image");
    const dialogCap = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("lightbox-close");
    root.innerHTML = "";
    let lastTrigger = null;

    CONFIG.gallery.forEach((photo) => {
      const fig = document.createElement("figure");
      fig.className = "gallery__item";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gallery__open";
      btn.setAttribute("aria-label", `Ampliar: ${photo.alt}`);
      const frame = document.createElement("div");
      frame.className = "gallery__frame";
      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.alt;
      img.loading = "lazy";
      img.decoding = "async";
      // Si la foto no existe se usa el marcador (una sola vez, sin bucles).
      img.addEventListener(
        "error",
        () => {
          img.src = CONFIG.placeholderImage;
        },
        { once: true }
      );
      frame.appendChild(img);
      btn.appendChild(frame);
      fig.appendChild(btn);
      if (photo.caption) {
        const cap = document.createElement("figcaption");
        cap.textContent = photo.caption;
        fig.appendChild(cap);
      }
      btn.addEventListener("click", () => {
        lastTrigger = btn;
        dialogImg.src = img.src;
        dialogImg.alt = photo.alt;
        dialogCap.textContent = photo.caption;
        if (typeof dialog.showModal === "function") dialog.showModal();
        closeBtn.focus();
      });
      root.appendChild(fig);
    });

    dialog.addEventListener("close", () => {
      if (lastTrigger) lastTrigger.focus();
    });

    closeBtn.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dialog.open) dialog.close();
    });
  }

  function initLetter() {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("love-letter");
    const body = document.getElementById("letter-body");
    const to = document.getElementById("letter-to");
    const closeBtn = document.getElementById("letter-close");
    to.textContent = CONFIG.letter.greeting;
    body.innerHTML = "";
    CONFIG.letter.paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      body.appendChild(p);
    });

    function openLetter() {
      envelope.classList.add("is-open");
      envelope.setAttribute("aria-expanded", "true");
      envelope.querySelector(".envelope__label").textContent = "Carta abierta";
      window.setTimeout(() => {
        letter.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      }, 450);
      letter.hidden = false;
      letter.style.animation = "none";
      void letter.offsetWidth;
      letter.style.animation = "";
    }

    function closeLetter() {
      envelope.classList.remove("is-open");
      envelope.querySelector(".envelope__label").textContent = "Abrir carta";
      envelope.setAttribute("aria-expanded", "false");
      letter.hidden = true;
      envelope.focus();
    }

    envelope.addEventListener("click", () => {
      if (letter.hidden) openLetter();
    });
    closeBtn.addEventListener("click", closeLetter);
  }

  function initMusic() {
    const audio = document.getElementById("bg-audio");
    const toggle = document.getElementById("music-toggle");
    const status = document.getElementById("music-status");
    const volume = document.getElementById("music-volume");
    const player = document.getElementById("music-player");
    const prompt = document.getElementById("music-prompt");
    const startBtn = document.getElementById("music-start");
    const dismissBtn = document.getElementById("music-dismiss");

    audio.src = CONFIG.musicSrc;
    audio.volume = Number(volume.value);

    function setStatus(text, playing) {
      status.textContent = text;
      player.classList.toggle("is-playing", playing);
      toggle.setAttribute("aria-pressed", playing ? "true" : "false");
      toggle.setAttribute("aria-label", playing ? "Pausar música" : "Reproducir música");
    }

    async function play() {
      try {
        await audio.play();
        setStatus("Sonando para ti", true);
        prompt.hidden = true;
      } catch (error) {
        setStatus(audio.error ? "La canción no está disponible" : "Toca para reproducir", false);
      }
    }

    function pause() {
      audio.pause();
      setStatus("Música en pausa", false);
    }

    toggle.addEventListener("click", () => {
      if (audio.paused) play();
      else pause();
    });
    volume.addEventListener("input", () => {
      audio.volume = Number(volume.value);
    });
    audio.addEventListener("error", () => {
      setStatus("La canción no está disponible", false);
    });
    startBtn.addEventListener("click", play);
    dismissBtn.addEventListener("click", () => {
      prompt.hidden = true;
    });

    return {
      offerPrompt() {
        prompt.hidden = false;
      },
    };
  }

  function readUnlockFlag() {
    try {
      return window.localStorage.getItem(CONFIG.unlockStorageKey) === "1";
    } catch (error) {
      return false;
    }
  }

  function writeUnlockFlag() {
    try {
      window.localStorage.setItem(CONFIG.unlockStorageKey, "1");
    } catch (error) {
      /* almacenamiento opcional */
    }
  }

  function initScanner(music) {
    const button = document.getElementById("scanner");
    const status = document.getElementById("scanner-status");
    const circle = document.getElementById("scanner-progress-circle");
    const note = document.getElementById("unlock-note");
    let raf = 0;
    let start = 0;
    let holding = false;
    let completed = false;

    circle.style.strokeDasharray = String(CIRCUMFERENCE);
    circle.style.strokeDashoffset = String(CIRCUMFERENCE);

    function setProgress(t, easing) {
      const clamped = Math.max(0, Math.min(1, t));
      circle.style.transition = easing ? "stroke-dashoffset 0.45s ease" : "none";
      circle.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - clamped));
      button.style.setProperty("--hold", String(clamped));
    }

    function markUnlocked(fromStorage) {
      completed = true;
      holding = false;
      setProgress(1);
      button.classList.remove("is-holding");
      button.classList.add("is-complete");
      status.textContent = "Huella reconocida";
      note.hidden = false;
      note.classList.add("is-visible");
      document.body.classList.add("is-unlocked");
      button.setAttribute("aria-disabled", "true");
      if (fromStorage) return;
      writeUnlockFlag();
      window.setTimeout(() => {
        document.getElementById("cumple").scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
        });
        document.getElementById("welcome-prose").classList.add("is-revealed");
        music.offerPrompt();
      }, reduceMotion ? 200 : 900);
    }

    function reset() {
      holding = false;
      window.cancelAnimationFrame(raf);
      button.classList.remove("is-holding");
      if (!completed) {
        setProgress(0, true);
        status.textContent = "Esperando tu huella";
      }
    }

    function complete() {
      if (completed) return;
      markUnlocked(false);
    }

    function frame(now) {
      if (!holding) return;
      const t = (now - start) / CONFIG.holdDurationMs;
      setProgress(t);
      if (t < 0.35) status.textContent = "Leyendo el pulso de tu historia...";
      else if (t < 0.75) status.textContent = "Reconociendo tu huella...";
      else status.textContent = "Casi...";
      if (t >= 1) complete();
      else raf = window.requestAnimationFrame(frame);
    }

    function begin(event) {
      if (completed || holding) return;
      if (event && event.pointerType === "mouse" && event.button !== 0) return;
      if (event) event.preventDefault();
      holding = true;
      start = performance.now();
      button.classList.add("is-holding");
      setProgress(0);
      if (event && event.pointerId != null) {
        try {
          button.setPointerCapture(event.pointerId);
        } catch (error) {
          /* algunos navegadores no lo necesitan */
        }
      }
      raf = window.requestAnimationFrame(frame);
    }

    button.addEventListener("pointerdown", begin);
    button.addEventListener("pointerup", reset);
    button.addEventListener("pointercancel", reset);
    button.addEventListener("contextmenu", (event) => event.preventDefault());

    button.addEventListener("keydown", (event) => {
      if (event.code !== "Space" && event.code !== "Enter") return;
      event.preventDefault();
      if (!holding) begin();
    });
    button.addEventListener("keyup", (event) => {
      if (event.code !== "Space" && event.code !== "Enter") return;
      reset();
    });

    if (readUnlockFlag()) markUnlocked(true);
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          if (entry.target.id === "cumple") {
            document.getElementById("welcome-prose").classList.add("is-revealed");
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const items = document.querySelectorAll(".timeline__item");
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            itemObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.28 }
    );
    items.forEach((item) => itemObserver.observe(item));
  }

  function initProgressAndNav() {
    const bar = document.getElementById("reading-progress");
    const links = [...document.querySelectorAll(".section-nav a")];
    const sections = links.map((link) => document.querySelector(link.getAttribute("href")));

    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      bar.style.width = `${Math.min(100, ratio * 100)}%`;
      bar.setAttribute("aria-valuenow", String(Math.round(ratio * 100)));

      let current = sections[0];
      sections.forEach((section) => {
        if (section && section.getBoundingClientRect().top < window.innerHeight * 0.45) {
          current = section;
        }
      });
      links.forEach((link) => {
        const active = current && link.getAttribute("href") === `#${current.id}`;
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initPetals() {
    const layer = document.getElementById("petals");
    if (reduceMotion) return;

    function spawn(target, count, heartEvery) {
      for (let i = 0; i < count; i += 1) {
        const el = document.createElement("span");
        const isHeart = i % heartEvery === 0;
        el.className = isHeart ? "heart-float" : "petal";
        el.style.left = `${(i * 11 + 6) % 100}%`;
        el.style.setProperty("--size", `${10 + (i % 6) * 3}px`);
        el.style.setProperty("--duration", `${14 + (i % 8) * 2}s`);
        el.style.setProperty("--delay", `${-(i * 1.4)}s`);
        el.style.setProperty("--opacity", `${0.35 + (i % 4) * 0.1}`);
        el.style.setProperty("--rot", `${i * 24}deg`);
        el.style.setProperty("--drift", `${(i % 2 === 0 ? 1 : -1) * (20 + i * 3)}px`);
        if (isHeart) el.textContent = "\u2665";
        target.appendChild(el);
      }
    }

    spawn(layer, 14, 5);
    const finaleLayer = document.getElementById("finale-petals");
    if (finaleLayer) spawn(finaleLayer, 10, 3);

    function setPaused(paused) {
      const state = paused ? "paused" : "running";
      layer.style.animationPlayState = state;
      document.querySelectorAll(".petal, .heart-float").forEach((node) => {
        node.style.animationPlayState = state;
      });
    }

    document.addEventListener("visibilitychange", () => setPaused(document.hidden));
  }

  function initConfetti() {
    const canvas = document.getElementById("confetti");
    const finale = document.getElementById("cierre");
    let played = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played) {
            played = true;
            if (!reduceMotion) burst(canvas);
          }
        });
      },
      { threshold: 0.45 }
    );
    observer.observe(finale);
  }

  function burst(canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const pieces = [];
    const colors = [CONFIG.colors.gold, CONFIG.colors.rose, CONFIG.colors.wine, "#f4e6dc"];
    const duration = 4200;
    const start = performance.now();
    let raf = 0;
    let running = true;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();

    for (let i = 0; i < 90; i += 1) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 80,
        w: 5 + Math.random() * 6,
        h: 8 + Math.random() * 8,
        vx: -1.2 + Math.random() * 2.4,
        vy: 2 + Math.random() * 3.2,
        rot: Math.random() * Math.PI,
        vr: -0.1 + Math.random() * 0.2,
        color: colors[i % colors.length],
      });
    }

    function draw(now) {
      if (!running) return;
      const elapsed = now - start;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, 1 - elapsed / duration);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (elapsed < duration) raf = window.requestAnimationFrame(draw);
      else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.cancelAnimationFrame(raf);
        document.removeEventListener("visibilitychange", onVisibility);
      }
    }

    function onVisibility() {
      running = !document.hidden;
      if (running) raf = window.requestAnimationFrame(draw);
    }

    document.addEventListener("visibilitychange", onVisibility);
    raf = window.requestAnimationFrame(draw);
  }

  function initReplay() {
    document.getElementById("replay").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyColors();
    bindText();
    renderWelcome();
    initTimeline();
    initGallery();
    initLetter();
    const music = initMusic();
    initScanner(music);
    initCounter();
    initReveal();
    initProgressAndNav();
    initPetals();
    initConfetti();
    initReplay();
  });
})();
