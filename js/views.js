(() => {
const DICT = window.Portfolio.translations;
const {featured: FEATURED, more: MORE} = window.Portfolio.projects;
const RESUME_URL = "assets/Sebastian-Venegas-CV.pdf";
function renderHome(currentLang){
  const t = key => DICT[currentLang][key] || "";
  const L = currentLang;
  document.getElementById('app').innerHTML = `
    <section class="hero">
      <div class="wrap">
        <div class="kicker">${t('hero.kicker')}</div>
        <h1>Sebastián Venegas Brenes</h1>
        <div class="role">${t('hero.role')}</div>
        <p class="lede">${t('hero.lede')}</p>
        <div class="links">
          <a class="btn primary" href="#/#work">${t('hero.cta')}</a>
          <a class="btn ghost" href="${RESUME_URL}" download="Sebastian-Venegas-CV.pdf">${t('hero.resume')}</a>
          <a class="btn ghost" href="https://github.com/Vnegas" target="_blank" rel="noopener">GitHub ↗</a>
          <a class="btn ghost" href="https://www.linkedin.com/in/sebastian-venegas-5920bb1ab" target="_blank" rel="noopener">LinkedIn ↗</a>
        </div>
      </div>
    </section>

    <section id="work">
      <div class="wrap">
        <div class="section-head"><span class="tag">01</span><h2>${t('work.title')}</h2></div>
        <div class="feat-grid">
          ${Object.keys(FEATURED).map(id => {
            const p = FEATURED[id];
            const name = typeof p.name === 'string' ? p.name : p.name[L];
            return `<a class="feat-card" href="#/project/${id}">
              <div>
                <div class="star">★ ${p.tag[L]}</div>
                <h3>${name}</h3>
                <p>${p.role[L]}</p>
              </div>
              <div class="arrow">→</div>
            </a>`;
          }).join('')}
        </div>
      </div>
    </section>

    <section id="more">
      <div class="wrap">
        <div class="section-head"><span class="tag">02</span><h2>${t('more.title')}</h2></div>
        <div class="more-grid">
          ${MORE.map(p => `<a class="more-card" href="${p.url}" ${p.local ? '' : 'target="_blank" rel="noopener"'}>
            <div class="mtag">${p.tag}</div>
            <h4>${p.name}</h4>
            <p>${p.d[L]}</p>
          </a>`).join('')}
        </div>
      </div>
    </section>

    <section id="experience">
      <div class="wrap">
        <div class="section-head"><span class="tag">03</span><h2>${t('exp.title')}</h2></div>
        <div class="exp-list">
          ${[1,2,3,4].map(i => `
            <div class="exp-item">
              <div class="exp-top"><h4>${t('exp'+i+'.role')}</h4><span class="exp-date">${t('exp'+i+'.date')}</span></div>
              <div class="exp-org">${t('exp'+i+'.org')}</div>
              <p>${t('exp'+i+'.d')}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section id="skills">
      <div class="wrap">
        <div class="section-head"><span class="tag">04</span><h2>${t('found.title')}</h2></div>
        <div class="skill-groups">
          <div class="skill-group"><h3>${t('found.systems')}</h3><p style="color:var(--text-dim);font-size:14px;margin-bottom:10px;">${t('found.systems.d')}</p>
            <div class="chips"><span class="chip">C</span><span class="chip">C++</span><span class="chip">TCP Sockets</span><span class="chip">NachOS</span></div></div>
          <div class="skill-group"><h3>${t('found.parallel')}</h3><p style="color:var(--text-dim);font-size:14px;margin-bottom:10px;">${t('found.parallel.d')}</p>
            <div class="chips"><span class="chip">Pthreads</span><span class="chip">OpenMP</span><span class="chip">MPI</span></div></div>
          <div class="skill-group"><h3>${t('found.db')}</h3><p style="color:var(--text-dim);font-size:14px;margin-bottom:10px;">${t('found.db.d')}</p>
            <div class="chips"><span class="chip">Oracle SQL</span><span class="chip">NoSQL</span><span class="chip">Spatial SQL</span></div></div>
          <div class="skill-group"><h3>${t('found.algo')}</h3><p style="color:var(--text-dim);font-size:14px;margin-bottom:10px;">${t('found.algo.d')}</p>
            <div class="chips"><span class="chip">Complexity</span><span class="chip">Heuristics</span><span class="chip">Genetic Algorithms</span></div></div>
        </div>
      </div>
    </section>

    <section class="edu">
      <div class="wrap">
        <div class="section-head"><span class="tag">05</span><h2>${t('edu.title')}</h2></div>
        <p>${t('edu.p1')}</p>
        <p>${t('edu.p2')}</p>
      </div>
    </section>

    <section id="about" class="about">
      <div class="wrap">
        <div class="section-head"><span class="tag">06</span><h2>${t('about.title')}</h2></div>
        <p>${t('about.p1')}</p>
        <p>${t('about.p2')}</p>
        <p>${t('about.p3')}</p>
      </div>
    </section>

    <footer id="contact">
      <div class="wrap">
        <p>${t('footer.line')}</p>
        <div class="foot-links">
          <a href="mailto:sebas.venegas.brenes@gmail.com">Email</a>
          <a href="https://github.com/Vnegas" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/sebastian-venegas-5920bb1ab" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>
  `;
}

function renderProject(id, currentLang){
  const t = key => DICT[currentLang][key] || "";
  const p = FEATURED[id];
  if (!p) { renderHome(currentLang); return; }
  const L = currentLang;
  const name = typeof p.name === 'string' ? p.name : p.name[L];
  document.getElementById('app').innerHTML = `
    <section class="detail-hero">
      <div class="wrap">
        <a class="back-link" href="#/#work">${t('back')}</a>
        <div class="dtag">${p.tag[L]}</div>
        <h1>${name}</h1>
        <p class="dlede">${p.role[L]}</p>
        <div class="dstack">${p.stack.map(s => `<span class="chip">${s}</span>`).join('')}</div>
      </div>
    </section>
    <div class="wrap">
      <div class="metric-row">
        ${p.metrics.map(m => `<div class="metric"><div class="num">${m.num}</div><div class="lbl">${m.lbl[L]}</div></div>`).join('')}
      </div>
      <div class="dbody">
        ${p.body[L]}
      </div>
      ${p.diagram ? `<div class="diagram-box">${p.diagram}<div class="dcap">${L === 'en' ? 'Architecture diagram — not a screenshot' : 'Diagrama de arquitectura — no es una captura de pantalla'}</div></div>` : ''}
      <p class="project-actions">
        <a class="btn ghost" href="${p.url}" target="_blank" rel="noopener">${t('repo.link')}</a>
        <a class="btn ghost" href="#/#work">${t('back')}</a>
      </p>
    </div>
  `;
}


window.Portfolio.views = { home: renderHome, project: renderProject };
})();
