(function () {
  const keys = ["lowlight","aura","brasa","bruma","ripe","vyre","bruta","bocado","aether"];
  const escape = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const stage = document.getElementById("stage-cards");
  const grid = document.getElementById("work-grid");
  let current = 0;
  stage.innerHTML = keys.map((key, i) => {
    const s = DESIGNS[key];
    return '<article class="stage-card" data-index="' + i + '"><div class="stage-poster" style="background-image:url(' + escape(s.image) + ')"></div><iframe title="' + escape(s.title) + ' website preview" loading="' + (i < 3 ? "eager" : "lazy") + '" src="demo.html?demo=' + key + '&preview=6"></iframe><a href="demo.html?demo=' + key + '&preview=6" aria-label="Open ' + escape(s.title) + ' inspired concept">' + escape(s.title) + ' / ' + escape(s.category) + '<span>↗</span></a></article>';
  }).join("");
  stage.querySelectorAll("iframe").forEach(frame => frame.addEventListener("load", () => frame.classList.add("ready")));
  grid.innerHTML = keys.map((key, i) => {
    const s = DESIGNS[key];
    return '<a class="work-card" href="demo.html?demo=' + key + '&preview=6"><div class="visual" style="--card-color:' + escape(s.accent) + '"><img src="' + escape(s.image) + '" alt="' + escape(s.brand) + ' visual concept" loading="lazy"><iframe title="' + escape(s.title) + ' visual preview" src="demo.html?demo=' + key + '&preview=6" loading="lazy" tabindex="-1" aria-hidden="true"></iframe><span class="visual-label">0' + (i + 1) + ' / ' + escape(s.category.toUpperCase()) + '</span><span class="visual-title">' + escape(s.brand) + '</span><span class="visual-arrow">↗</span></div><div class="work-meta"><strong>' + escape(s.title) + ' direction</strong><span>OPEN THE CONCEPT ↗</span></div></a>';
  }).join("");
  grid.querySelectorAll("iframe").forEach(frame => frame.addEventListener("load", () => frame.classList.add("ready")));
  const cards = [...stage.children];
  function render() {
    cards.forEach((card, i) => {
      let distance = i - current;
      if (distance > 4) distance -= keys.length;
      if (distance < -4) distance += keys.length;
      card.style.setProperty("--distance", distance);
      card.style.setProperty("--abs-distance", Math.abs(distance));
      card.classList.toggle("active", i === current);
      card.style.visibility = Math.abs(distance) > 2 ? "hidden" : "visible";
    });
    document.getElementById("stage-counter").textContent = String(current + 1).padStart(2, "0") + " / 09";
  }
  document.getElementById("next").addEventListener("click", () => { current = (current + 1) % keys.length; render(); });
  document.getElementById("prev").addEventListener("click", () => { current = (current + keys.length - 1) % keys.length; render(); });
  document.getElementById("year").textContent = new Date().getFullYear();
  render();
})();
