(() => {
  const text = window.DEMO_TRANSLATIONS;
  let language = 'en';
  try { language = localStorage.getItem('portfolio-lang') || 'en'; } catch (_) {}
  if (!text[language]) language = 'en';
  const canvas = document.getElementById('unity-canvas');
  const overlay = document.getElementById('player-overlay');
  const progress = document.getElementById('load-progress');
  const status = document.getElementById('load-status');
  const retry = document.getElementById('retry');
  const fullscreen = document.getElementById('fullscreen');
  let state = location.protocol === 'file:' ? 'local' : 'loading';
  let instance = null;

  function translate() {
    document.documentElement.lang = language;
    document.title = text[language].title + ' — Sebastián Venegas';
    document.querySelectorAll('[data-i18n]').forEach(node => {
      node.textContent = text[language][node.dataset.i18n];
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      const active = button.dataset.language === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    canvas.setAttribute('aria-label', text[language].canvas);
    progress.setAttribute('aria-label', text[language].progress);
    status.textContent = text[language][state] || '';
  }

  function fail(error) {
    console.error('Unity demo:', error);
    state = 'error';
    overlay.hidden = false;
    progress.hidden = true;
    retry.hidden = false;
    fullscreen.disabled = true;
    translate();
  }

  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => {
      language = button.dataset.language;
      try { localStorage.setItem('portfolio-lang', language); } catch (_) {}
      translate();
    });
  });
  retry.addEventListener('click', () => location.reload());
  fullscreen.addEventListener('click', () => instance?.SetFullscreen(1));
  translate();

  if (state === 'local') {
    progress.hidden = true;
    return;
  }

  const buildUrl = 'demos/supermarket/Build';
  const buildVersion = '?v=20260928';
  const script = document.createElement('script');
  script.src = buildUrl + '/WebGL.loader.js' + buildVersion;
  script.onerror = () => fail('Could not load Unity loader');
  script.onload = async () => {
    try {
      instance = await createUnityInstance(canvas, {
        dataUrl: buildUrl + '/WebGL.data' + buildVersion,
        frameworkUrl: buildUrl + '/WebGL.framework.js' + buildVersion,
        codeUrl: buildUrl + '/WebGL.wasm' + buildVersion,
        streamingAssetsUrl: 'demos/supermarket/StreamingAssets',
        companyName: 'Sebastián Venegas',
        productName: 'Supermarket Simulation',
        productVersion: '0.1',
        // Preserve the exported UI layout while scaling the canvas with CSS.
        matchWebGLToCanvasSize: false,
        devicePixelRatio: 1,
        showBanner(message, type) {
          if (type === 'error') fail(message);
          else {
            const notice = document.getElementById('unity-notice');
            notice.textContent = message;
            notice.hidden = false;
          }
        }
      }, value => { progress.value = value; });
      if (state !== 'error') {
        state = 'ready';
        overlay.hidden = true;
        fullscreen.disabled = false;
        canvas.focus({ preventScroll: true });
      }
    } catch (error) { fail(error); }
  };
  document.body.appendChild(script);
})();
