(function () {
  const requested = new URLSearchParams(location.search).get("demo") || "brasa";
  const key = DESIGNS[requested] ? requested : (ALIASES[requested] || "brasa");
  const site = DESIGNS[key];
  const e = value => String(value == null ? "" : value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const photo = (url, className, alt) => '<img class="' + className + '" src="' + e(url) + '" alt="' + e(alt) + '" loading="eager">';
  const nav = (light) => '<header class="brand-nav ' + (light ? "nav-light" : "") + '"><a class="brand" href="#top">' + e(site.brand) + '</a><nav aria-label="Main navigation"><a href="#top">Home</a><a href="#menu">' + (["bruma","vyre","aether"].includes(key) ? "Collection" : key === "aura" ? "Residences" : "Menu") + '</a><a href="#story">Our story</a><a href="#contact">Contact</a></nav><a class="nav-action" href="#contact">Get in touch <span>↗</span></a></header>';
  let hero = "";

  if (key === "lowlight") hero =
    '<section class="hero hero-lowlight" id="top">' + nav(false) +
    '<div class="low-editorial"><div class="low-scene" style="background-image:url(' + e(site.extra) + ')"><div class="low-scene-shade"></div><div class="low-scene-copy"><span>THE ART OF AFTER DARK / LA MARSA</span><h1>The night,<br><em>hour by hour.</em></h1><p>Every hour has its own rhythm. Find yours here.</p></div></div>' +
    '<div class="low-drink" style="background-image:url(' + e(site.image) + ')"><div class="low-drink-shade"></div><span class="low-drink-top">NOCTURNE <span>✳</span> EST. 2026</span><div class="low-drink-type"><span>MID</span><span>NIGHT</span><span>WIDE</span><span>AWAKE</span></div><a href="#menu" class="low-drink-link">DISCOVER THE MENU <span>↗</span></a></div></div>' +
    '<div class="low-ticker"><span>COCKTAILS / MUSIC / AFTER DARK</span><span>THE NIGHT LOOKS BETTER FROM HERE</span><span>LA MARSA, TUNISIA</span></div></section>';

  if (key === "aura") hero =
    '<section class="hero hero-aura" id="top">' + nav(false) +
    '<div class="aura-image" style="background-image:url(' + e(site.image) + ')"></div><div class="aura-shade"></div>' +
    '<div class="aura-topline">A NEW WAY OF LIVING <span>—</span> TUNIS</div>' +
    '<h1>Aura<br><em>is more than</em><br>a place.</h1>' +
    '<div class="aura-left"><small>01 / THE COLLECTION</small><strong>Aura Residencies</strong><p>Architecture to come home to. A better version of everyday.</p></div>' +
    '<div class="aura-right"><small>DESIGNED FOR WHAT MATTERS</small><p>Light, space, perspective. Each detail finds its place.</p><a href="#menu">EXPLORE THE SPACES ↗</a></div>' +
    '<div class="hero-foot"><span>01 / 03</span><span>DISCOVER MORE ↓</span></div></section>';

  if (key === "brasa") hero =
    '<section class="hero hero-brasa" id="top">' + nav(false) +
    '<div class="brasa-heading"><small>YOUR NEW FAVOURITE RITUAL</small><h1>Cappuccino</h1><p>Equal parts espresso, milk and silky foam.<br>The classic balance for a calm start to your day.</p></div>' +
    '<div class="brasa-ring"></div><div class="brasa-cup">' + photo(site.image, "", "Cappuccino with latte art") + '</div><div class="brasa-milk" aria-hidden="true"></div>' +
    '<span class="coffee-word word-one">MOCHA</span><span class="coffee-word word-two">ESPRESSO</span><span class="coffee-word word-three">LATTE</span>' +
    '<div class="brasa-beans">✺<br>✺</div><div class="brasa-side">MADE FRESH<br>EVERY DAY<br>↘</div>' +
    '<a class="brasa-next" href="#menu" aria-label="Explore menu">→</a><div class="hero-foot"><span>FRESHLY BREWED IN LA MARSA</span><span>DISCOVER THE MENU ↓</span></div></section>';

  if (key === "bruma") hero =
    '<section class="hero hero-bruma" id="top">' + nav(false) +
    '<div class="bruma-giant">NEW SEASON</div>' +
    '<div class="bruma-figures"><div class="bruma-figure figure-one">' + photo(site.extra, "", "Fashion collection") + '</div><div class="bruma-figure figure-two">' + photo(site.image, "", "New season fashion") + '</div><div class="bruma-figure figure-three">' + photo(site.thirdImage, "", "Fashion detail") + '</div></div>' +
    '<div class="bruma-bottom"><div><span>THE COLLECTION / 2026</span><h1>Wear the moment.</h1><p>' + e(site.intro) + '</p></div><a href="#menu" class="bruma-explore">EXPLORE THE DROP <span>↗</span></a></div></section>';

  if (key === "ripe") hero =
    '<section class="hero hero-ripe" id="top">' + nav(false) +
    '<div class="ripe-giant">FRESH<br>ENERGY</div><div class="ripe-fruit fruit-one">●</div><div class="ripe-fruit fruit-two">●</div><div class="ripe-fruit fruit-three">●</div>' +
    '<div class="ripe-copy"><small>FRUIT FIRST. ALWAYS.</small><h1>Blended fresh.<br><em>Poured cold.</em></h1><p>' + e(site.intro) + '</p><a href="#menu">TASTE THE COLLECTION ↗</a></div>' +
    '<div class="ripe-glass">' + photo(site.image, "", "Fresh fruit drink") + '</div>' +
    '<div class="ripe-flavours"><span>01 BERRY RUSH</span><span>02 GOLDEN HOUR</span><span>03 GREEN GLOW</span></div></section>';

  if (key === "vyre") hero =
    '<section class="hero hero-vyre" id="top">' + nav(false) +
    '<div class="vyre-top"><span>THE EVERYDAY COLLECTION</span><span>DROP 01 / LIMITED RUN</span></div>' +
    '<div class="vyre-rail"></div><div class="vyre-hangers"><span>♧</span><span>♧</span><span>♧</span><span>♧</span><span>♧</span></div>' +
    '<div class="vyre-product">' + photo(site.image, "", "Essential t-shirt") + '</div>' +
    '<div class="vyre-name">THE ESSENTIAL TEE</div><div class="vyre-bottom"><span>DESIGNED IN TUNISIA</span><h1>Wear the story.</h1><a href="#menu">EXPLORE THE COLLECTION ↗</a></div></section>';

  if (key === "bruta") hero =
    '<section class="hero hero-bruta" id="top">' + nav(false) +
    '<div class="bruta-top"><span>SMASHED. STACKED. SERVED.</span><span>BURGERS WITH ATTITUDE</span></div>' +
    '<h1>BURGERS<br><em>BUILT</em> BIG.</h1><div class="bruta-burger">' + photo(site.image, "", "Stacked burger") + '</div>' +
    '<span class="bruta-label label-a">SOFT BUN <i>↘</i></span><span class="bruta-label label-b">JUICY BEEF <i>↙</i></span><span class="bruta-label label-c">MELTED CHEESE <i>↗</i></span>' +
    '<div class="bruta-bottom"><strong>bruta<span>.</span></strong><p>' + e(site.line) + '</p><a href="#menu">GET HUNGRY ↗</a></div></section>';

  if (key === "bocado") hero =
    '<section class="hero hero-bocado" id="top">' + nav(false) +
    '<div class="bocado-title">Bocado.</div><div class="bocado-plate">' + photo(site.image, "", "Fresh brunch plate") + '</div>' +
    '<div class="bocado-side side-left">' + photo(site.extra, "", "Fresh menu dish") + '</div><div class="bocado-side side-right">' + photo(site.extra, "", "A colourful plate") + '</div>' +
    '<div class="bocado-bottom"><span>GOOD FOOD / GOOD COMPANY</span><h1>Always a good idea.</h1><a href="#menu">EXPLORE THE MENU ↗</a></div></section>';

  if (key === "aether") hero =
    '<section class="hero hero-aether" id="top">' + nav(false) +
    '<div class="aether-heading"><span>THE NEW COLLECTION</span><h1>Four looks.<br>One direction.</h1><a href="#menu">EXPLORE THE EDIT ↗</a></div>' +
    '<div class="aether-people"><div>' + photo(site.image, "", "Fashion outerwear") + '</div><div>' + photo(site.extra, "", "Fashion collection") + '</div></div>' +
    '<div class="aether-cards">' + site.items.map((item, i) => '<a href="#menu"><span>0' + (i + 1) + '</span><div>' + photo(i % 2 ? site.extra : site.image, "", item[1]) + '</div><strong>' + e(item[1]) + '</strong><small>VIEW PIECE ↗</small></a>').join("") + '</div></section>';

  const itemCards = site.items.map((item, i) =>
    '<article class="detail-card"><div class="card-index">' + e(item[0]) + '</div><div class="card-media">' + photo(i === 0 ? site.image : i === 1 ? site.extra : (site.thirdImage || site.image), "", item[1]) + '</div><div class="card-copy"><h3>' + e(item[1]) + '</h3><p>' + e(item[2]) + '</p></div></article>'
  ).join("");
  const page = '<div class="design design-' + key + '" style="--theme-accent:' + e(site.accent) + '">' +
    hero +
    '<section class="detail-section" id="menu"><div class="detail-heading"><span>01 / EXPLORE</span><h2>' + (["bruma","vyre","aether"].includes(key) ? "The collection" : key === "aura" ? "A life in the details" : "Made to remember") + '<em>.</em></h2><p>' + e(site.intro) + '</p></div><div class="detail-grid">' + itemCards + '</div></section>' +
    '<section class="story-section" id="story"><div class="story-image">' + photo(site.extra, "", site.brand + " atmosphere") + '</div><div class="story-text"><span>02 / OUR STORY</span><h2>' + e(site.line) + '</h2><p>' + e(site.intro) + '</p><a href="#contact">COME SAY HELLO ↗</a></div></section>' +
    '<section class="contact-section" id="contact"><span>03 / FIND US</span><h2>Let’s make<br><em>something happen.</em></h2><p>' + e(site.brand) + ' · ' + e(site.city) + ', Tunisia</p><p class="demo-note">Fictional concept. Replace this section with the client’s real address, hours and contact details.</p><a href="index.html#work">MORE CONCEPTS ↗</a></section>' +
    '<footer class="design-footer"><span>' + e(site.brand) + ' / CONCEPT</span><span>MADE FOR TUNISIA · 2026</span><a href="#top">BACK TO TOP ↑</a></footer></div>';
  document.body.className = "demo-body";
  document.title = site.brand + " — " + site.title + " inspired concept";
  document.getElementById("app").innerHTML = page;
  document.querySelector(".back-portfolio").setAttribute("href", "index.html#work");
})();
