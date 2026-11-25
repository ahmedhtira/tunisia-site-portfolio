(function () {
  const params = new URLSearchParams(location.search);
  const key = params.get('demo') || 'cafe';
  const site = SITES[key] || SITES.cafe;
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
  const heading = site.heading.replace(/<em>(.*?)<\/em>/g, (_, content) => `<em>${escape(content)}</em>`);
  const link = (value, type) => {
    if (!value) return '#contact';
    if (type === 'whatsapp') return `https://wa.me/${String(value).replace(/\D/g, '')}`;
    if (type === 'phone') return `tel:${String(value).replace(/[^\d+]/g, '')}`;
    return value;
  };
  const contactHref = link(site.whatsapp || site.phone, site.whatsapp ? 'whatsapp' : 'phone');
  const external = contactHref.startsWith('https:') ? ' target="_blank" rel="noopener"' : '';
  const isShop = site.kind === 'shop';
  const action = isShop ? 'Découvrir la collection' : site.kind === 'cafe' ? 'Voir la carte' : 'Découvrir nos services';
  const contactAction = isShop ? 'Nous contacter' : site.kind === 'cafe' ? 'Nous rendre visite' : 'Prendre contact';

  document.title = `${site.name} — Concept de site`;
  document.body.classList.add(`theme-${site.kind}`);
  document.getElementById('demo-label').textContent = site.category;

  document.getElementById('app').innerHTML = `
    <div class="site-shell">
      <header class="site-header">
        <a class="site-logo" href="#accueil">${escape(site.mark)}</a>
        <nav class="site-nav" id="site-nav" aria-label="Navigation principale">
          <a href="#accueil">Accueil</a><a href="#offre">${isShop ? 'Collection' : site.kind === 'cafe' ? 'La carte' : 'Nos services'}</a><a href="#histoire">Notre histoire</a><a href="#contact">Contact</a>
        </nav>
        <a class="header-cta" href="${escape(contactHref)}"${external}>${escape(contactAction)} <span>↗</span></a>
        <button class="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="site-nav"><span></span><span></span></button>
      </header>

      <main>
        <section class="site-hero" id="accueil">
          <div class="hero-image" style="--hero-image:url('${escape(site.image)}')"></div>
          <div class="site-hero-content">
            <div class="site-eyebrow"><span class="eyebrow-line"></span>${escape(site.eyebrow)}</div>
            <h1>${heading}</h1>
            <p>${escape(site.intro)}</p>
            <div class="hero-actions"><a class="site-button" href="#offre">${escape(action)} <span>↗</span></a><a class="text-button" href="#histoire">Notre histoire <span>↗</span></a></div>
          </div>
          <div class="hero-aside"><span>01 / 03</span><span>${escape(site.city.toUpperCase())}</span></div>
          <span class="vertical-label">${escape(site.category)} · TUNISIE</span>
        </section>

        <section class="site-intro" id="offre">
          <div class="site-section-heading"><span class="section-index">01 / À DÉCOUVRIR</span><h2>${isShop ? 'Des objets qui ont <em>du sens.</em>' : site.kind === 'cafe' ? 'À savourer <em>sans se presser.</em>' : site.kind === 'wellness' ? 'Votre moment <em>à vous.</em>' : 'Ce que nous pouvons <em>faire ensemble.</em>'}</h2></div>
          <div class="offer-grid">${site.items.map((item, index) => `<article class="offer-card"><div class="offer-card-top"><span>${String(index + 1).padStart(2, '0')}</span><span>↗</span></div><div><h3>${escape(item.title)}</h3><p>${escape(item.detail)}</p></div><span class="offer-detail">${escape(item.price || 'EN SAVOIR PLUS')}</span></article>`).join('')}</div>
        </section>

        <section class="story-section" id="histoire"><div class="story-photo" style="--story-image:url('${escape(site.secondaryImage)}')"><span class="photo-tag">${escape(site.city)}</span></div><div class="story-copy"><span class="section-index">02 / NOTRE HISTOIRE</span><h2>${escape(site.aboutTitle)}</h2><p>${escape(site.about)}</p><a class="underlined-link" href="#contact">Parlons-en <span>↗</span></a><span class="story-watermark">${escape(site.mark)}</span></div></section>

        <section class="contact-section" id="contact"><div class="contact-top"><span class="section-index">03 / CONTACT</span><span>${escape(site.city.toUpperCase())}</span></div><div class="contact-grid"><div><h2>On se<br><em>rencontre ?</em></h2><p>Une question, une envie, un projet ? Nous serons ravis d’échanger avec vous.</p><a class="site-button contact-button" href="${escape(contactHref)}"${external}>${site.whatsapp ? 'Écrire sur WhatsApp' : site.phone ? 'Appeler maintenant' : 'Nous contacter'} <span>↗</span></a></div><div class="contact-details"><div><span>ADRESSE</span>${site.maps ? `<a href="${escape(site.maps)}" target="_blank" rel="noopener">${escape(site.address)} ↗</a>` : `<p>${escape(site.address)}</p>`}</div><div><span>HORAIRES</span><p>${escape(site.hours)}</p></div>${site.phone ? `<div><span>TÉLÉPHONE</span><a href="${escape(link(site.phone, 'phone'))}">${escape(site.phone)}</a></div>` : ''}${site.instagram ? `<div><span>INSTAGRAM</span><a href="${escape(site.instagram)}" target="_blank" rel="noopener">Nous suivre ↗</a></div>` : ''}</div></div></section>
      </main>
      <footer class="site-footer"><a class="site-logo" href="#accueil">${escape(site.mark)}</a><span>© ${new Date().getFullYear()} ${escape(site.name)}</span><a href="#accueil">RETOUR EN HAUT ↑</a></footer>
    </div>`;

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Ouvrir le menu');
      nav.classList.remove('open');
    }
  });
})();
