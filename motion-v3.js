(function(){
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets=document.querySelectorAll('.section-head,.work-heading,.work-card,.steps article,.detail-heading,.detail-card,.story-image,.story-text,.contact-section h2');
  if(!reduced && 'IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
    }),{threshold:.12,rootMargin:'0px 0px -30px 0px'});
    targets.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=(i%3)*75+'ms';observer.observe(el)});
  }
  const hero=document.querySelector('.hero');
  if(hero && !reduced){
    hero.addEventListener('pointermove',event=>{
      const r=hero.getBoundingClientRect();
      hero.style.setProperty('--px',((event.clientX-r.left)/r.width*100).toFixed(1)+'%');
      hero.style.setProperty('--py',((event.clientY-r.top)/r.height*100).toFixed(1)+'%');
    },{passive:true});
  }
  const stage=document.querySelector('.stage');
  if(stage){
    let start=null;
    stage.addEventListener('pointerdown',event=>{if(event.target.closest('a,button'))return;start=event.clientX});
    stage.addEventListener('pointerup',event=>{
      if(start===null)return;
      const distance=event.clientX-start;start=null;
      if(Math.abs(distance)>50)document.getElementById(distance<0?'next':'prev')?.click();
    });
    stage.addEventListener('pointercancel',()=>{start=null});
    document.addEventListener('keydown',event=>{
      if(event.key==='ArrowRight')document.getElementById('next')?.click();
      if(event.key==='ArrowLeft')document.getElementById('prev')?.click();
    });
  }
  if(!reduced && matchMedia('(hover:hover)').matches){
    document.querySelectorAll('.work-card .visual').forEach(card=>{
      card.addEventListener('pointermove',event=>{
        const r=card.getBoundingClientRect(),x=(event.clientX-r.left)/r.width-.5,y=(event.clientY-r.top)/r.height-.5;
        card.style.transform='perspective(900px) rotateY('+(-x*4)+'deg) rotateX('+(y*4)+'deg)';
      },{passive:true});
      card.addEventListener('pointerleave',()=>{card.style.transform=''});
    });
  }
})();
