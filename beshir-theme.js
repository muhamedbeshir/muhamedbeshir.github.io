/* Beshir theme layer — one file, loaded with `defer` from index.html and en/index.html.
 *
 * This is a patch on top of a prebuilt Next.js bundle. If the bundle is ever
 * regenerated, these are the ONLY things it relies on — check them first:
 *
 *   DOM hooks (selectors / events)
 *   ------------------------------
 *   window event  "beshir:folder"   dispatched by _next/static/immutable/chunks/201ts4f0eubt2.js
 *                                   detail = { title, meta, files:[{name, meta, image, href}] }
 *                                   (files are stored top-sheet LAST, hence the reverse())
 *   html[dir]                       "rtl" on /, "ltr" on /en — CSS flips the progress bar
 *   location.pathname               /^\/en(\/|$)/ decides the UI language of the popup
 *
 *   Elements this file creates (styled in beshir-theme.css)
 *   -------------------------------------------------------
 *   .bt-progress   scroll progress bar         (aria-hidden)
 *   .bt-halo       cursor glow, fine pointers   (aria-hidden)
 *   .bp-overlay    folder popup (role=dialog)
 *
 *   Removed: the WebGL "liquid metal" hero shader and its `.forge-stage`
 *   dependency. It was hidden by CSS anyway. Source kept in
 *   _backup_bone/bt-shader-mount.js.txt.
 */
(function () {
  'use strict';

  var EN = /^\/en(\/|$)/.test(location.pathname);
  var reduceMQ = matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- scroll progress ---------- */
  function initProgress() {
    var bar = document.createElement('div');
    bar.className = 'bt-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.documentElement.appendChild(bar);
    var ticking = false;
    function paint() {
      ticking = false;
      var h = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')';
    }
    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(paint); }
    }
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll, { passive: true });
    paint();
  }

  /* ---------- cursor halo (desktop, no reduced-motion) ----------
   * The rAF loop only runs while the halo is still catching up to the pointer.
   * It stops itself once settled (idle mouse) and when the tab is hidden, and
   * is restarted by the next pointermove / when the tab becomes visible. */
  function initHalo() {
    if (!matchMedia('(hover:hover) and (pointer:fine)').matches || reduceMQ.matches) return;
    var halo = document.createElement('div');
    halo.className = 'bt-halo';
    halo.setAttribute('aria-hidden', 'true');
    document.documentElement.appendChild(halo);

    var hx = innerWidth / 2, hy = innerHeight / 2, tx = hx, ty = hy, raf = 0;
    function loop() {
      raf = 0;
      if (document.hidden) return;
      hx += (tx - hx) * 0.14; hy += (ty - hy) * 0.14;
      halo.style.transform = 'translate3d(' + (hx - 160) + 'px,' + (hy - 160) + 'px,0)';
      if (Math.abs(tx - hx) > 0.2 || Math.abs(ty - hy) > 0.2) raf = requestAnimationFrame(loop);
    }
    function wake() { if (!raf && !document.hidden) raf = requestAnimationFrame(loop); }

    addEventListener('pointermove', function (e) {
      tx = e.clientX; ty = e.clientY; halo.style.opacity = 1; wake();
    }, { passive: true });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { if (raf) cancelAnimationFrame(raf); raf = 0; } else wake();
    });
    document.documentElement.addEventListener('mouseleave', function () { halo.style.opacity = 0; });
    document.addEventListener('pointerover', function (e) {
      halo.classList.toggle('bt-halo-link', !!(e.target.closest && e.target.closest('a,button')));
    });
    reduceMQ.addEventListener && reduceMQ.addEventListener('change', function () {
      if (reduceMQ.matches) halo.remove();
    });
  }

  /* ---------- folder popup ---------- */
  var overlay = null, lastFocus = null;
  var T = EN
    ? { close: 'Close', newTab: ' (opens in a new tab)', arrow: '↗' }
    : { close: 'إغلاق', newTab: ' (يفتح في تبويب جديد)', arrow: '↖' };

  function esc(t) { var d = document.createElement('div'); d.textContent = t == null ? '' : t; return d.innerHTML; }
  function attr(t) { return esc(t).replace(/"/g, '&quot;'); }

  function closePopup() {
    if (!overlay) return;
    var o = overlay; overlay = null;
    o.classList.remove('bp-in');
    document.removeEventListener('keydown', onKey, true);
    document.documentElement.style.overflow = '';
    setTimeout(function () { o.remove(); }, reduceMQ.matches ? 0 : 260);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); closePopup(); return; }
    if (e.key === 'Tab' && overlay) {
      var f = overlay.querySelectorAll('a,button');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  function openPopup(d) {
    if (overlay) closePopup();
    lastFocus = document.activeElement;
    var files = (d.files || []).slice().reverse();
    var o = document.createElement('div');
    o.className = 'bp-overlay';
    o.dir = EN ? 'ltr' : 'rtl';

    var cards = files.map(function (f, i) {
      var tag = f.href ? 'a' : 'div';
      var attrs = f.href
        ? ' href="' + attr(f.href) + '" target="_blank" rel="noopener noreferrer"'
        : '';
      return '<' + tag + ' class="bp-card"' + attrs + ' style="animation-delay:' + (80 + i * 70) + 'ms">' +
        (f.image ? '<img src="' + attr(f.image) + '" alt="" loading="lazy" draggable="false">' : '') +
        '<span class="bp-info"><span><span class="bp-name" style="display:block">' + esc(f.name) + '</span>' +
        (f.meta ? '<span class="bp-sub" style="display:block">' + esc(f.meta) + '</span>' : '') +
        (f.href ? '<span class="bp-sr">' + T.newTab + '</span>' : '') +
        '</span><span class="bp-go" aria-hidden="true">' + T.arrow + '</span></span></' + tag + '>';
    }).join('');

    o.innerHTML =
      '<div class="bp-dialog" role="dialog" aria-modal="true" aria-labelledby="bp-title">' +
      '<div class="bp-head"><div><h3 class="bp-title" id="bp-title">' + esc(d.title) + '</h3>' +
      (d.meta ? '<p class="bp-meta">' + esc(d.meta) + '</p>' : '') + '</div>' +
      '<button type="button" class="bp-close" aria-label="' + T.close + '"><span aria-hidden="true">✕</span></button></div>' +
      '<div class="bp-grid">' + cards + '</div></div>';

    o.addEventListener('mousedown', function (e) { if (e.target === o) closePopup(); });
    o.querySelector('.bp-close').addEventListener('click', closePopup);
    document.body.appendChild(o);
    overlay = o;
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey, true);
    requestAnimationFrame(function () { o.classList.add('bp-in'); o.querySelector('.bp-close').focus(); });
  }

  /* The popup listener is registered immediately (no delay) so an early click is never lost. */
  window.addEventListener('beshir:folder', function (ev) { openPopup(ev.detail || {}); });


  /* ---------- CV section (content from Mohamed_Beshir_CV_FullStack.pdf) ----------
   * Injected before #why-wait after load, so SSR/hydration markup is untouched. */
  var CV = {
    ar: {
      eyebrow: 'السيرة المهنية', title: 'محمد بشير — Full Stack Software Engineer',
      lead: 'أكتر من سنتين في بناء تطبيقات ويب قابلة للتوسع، من الفكرة للإطلاق. SaaS وواجهات RESTful وأنظمة مؤسسية بـ Laravel وDjango وFastAPI وReact وFlutter، مع تركيز على كود نضيف وتسليم موثوق.',
      cv: 'حمّل السيرة الذاتية (PDF)', li: 'LinkedIn',
      stats: [['2+', 'سنين خبرة'], ['4', 'شركات'], ['6', 'مشاريع مختارة'], ['PostgreSQL', 'SQL Server · MySQL']],
      skillsT: 'المهارات', expT: 'الخبرة', projT: 'مشاريع مختارة', eduT: 'التعليم'
    },
    en: {
      eyebrow: 'Résumé', title: 'Mohamed Beshir — Full Stack Software Engineer',
      lead: '2+ years building scalable web applications from concept to deployment: SaaS platforms, RESTful APIs and enterprise systems with Laravel, Django, FastAPI, React and Flutter, focused on clean code and reliable delivery.',
      cv: 'Download CV (PDF)', li: 'LinkedIn',
      stats: [['2+', 'Years of experience'], ['4', 'Companies'], ['6', 'Selected projects'], ['PostgreSQL', 'SQL Server · MySQL']],
      skillsT: 'Skills', expT: 'Experience', projT: 'Selected projects', eduT: 'Education'
    }
  };
  var SKILLS = [
    ['Backend', ['Laravel (PHP)', 'Django', 'FastAPI', 'Node.js', 'RESTful APIs', 'JWT auth']],
    ['Frontend', ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'RTL / i18n', 'Dashboards']],
    ['Mobile', ['Flutter']],
    ['Databases', ['PostgreSQL', 'SQL Server', 'MySQL']],
    ['Tools', ['Rust', 'AI agents', 'LLM pipelines', 'Payment gateways', 'Automated testing']]
  ];
  var JOBS = {
    en: [
      ['Mentora X', 'Jan 2026 – Present', 'Full Stack Software Engineer · Full-time, Remote', ['Built scalable enterprise apps with Python (Django) and React.', 'Designed RESTful APIs, business logic, authentication and database integrations on clean architecture.', 'Shipped analytics dashboards and multi-module enterprise features with cross-functional teams.']],
      ['ART Click', 'Mar 2025 – Jan 2026', 'Full Stack Developer · Full-time, Hybrid (KSA, UK, Egypt)', ['Full-stack web apps with Laravel on the backend.', 'Built and optimized APIs, databases and server-side logic.', 'Responsive UI components and better cross-device UX.']],
      ['Extend IT Solutions', 'Sep 2024 – Jan 2025', 'Full Stack Software Engineer · Part-time, Remote', ['Full systems: modern frontend plus Laravel APIs.', 'Secure APIs and optimized database operations.', 'Interactive dashboards and integrations.']],
      ['Smart Code', 'Jan 2024 – Aug 2024', 'Software Engineer · Full-time', ['Optimized enterprise-system performance and cut latency.', 'Introduced testing practices that raised code quality.', 'Delivered production features across teams.']]
    ],
    ar: [
      ['Mentora X', 'يناير 2026 – الآن', 'Full Stack Software Engineer · دوام كامل، عن بُعد', ['بناء تطبيقات مؤسسية قابلة للتوسع بـ Python (Django) وReact.', 'تصميم واجهات RESTful ومنطق العمل والمصادقة وتكامل قواعد البيانات بمعمارية نظيفة.', 'تسليم لوحات تحليلات وميزات متعددة الوحدات مع فرق متعددة التخصصات.']],
      ['ART Click', 'مارس 2025 – يناير 2026', 'Full Stack Developer · دوام كامل، هجين (السعودية، بريطانيا، مصر)', ['تطبيقات ويب متكاملة بـ Laravel في الباكند.', 'بناء وتحسين الـ APIs وقواعد البيانات ومنطق السيرفر.', 'مكونات واجهة متجاوبة وتجربة أفضل على كل الأجهزة.']],
      ['Extend IT Solutions', 'سبتمبر 2024 – يناير 2025', 'Full Stack Software Engineer · دوام جزئي، عن بُعد', ['أنظمة كاملة بواجهات حديثة وAPIs بـ Laravel.', 'APIs آمنة وتحسين عمليات قاعدة البيانات.', 'لوحات تفاعلية وتكاملات.']],
      ['Smart Code', 'يناير 2024 – أغسطس 2024', 'Software Engineer · دوام كامل', ['تحسين أداء أنظمة مؤسسية وتقليل زمن الاستجابة.', 'تطبيق ممارسات اختبار رفعت جودة الكود.', 'تسليم ميزات للإنتاج بالتعاون بين الفرق.']]
    ]
  };
  var PROJ = {
    en: [
      ['SMPLQ', 'Live', 'E-commerce SaaS · theme editor + AI store builder', 'Multi-tenant SaaS for Egyptian merchants on Next.js, React and PostgreSQL (schema per tenant), Arabic-first RTL. Visual theme editor, AI store generation (Gemini), cash-on-delivery checkout and per-governorate shipping.'],
      ['UniFlow', 'Live', 'AI commitment-tracking platform', 'Captures commitments from chat, email and meetings and syncs them to Jira, Linear, Asana, ClickUp and Trello. Meeting transcription that handles Egyptian Arabic, Arabic and English together. Zod-validated LLM pipeline, PostgreSQL row-level security.'],
      ['Baya3', 'Live', 'POS solution (SaaS)', 'Inventory, sales, reports, promotions and loyalty. A secure Rust Windows launcher for offline use: encryption, hardware-based activation, auto backup, anti-debug.'],
      ['IGP (KSA)', 'App Store', 'Event booking platform', 'Laravel backend with Customer, Service Provider and Manager mobile apps plus an Admin Dashboard: auth, roles, bookings, payments, notifications, reporting.'],
      ['AYADINA', 'Google Play', 'Handmade crafts marketplace', 'Mobile marketplace with ads, advanced search, offline caching and real-time comments. JWT-secured REST API, secure file handling, admin dashboard.'],
      ['Spark Media', 'Live', 'Teachers platform', 'Courses, payments, secure video streaming and content protection. Owned backend architecture, APIs, database design and AI-agent integration.']
    ],
    ar: [
      ['SMPLQ', 'Live', 'منصة SaaS للتجارة الإلكترونية · محرر ثيمات + منشئ متاجر بالـ AI', 'منصة متعددة المستأجرين للتجار المصريين بـ Next.js وReact وPostgreSQL (schema لكل مستأجر) وواجهة عربية RTL. محرر ثيمات مرئي، إنشاء متجر بالذكاء الاصطناعي (Gemini)، دفع عند الاستلام، وشحن لكل محافظة.'],
      ['UniFlow', 'Live', 'منصة تتبع الالتزامات بالذكاء الاصطناعي', 'بتلقط الالتزامات من الشات والإيميل والاجتماعات وتزامنها مع Jira وLinear وAsana وClickUp وTrello. تفريغ اجتماعات بيفهم المصري والعربي والإنجليزي في نفس الكلام. بايبلاين LLM بمخرجات متحقق منها بـ Zod وأمان على مستوى الصف في PostgreSQL.'],
      ['Baya3', 'Live', 'نظام نقاط بيع (SaaS)', 'مخزون ومبيعات وتقارير وعروض وبرنامج ولاء. ولانشر ويندوز آمن بـ Rust للعمل أوفلاين: تشفير، تفعيل مرتبط بالجهاز، نسخ احتياطي تلقائي وحماية من الـ debugging.'],
      ['IGP (السعودية)', 'App Store', 'منصة حجز فعاليات', 'باكند Laravel مع تطبيقات للعميل ومقدم الخدمة والمدير ولوحة تحكم: مصادقة وصلاحيات وحجوزات ومدفوعات وإشعارات وتقارير.'],
      ['AYADINA', 'Google Play', 'سوق للمشغولات اليدوية', 'تطبيق سوق بإعلانات وبحث متقدم وتخزين مؤقت للعمل أوفلاين وتعليقات لحظية. API بمصادقة JWT ومعالجة آمنة للملفات ولوحة تحكم.'],
      ['Spark Media', 'Live', 'منصة للمدرسين', 'كورسات ومدفوعات وبث فيديو آمن وحماية للمحتوى. مسؤول عن معمارية الباكند والـ APIs وتصميم قاعدة البيانات وتكامل وكلاء الـ AI.']
    ]
  };
  var EDU = {
    en: ['Benha University — Faculty of Computer and AI', 'Sep 2020 – Jul 2024', "Bachelor's degree in Computer Science. CGPA 3.2. Graduation project rated Excellent: Virtual Reality to support therapy for children with Cerebral Palsy."],
    ar: ['جامعة بنها — كلية الحاسبات والذكاء الاصطناعي', 'سبتمبر 2020 – يوليو 2024', 'بكالوريوس علوم الحاسب، معدل تراكمي 3.2. مشروع التخرج بتقدير ممتاز: استخدام الواقع الافتراضي (VR) لدعم علاج الأطفال المصابين بالشلل الدماغي.']
  };

  function initCV() {
    var anchor = document.getElementById('why-wait');
    if (!anchor || document.querySelector('.bt-cv')) return;
    var L = EN ? 'en' : 'ar', C = CV[L];
    function chips(a) { return a.map(function (c) { return '<span class="bt-chip">' + esc(c) + '</span>'; }).join(''); }
    var h = '<div class="bt-cv-inner">' +
      '<div class="bt-cv-head"><p class="bt-eyebrow">' + esc(C.eyebrow) + '</p><h2 id="bt-cv-title">' + esc(C.title) + '</h2>' +
      '<p class="bt-lead">' + esc(C.lead) + '</p><div class="bt-actions">' +
      '<a class="bt-btn bt-btn--primary" href="/cv/Mohamed_Beshir_CV.pdf" download>' + esc(C.cv) + '</a>' +
      '<a class="bt-btn bt-btn--ghost" href="https://linkedin.com/in/muhamed-b-antar" target="_blank" rel="noopener noreferrer">' + C.li + '<span class="bp-sr">' + T.newTab + '</span></a></div></div>' +
      '<div class="bt-stats">' + C.stats.map(function (s) { return '<div class="bt-stat"><b>' + esc(s[0]) + '</b><span>' + esc(s[1]) + '</span></div>'; }).join('') + '</div>' +
      '<div class="bt-block"><h3>' + C.skillsT + '</h3><div class="bt-skills">' + SKILLS.map(function (k) {
        return '<div class="bt-skill"><h4>' + k[0] + '</h4><div class="bt-chips">' + chips(k[1]) + '</div></div>';
      }).join('') + '</div></div>' +
      '<div class="bt-block"><h3>' + C.expT + '</h3><ol class="bt-timeline">' + JOBS[L].map(function (j) {
        return '<li class="bt-job"><div class="bt-job-top"><h4>' + esc(j[0]) + '</h4><time>' + esc(j[1]) + '</time></div><p class="bt-role">' + esc(j[2]) + '</p><ul>' +
          j[3].map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></li>';
      }).join('') + '</ol></div>' +
      '<div class="bt-block"><h3>' + C.projT + '</h3><div class="bt-projects">' + PROJ[L].map(function (p) {
        return '<article class="bt-card"><div class="bt-card-top"><h4>' + esc(p[0]) + '</h4><span class="bt-badge">' + esc(p[1]) + '</span></div><p class="bt-sub">' + esc(p[2]) + '</p><p>' + esc(p[3]) + '</p></article>';
      }).join('') + '</div></div>' +
      '<div class="bt-block"><h3>' + C.eduT + '</h3><div class="bt-edu"><h4>' + esc(EDU[L][0]) + '</h4><time>' + esc(EDU[L][1]) + '</time><p>' + esc(EDU[L][2]) + '</p></div></div>' +
      '</div>';
    var s = document.createElement('section');
    s.className = 'bt-cv';
    s.id = 'cv';
    s.dir = EN ? 'ltr' : 'rtl';
    s.setAttribute('aria-labelledby', 'bt-cv-title');
    s.innerHTML = h;
    anchor.parentNode.insertBefore(s, anchor);
    /* pinned GSAP sections measure themselves on resize */
    setTimeout(function () { dispatchEvent(new Event('resize')); }, 60);
  }

  /* Decorative effects can wait until the page is idle. */
  function startEffects() { initProgress(); initHalo(); initCV(); }
  function whenIdle() {
    if ('requestIdleCallback' in window) requestIdleCallback(startEffects, { timeout: 2000 });
    else setTimeout(startEffects, 300);
  }
  if (document.readyState === 'complete') whenIdle(); else addEventListener('load', whenIdle);
})();
