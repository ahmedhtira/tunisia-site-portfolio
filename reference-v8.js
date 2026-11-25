(function () {
  const key = new URLSearchParams(location.search).get('demo') || 'brasa';
  if (!DESIGNS[key] || key === 'lowlight') return;
  const s = DESIGNS[key];
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const nav = hero.querySelector('.brand-nav')?.outerHTML || '';
  const img = (url, alt = '') => '<img src="' + url + '" alt="' + alt + '" loading="eager">';
  const layouts = {
    aura: () => `
      <div class="ref-aura-photo" style="background-image:url('${s.image}')"></div>
      <div class="ref-aura-overlay"></div>
      <div class="ref-aura-kicker">A NEW PERSPECTIVE ON HOME <span>TUNIS / TUNISIA</span></div>
      <h1 class="ref-aura-name"><span>aura</span><span>residencies</span></h1>
      <div class="ref-aura-info"><p>Room to live beautifully.<br>Spaces shaped around you.</p><a href="#menu">EXPLORE THE RESIDENCES ↗</a></div>
      <p class="ref-aura-note">Thoughtful architecture, natural light, and a place to belong.</p>
      <div class="ref-aura-hotspots" aria-label="Residence highlights">
        <button type="button" data-note="Open, light-filled living spaces" aria-label="Explore living spaces">+</button>
        <button type="button" data-note="Architecture with every detail considered" aria-label="Explore architecture">+</button>
        <button type="button" data-note="A setting made for everyday life" aria-label="Explore the setting">+</button>
      </div>
      <div class="ref-aura-pop" role="status" aria-live="polite"></div>
      <div class="ref-aura-progress"><strong>35%</strong><span>OPEN FOR<br>VIEWINGS</span></div>`,
    brasa: () => `
      <div class="ref-brasa-top"><span>CAFÉ NOURA / LA MARSA</span><span>COFFEE MADE WITH CARE</span></div>
      <div class="ref-brasa-title"><small>YOUR FAVOURITE RITUAL</small><h1>Latte</h1><p>Rich espresso and creamy steamed milk, poured just right.<br>Smooth, rounded and finished with latte art.</p></div>
      <div class="ref-brasa-orbit"><span>MOCHA</span><span>ESPRESSO</span><span>CAPPUCCINO</span></div>
      <div class="ref-brasa-cup">${img(s.image, 'Latte with art in a ceramic cup')}</div>
      <div class="ref-brasa-beans beans-left" aria-hidden="true">✦ ✦ ✦</div><div class="ref-brasa-beans beans-right" aria-hidden="true">✦ ✦ ✦</div>
      <a class="ref-brasa-arrow" href="#menu" aria-label="See the café menu">↗</a>
      <div class="ref-brasa-foot"><span>BREWED FRESH EVERY DAY</span><span>GOOD MORNINGS START HERE</span></div>`,
    bruma: () => `
      <div class="ref-bruma-editorial">
        <div class="ref-bruma-stage"><span class="ref-bruma-ghost">the edit</span>
          ${img(s.image, 'New season fashion look')}
          <div class="ref-bruma-stage-foot"><span>01 / THE NEW COLLECTION</span><h1>Wear the moment.</h1><a href="#menu">EXPLORE THE COLLECTION ↗</a></div>
        </div>
        <aside class="ref-bruma-shop"><h2>In this look</h2>${s.items.map((item,i) => `<button type="button" data-product="${i}"><span>${String(i+1).padStart(2,'0')}</span>${img([s.extra,s.thirdImage,s.image][i],item[1])}<strong>${item[1]}</strong><small>VIEW PIECE ↗</small></button>`).join('')}</aside>
      </div>`,
    ripe: () => `
      <div class="ref-ripe-glow"></div><div class="ref-ripe-ghost">FRESHLY BLENDED</div>
      <div class="ref-ripe-left"><small>FRUIT FIRST. ALWAYS.</small><h1>Banana Cream<br>& Oat Milk</h1><p>Ripe fruit, oat milk, and a little sunshine.<br>Made to brighten your day.</p><a href="#menu">SEE THE BLENDS ↗</a></div>
      <div class="ref-ripe-product">${img(s.image, 'Fresh blended fruit drink')}</div>
      <div class="ref-ripe-right"><h2>Blended fresh.<br>Poured cold.</h2><p>Whole fruit, no shortcuts. Made fresh when you are.</p><div class="ref-ripe-flavours"><button class="active" type="button" data-flavour="Banana Cream">01<br>CREAM</button><button type="button" data-flavour="Berry Rush">02<br>BERRY</button><button type="button" data-flavour="Golden Hour">03<br>GOLDEN</button><button type="button" data-flavour="Green Glow">04<br>GREEN</button></div></div>`,
    vyre: () => `
      <div class="ref-vyre-top"><span>ON THE RAIL</span><span>VYRE / EVERYDAY DEPARTMENT</span></div>
      <div class="ref-vyre-rail" style="background-image:url('${s.image}')">${Array.from({length:5},(_,i) => `<button type="button" aria-label="View garment ${i+1}" data-product="${i%3}"></button>`).join('')}</div>
      <div class="ref-vyre-floor"><p>Considered pieces. One rail.</p><h1>Made to be worn your way.</h1><a href="#menu">EXPLORE THE DROP ↗</a></div>`,
    bruta: () => `
      <div class="ref-bruta-paper"></div><div class="ref-bruta-outline">BURGERS</div>
      <span class="ref-bruta-script">very</span>
      <div class="ref-bruta-burger">${img(s.image, 'Stacked burger')}</div>
      <div class="ref-bruta-stamp">FRESH<br>DAILY ★</div>
      <div class="ref-bruta-bottom"><h1>BUN CLUB</h1><p>SMASHED. STACKED. SERVED.</p><a href="#menu">EXPLORE THE MENU ↗</a></div>`,
    bocado: () => `
      <div class="ref-bocado-shapes"></div><h1 class="ref-bocado-logo">Bocado.</h1>
      <div class="ref-bocado-plates"><div class="ref-bocado-plate plate-left">${img(s.extra,'Fresh plate')}</div><div class="ref-bocado-plate plate-main">${img(s.image,'Signature plate')}</div><div class="ref-bocado-plate plate-right">${img(s.extra,'Fresh brunch plate')}</div></div>
      <div class="ref-bocado-bottom"><span>GOOD FOOD. GOOD COMPANY.</span><a href="#menu">EXPLORE THE MENU ↗</a><span>SIDI BOU SAÏD / TUNISIA</span></div>`,
    aether: () => `
      <div class="ref-aether-copy"><small>NOVA STUDIO / THE NEW COLLECTION</small><h1>Overbuilt.<br>Understated.<br>Broken in.</h1><p>Essential layers made for the long way around.</p><a href="#menu">EXPLORE THE COLLECTION <span>↗</span></a></div>
      <div class="ref-aether-models"><div>${img(s.image,'Fashion look one')}</div><div>${img(s.extra,'Fashion look two')}</div></div>
      <div class="ref-aether-foot">FOUR LOOKS / ONE DIRECTION <span>MADE TO MOVE WITH YOU</span></div>`
  };
  if (!layouts[key]) return;
  hero.innerHTML = nav + layouts[key]();
  hero.classList.add('reference-layout');
  hero.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.product);
    document.querySelectorAll('.detail-card')[index]?.click();
  }));
  hero.querySelectorAll('.ref-aura-hotspots button').forEach(button => button.addEventListener('click', () => {
    hero.querySelector('.ref-aura-pop').textContent = button.dataset.note;
    hero.querySelector('.ref-aura-pop').classList.add('show');
  }));
  hero.querySelectorAll('.ref-ripe-flavours button').forEach(button => button.addEventListener('click', () => {
    hero.querySelectorAll('.ref-ripe-flavours button').forEach(el => el.classList.remove('active'));
    button.classList.add('active');
    hero.querySelector('.ref-ripe-left h1').textContent = button.dataset.flavour;
    hero.style.setProperty('--ripe-hue', ['0deg','300deg','32deg','75deg'][[...button.parentNode.children].indexOf(button)]);
  }));
})();
