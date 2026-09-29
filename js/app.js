(() => {
  const { translations, views } = window.Portfolio;
  let language = 'en';
  try { language = localStorage.getItem('portfolio-lang') || 'en'; } catch (_) {}
  if (!translations[language]) language = 'en';

  function render() {
    document.documentElement.lang = language;
    document.documentElement.dataset.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.textContent = translations[language][element.dataset.i18n] || '';
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      const active = button.dataset.language === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const route = location.hash.slice(1);
    if (route.startsWith('/project/')) views.project(route.slice('/project/'.length), language);
    else views.home(language);
    if (route.startsWith('/#')) {
      requestAnimationFrame(() => document.getElementById(route.slice(2))?.scrollIntoView());
    } else window.scrollTo({ top: 0 });
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('[data-language]');
    if (!button || !translations[button.dataset.language]) return;
    language = button.dataset.language;
    try { localStorage.setItem('portfolio-lang', language); } catch (_) {}
    render();
  });
  window.addEventListener('hashchange', render);
  render();
})();
