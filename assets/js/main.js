/**
 * Transportes 4GR S.A. de C.V. — Interactive UI & Animations Controller
 * Lightweight, dependency-free ES Module following modern web best practices.
 */

const WHATSAPP_NUMBER = "528132667203";
const CORPORATE_EMAIL = "direccion@4gr.mx";

const FLEET_UNITS = {
  rabon: {
    code: "01",
    name: "Unidad Rabón",
    tag: "ESPECIFICACIÓN 01 · DISTRIBUCIÓN REGIONAL Y NACIONAL",
    description:
      "Unidad de eje sencillo ideal para distribución comercial e industrial de volumen medio. Combina gran capacidad de carga con excelente maniobrabilidad en parques industriales y centros de distribución.",
    capacity: "8 a 10 Toneladas",
    dimensions: "Caja de 7.0 a 8.5 metros",
    modality: "Caja Seca / Refrigerada / Plataforma",
    capacityPct: "68%",
    selectValue: "Rabón",
    svgType: "rabon"
  },
  trailer53: {
    code: "02",
    name: "Tráiler con Caja de 53 Pies",
    tag: "ESPECIFICACIÓN 02 · ALTO VOLUMEN Y LARGO ALCANCE",
    description:
      "Nuestra solución de máxima capacidad diseñada para abastecer grandes cadenas comerciales e industrias líderes en rutas interestatales de largo recorrido con rastreo satelital continuo.",
    capacity: "Hasta 28 – 30 Toneladas",
    dimensions: "Caja de 53 pies (16.15 m)",
    modality: "Caja Seca 53' / Refrigerada 53'",
    capacityPct: "100%",
    selectValue: "Tráiler con Caja de 53 pies",
    svgType: "trailer53"
  },
  torton: {
    code: "03",
    name: "Unidad Torton",
    tag: "ESPECIFICACIÓN 03 · CARGA PESADA CONFIABLE",
    description:
      "Camión rabón reforzado con doble eje trasero (tándem) para cargas de alto tonelaje que requieren estabilidad superior en carretera y acceso directo a plantas de manufactura.",
    capacity: "14 a 17 Toneladas",
    dimensions: "Caja de 7.5 a 9.0 metros",
    modality: "Carga Seca / Refrigerada / Plataforma",
    capacityPct: "84%",
    selectValue: "Torton",
    svgType: "torton"
  },
  refrigerados: {
    code: "04",
    name: "Unidades Refrigeradas y Secas",
    tag: "ESPECIFICACIÓN 04 · CONTROL TÉRMICO Y CAJA CERRADA",
    description:
      "Equipos con aislamiento térmico y sistema de refrigeración para productos perecederos, alimentos o insumos sensibles, así como cajas secas herméticas para mercancía general.",
    capacity: "3.5 Ton hasta Caja de 53'",
    dimensions: "Multiformato según carga",
    modality: "Temperatura Controlada y Carga Seca",
    capacityPct: "92%",
    selectValue: "Refrigerado / Caja Seca",
    svgType: "refrigerados"
  },
  unidad35: {
    code: "05",
    name: "Unidades 3.5 Toneladas Seca",
    tag: "ESPECIFICACIÓN 05 · RESPUESTA ÁGIL Y ENTREGAS DEDICADAS",
    description:
      "Unidades ligeras de respuesta inmediata para envíos urgentes, rutas dedicadas y entregas directas en zonas urbanas o industriales con restricción para unidades pesadas.",
    capacity: "Hasta 3.5 Toneladas",
    dimensions: "Caja Seca de 4.0 a 5.0 metros",
    modality: "Carga Seca Cerrada / Express",
    capacityPct: "45%",
    selectValue: "Unidad 3.5 Seca",
    svgType: "unidad35"
  }
};

const COVERAGE_DESTINATIONS = {
  coahuila: {
    id: "coahuila",
    number: "01",
    title: "Corredor Apodaca – Coahuila",
    summary: "Salidas diarias hacia Saltillo, Ramos Arizpe, Monclova y Torreón. Unidades 3.5, Rabón, Torton y Tráiler 53'.",
    routes: ["route-coahuila"],
    destinationSelect: "Coahuila"
  },
  slp: {
    id: "slp",
    number: "02",
    title: "Corredor Apodaca – San Luis Potosí",
    summary: "Conexión directa con el clúster industrial y automotriz de San Luis Potosí con monitoreo satelital 24/7.",
    routes: ["route-slp"],
    destinationSelect: "San Luis Potosí"
  },
  queretaro: {
    id: "queretaro",
    number: "03",
    title: "Corredor Apodaca – Querétaro",
    summary: "Ruta estratégica hacia parques industriales del Bajío y Querétaro con reporte diario de ubicación vía e-mail.",
    routes: ["route-queretaro"],
    destinationSelect: "Querétaro"
  },
  nacional: {
    id: "nacional",
    number: "04",
    title: "Cobertura Nacional · Toda la República Mexicana",
    summary: "Conseguimos y posicionamos la unidad que necesitas en cualquier parte de México (Centro, Occidente, Norte y Sureste) con servicio 24/7.",
    routes: ["route-coahuila", "route-slp", "route-queretaro", "route-centro", "route-occidente", "route-norte"],
    destinationSelect: "Otro Destino Nacional"
  }
};

function renderTruckBlueprintSVG(svgType) {
  // Technical vector blueprint specific to each truck configuration
  const roadLine = `
    <line x1="10" y1="132" x2="430" y2="132" stroke="#475569" stroke-width="2" />
    <line x1="10" y1="138" x2="430" y2="138" stroke="#60a5fa" stroke-width="2" class="road-dash-line" />
  `;

  const renderWheel = (cx) => `
    <g class="wheel-spin" style="transform-origin: ${cx}px 116px;">
      <circle cx="${cx}" cy="116" r="14" fill="#0f172a" stroke="#93c5fd" stroke-width="3" />
      <circle cx="${cx}" cy="116" r="5" fill="#e6333f" />
      <line x1="${cx - 10}" y1="116" x2="${cx + 10}" y2="116" stroke="#cbd5e1" stroke-width="1.5" />
      <line x1="${cx}" y1="106" x2="${cx}" y2="126" stroke="#cbd5e1" stroke-width="1.5" />
    </g>
  `;

  if (svgType === "trailer53") {
    return `
      <svg class="blueprint-svg" viewBox="0 0 440 148" role="img" aria-label="Esquema técnico de Tráiler con Caja de 53 pies">
        <title>Esquema técnico de Tráiler con Caja de 53 pies</title>
        ${roadLine}
        <!-- Dimension Line -->
        <line x1="36" y1="22" x2="296" y2="22" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="4 3" />
        <text x="166" y="16" fill="#93c5fd" font-size="10" font-weight="700" text-anchor="middle">CAJA DE 53 PIES (GRAN VOLUMEN)</text>
        <!-- 53ft Box -->
        <rect x="36" y="30" width="260" height="72" rx="4" fill="#1e3a8a" stroke="#93c5fd" stroke-width="2" />
        <line x1="100" y1="30" x2="100" y2="102" stroke="rgba(147,197,253,0.3)" stroke-width="1" />
        <line x1="165" y1="30" x2="165" y2="102" stroke="rgba(147,197,253,0.3)" stroke-width="1" />
        <line x1="230" y1="30" x2="230" y2="102" stroke="rgba(147,197,253,0.3)" stroke-width="1" />
        <rect x="36" y="92" width="260" height="6" fill="#e6333f" />
        <text x="166" y="70" fill="#ffffff" font-size="14" font-weight="800" text-anchor="middle" letter-spacing="1">TRANSPORTES 4GR · 53'</text>
        <!-- Tractor Cab -->
        <path d="M302 42 L342 42 L364 68 L394 74 L394 104 L302 104 Z" fill="#1b56b3" stroke="#93c5fd" stroke-width="2" />
        <polygon points="340,48 358,68 340,68" fill="#bae6fd" />
        ${renderWheel(66)}
        ${renderWheel(98)}
        ${renderWheel(284)}
        ${renderWheel(316)}
        ${renderWheel(374)}
      </svg>
    `;
  }

  if (svgType === "torton") {
    return `
      <svg class="blueprint-svg" viewBox="0 0 440 148" role="img" aria-label="Esquema técnico de Unidad Torton de doble eje">
        <title>Esquema técnico de Unidad Torton de doble eje</title>
        ${roadLine}
        <line x1="68" y1="22" x2="278" y2="22" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="4 3" />
        <text x="173" y="16" fill="#93c5fd" font-size="10" font-weight="700" text-anchor="middle">TORTON · DOBLE EJE TRASERO (14–17 TON)</text>
        <rect x="68" y="32" width="210" height="70" rx="4" fill="#1e3a8a" stroke="#93c5fd" stroke-width="2" />
        <rect x="68" y="92" width="210" height="6" fill="#e6333f" />
        <text x="173" y="70" fill="#ffffff" font-size="14" font-weight="800" text-anchor="middle">TORTON 4GR</text>
        <path d="M282 48 L322 48 L344 70 L372 75 L372 104 L282 104 Z" fill="#1b56b3" stroke="#93c5fd" stroke-width="2" />
        <polygon points="318,54 338,70 318,70" fill="#bae6fd" />
        ${renderWheel(112)}
        ${renderWheel(146)}
        ${renderWheel(348)}
      </svg>
    `;
  }

  if (svgType === "refrigerados") {
    return `
      <svg class="blueprint-svg" viewBox="0 0 440 148" role="img" aria-label="Esquema técnico de Unidad Refrigerada y Caja Seca">
        <title>Esquema técnico de Unidad Refrigerada y Caja Seca</title>
        ${roadLine}
        <text x="175" y="16" fill="#93c5fd" font-size="10" font-weight="700" text-anchor="middle">CONTROL TÉRMICO · REFRIGERADOS Y SECOS</text>
        <!-- Thermo unit on front of box -->
        <rect x="276" y="36" width="14" height="28" rx="2" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5" />
        <rect x="60" y="30" width="216" height="72" rx="4" fill="#0f2952" stroke="#38bdf8" stroke-width="2" />
        <rect x="60" y="92" width="216" height="6" fill="#38bdf8" />
        <!-- Snowflake / Thermal emblem -->
        <circle cx="110" cy="64" r="16" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="1.5" />
        <line x1="110" y1="52" x2="110" y2="76" stroke="#7dd3fc" stroke-width="2" />
        <line x1="98" y1="64" x2="122" y2="64" stroke="#7dd3fc" stroke-width="2" />
        <text x="188" y="69" fill="#ffffff" font-size="13" font-weight="800" text-anchor="middle">THERMO &amp; SECO 4GR</text>
        <path d="M292 46 L330 46 L352 70 L380 75 L380 104 L292 104 Z" fill="#1b56b3" stroke="#93c5fd" stroke-width="2" />
        <polygon points="326,52 346,70 326,70" fill="#bae6fd" />
        ${renderWheel(102)}
        ${renderWheel(136)}
        ${renderWheel(356)}
      </svg>
    `;
  }

  if (svgType === "unidad35") {
    return `
      <svg class="blueprint-svg" viewBox="0 0 440 148" role="img" aria-label="Esquema técnico de Unidad 3.5 Toneladas Seca">
        <title>Esquema técnico de Unidad 3.5 Toneladas Seca</title>
        ${roadLine}
        <line x1="105" y1="26" x2="265" y2="26" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="4 3" />
        <text x="185" y="19" fill="#93c5fd" font-size="10" font-weight="700" text-anchor="middle">UNIDAD 3.5 TONELADAS SECA (ÁGIL)</text>
        <rect x="105" y="38" width="160" height="64" rx="4" fill="#1e3a8a" stroke="#93c5fd" stroke-width="2" />
        <rect x="105" y="92" width="160" height="6" fill="#e6333f" />
        <text x="185" y="72" fill="#ffffff" font-size="13" font-weight="800" text-anchor="middle">3.5 SECA · 4GR</text>
        <path d="M267 56 L305 56 L328 76 L354 80 L354 104 L267 104 Z" fill="#1b56b3" stroke="#93c5fd" stroke-width="2" />
        <polygon points="298,61 320,76 298,76" fill="#bae6fd" />
        ${renderWheel(148)}
        ${renderWheel(328)}
      </svg>
    `;
  }

  // Default: Rabón
  return `
    <svg class="blueprint-svg" viewBox="0 0 440 148" role="img" aria-label="Esquema técnico de Unidad Rabón">
      <title>Esquema técnico de Unidad Rabón</title>
      ${roadLine}
      <line x1="82" y1="22" x2="274" y2="22" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="4 3" />
      <text x="178" y="16" fill="#93c5fd" font-size="10" font-weight="700" text-anchor="middle">UNIDAD RABÓN · EJE SENCILLO (8–10 TON)</text>
      <rect x="82" y="32" width="192" height="70" rx="4" fill="#1e3a8a" stroke="#93c5fd" stroke-width="2" />
      <rect x="82" y="92" width="192" height="6" fill="#e6333f" />
      <text x="178" y="70" fill="#ffffff" font-size="14" font-weight="800" text-anchor="middle">RABÓN · 4GR</text>
      <path d="M278 48 L318 48 L340 70 L368 75 L368 104 L278 104 Z" fill="#1b56b3" stroke="#93c5fd" stroke-width="2" />
      <polygon points="314,54 334,70 314,70" fill="#bae6fd" />
      ${renderWheel(135)}
      ${renderWheel(342)}
    </svg>
  `;
}

function announcePolite(message) {
  const region = document.getElementById("live-announcer");
  if (region) {
    region.textContent = "";
    window.setTimeout(() => {
      region.textContent = message;
    }, 40);
  }
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("live-toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  announcePolite(message);
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3400);
}

function initHeaderAndNavigation() {
  const header = document.querySelector(".site-header");
  const menuBtn = document.getElementById("mobile-menu-toggle");
  const primaryNav = document.getElementById("primary-navigation");
  const scrollBar = document.querySelector(".scroll-route-bar");
  const supportsCssScrollTimeline = CSS.supports("animation-timeline: scroll()");

  const onScroll = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 16);
    }
    if (!supportsCssScrollTimeline && scrollBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
      scrollBar.style.transform = `scaleX(${progress})`;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (menuBtn && primaryNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && primaryNav.classList.contains("is-open")) {
        primaryNav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.focus();
      }
    });
  }
}

function initFleetVisualizer() {
  const tabs = document.querySelectorAll(".unit-tab[data-unit]");
  const tagEl = document.getElementById("unit-blueprint-tag");
  const svgStage = document.getElementById("unit-blueprint-svg-stage");
  const titleEl = document.getElementById("unit-details-title");
  const descEl = document.getElementById("unit-details-desc");
  const capEl = document.getElementById("unit-spec-capacity");
  const dimEl = document.getElementById("unit-spec-dimensions");
  const modEl = document.getElementById("unit-spec-modality");
  const meterFill = document.getElementById("unit-capacity-fill");
  const meterPct = document.getElementById("unit-capacity-pct");
  const requestUnitBtn = document.getElementById("btn-request-selected-unit");
  const unitSelectInput = document.getElementById("cotizar-unidad");

  let activeUnitKey = "rabon";

  const applyUnitSelection = (unitKey, announce = true) => {
    const unit = FLEET_UNITS[unitKey];
    if (!unit) return;
    activeUnitKey = unitKey;

    const updateDOM = () => {
      tabs.forEach((tab) => {
        const isSelected = tab.dataset.unit === unitKey;
        tab.setAttribute("aria-selected", String(isSelected));
      });

      if (tagEl) tagEl.textContent = unit.tag;
      if (svgStage) svgStage.innerHTML = renderTruckBlueprintSVG(unit.svgType);
      if (titleEl) titleEl.textContent = `${unit.code}. ${unit.name}`;
      if (descEl) descEl.textContent = unit.description;
      if (capEl) capEl.textContent = unit.capacity;
      if (dimEl) dimEl.textContent = unit.dimensions;
      if (modEl) modEl.textContent = unit.modality;
      if (meterFill) meterFill.style.setProperty("--capacity-pct", unit.capacityPct);
      if (meterPct) meterPct.textContent = unit.capacity;
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (document.startViewTransition && !prefersReducedMotion && announce) {
      document.startViewTransition(updateDOM);
    } else {
      updateDOM();
    }

    if (announce) {
      announcePolite(`Unidad seleccionada: ${unit.name}. Capacidad ${unit.capacity}.`);
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      applyUnitSelection(tab.dataset.unit, true);
    });
  });

  if (requestUnitBtn) {
    requestUnitBtn.addEventListener("click", () => {
      const unit = FLEET_UNITS[activeUnitKey];
      if (unit && unitSelectInput) {
        unitSelectInput.value = unit.selectValue;
      }
      const contactSection = document.getElementById("contacto");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
      if (unitSelectInput) {
        window.setTimeout(() => unitSelectInput.focus(), 450);
      }
      showToast(`Unidad "${unit ? unit.name : ""}" preseleccionada en su solicitud.`);
    });
  }

  applyUnitSelection("rabon", false);
}

function initCoverageMap() {
  const destButtons = document.querySelectorAll(".destination-card[data-corridor]");
  const routePaths = document.querySelectorAll(".map-route-path");
  const bannerTitle = document.getElementById("active-corridor-title");
  const bannerSummary = document.getElementById("active-corridor-summary");
  const quoteCorridorBtn = document.getElementById("btn-quote-corridor");
  const destSelect = document.getElementById("cotizar-destino");

  let currentCorridor = "nacional";

  const selectCorridor = (corridorKey, announce = true) => {
    const info = COVERAGE_DESTINATIONS[corridorKey];
    if (!info) return;
    currentCorridor = corridorKey;

    destButtons.forEach((btn) => {
      const active = btn.dataset.corridor === corridorKey;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    routePaths.forEach((path) => {
      const isRouteActive = info.routes.includes(path.id);
      path.classList.toggle("is-active", isRouteActive);
    });

    if (bannerTitle) bannerTitle.textContent = info.title;
    if (bannerSummary) bannerSummary.textContent = info.summary;

    if (announce) {
      announcePolite(`${info.title}: ${info.summary}`);
    }
  };

  destButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectCorridor(btn.dataset.corridor, true);
    });
  });

  if (quoteCorridorBtn) {
    quoteCorridorBtn.addEventListener("click", () => {
      const info = COVERAGE_DESTINATIONS[currentCorridor];
      if (info && destSelect) {
        destSelect.value = info.destinationSelect;
      }
      const contactSection = document.getElementById("contacto");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
      showToast(`Ruta hacia "${info ? info.destinationSelect : "México"}" seleccionada.`);
    });
  }

  selectCorridor("nacional", false);
}

function initScrollFallbackAndCounters() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsViewTimeline = CSS.supports("(animation-timeline: view()) and (animation-range: entry)");

  // Fallback for browsers that do not support CSS view() scroll-driven animations
  if (!supportsViewTimeline && !prefersReducedMotion) {
    const revealItems = document.querySelectorAll(".reveal-on-scroll");
    revealItems.forEach((el) => el.classList.add("reveal-fallback-init"));

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((el) => revealObserver.observe(el));
  }

  // Animated Counters in Metrics Bar
  const counters = document.querySelectorAll("[data-counter-target]");
  if (counters.length > 0 && !prefersReducedMotion) {
    const counterObserver = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          const target = Number(el.dataset.counterTarget || 0);
          const suffix = el.dataset.counterSuffix || "";
          const duration = 1200;
          const start = performance.now();

          const step = (now) => {
            const elapsed = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - elapsed, 3);
            const current = Math.round(target * eased);
            el.textContent = `${current}${suffix}`;
            if (elapsed < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  }

  // Subtle 3D Tilt on Philosophy Cards for fine pointer devices
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  if (isFinePointer && !prefersReducedMotion) {
    const tiltCards = document.querySelectorAll(".philosophy-card");
    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
      });
      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      });
    });
  }
}

function initContactAndQuoteActions() {
  const form = document.getElementById("quote-request-form");
  const btnSendEmail = document.getElementById("btn-submit-email");
  const copyButtons = document.querySelectorAll("[data-copy-text]");

  const getFormPayload = () => {
    const nombre = (document.getElementById("cotizar-nombre")?.value || "").trim() || "Cliente interesado";
    const empresa = (document.getElementById("cotizar-empresa")?.value || "").trim() || "Por confirmar";
    const telefono = (document.getElementById("cotizar-telefono")?.value || "").trim() || "Por confirmar";
    const origen = (document.getElementById("cotizar-origen")?.value || "").trim() || "Apodaca / Nuevo León";
    const destino = (document.getElementById("cotizar-destino")?.value || "").trim() || "Destino Nacional";
    const unidad = (document.getElementById("cotizar-unidad")?.value || "").trim() || "Rabón / Tráiler 53'";
    const detalles = (document.getElementById("cotizar-detalles")?.value || "").trim() || "Solicitud de cotización de flete terrestre.";

    return { nombre, empresa, telefono, origen, destino, unidad, detalles };
  };

  if (form) {
    // Primary submit sends via WhatsApp
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = getFormPayload();
      const text = [
        "Hola *TRANSPORTES 4GR*, solicito una cotización de servicio logístico:",
        "",
        `• *Nombre:* ${data.nombre}`,
        `• *Empresa:* ${data.empresa}`,
        `• *Teléfono:* ${data.telefono}`,
        `• *Origen:* ${data.origen}`,
        `• *Destino:* ${data.destino}`,
        `• *Unidad requerida:* ${data.unidad}`,
        `• *Detalles de carga:* ${data.detalles}`
      ].join("\n");

      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
      showToast("Abriendo WhatsApp con los datos de su cotización...");
    });
  }

  if (btnSendEmail) {
    btnSendEmail.addEventListener("click", () => {
      const data = getFormPayload();
      const subject = `Solicitud de Cotización Logística - ${data.empresa} (${data.origen} a ${data.destino})`;
      const body = [
        "Estimado equipo de TRANSPORTES 4GR S.A. DE C.V.,",
        "",
        "Por medio del presente correo solicito información y cotización para el siguiente servicio de transporte terrestre:",
        "",
        `- Nombre de contacto: ${data.nombre}`,
        `- Empresa: ${data.empresa}`,
        `- Teléfono de contacto: ${data.telefono}`,
        `- Ciudad / Estado de Origen: ${data.origen}`,
        `- Destino requerido: ${data.destino}`,
        `- Tipo de unidad / modalidad: ${data.unidad}`,
        `- Especificaciones de la carga: ${data.detalles}`,
        "",
        "Quedo atento a sus comentarios.",
        "Saludos cordiales."
      ].join("\r\n");

      const mailtoUrl = `mailto:${CORPORATE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      showToast("Abriendo cliente de correo hacia direccion@4gr.mx...");
    });
  }

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const textToCopy = btn.dataset.copyText;
      if (!textToCopy) return;
      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copiado al portapapeles: ${textToCopy}`);
      } catch {
        showToast(`Dato de contacto: ${textToCopy}`);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderAndNavigation();
  initFleetVisualizer();
  initCoverageMap();
  initScrollFallbackAndCounters();
  initContactAndQuoteActions();
});
