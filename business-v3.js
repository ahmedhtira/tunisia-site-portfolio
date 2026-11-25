(function(){
  const key=new URLSearchParams(location.search).get('demo')||'brasa';
  const site=DESIGNS[key];if(!site)return;
  const content={
    lowlight:{label:'THE MENU',heading:'A night worth staying for.',story:'The best stories start after dark.',contact:'Make tonight yours.',cta:'Explore the drinks'},
    aura:{label:'THE RESIDENCES',heading:'Space for what matters.',story:'Built around a better everyday.',contact:'Find your place.',cta:'View the spaces'},
    brasa:{label:'THE CAFÉ MENU',heading:'Something good is brewing.',story:'The little rituals make the day.',contact:'Come for a cup.',cta:'Explore the menu'},
    bruma:{label:'THE NEW COLLECTION',heading:'Nine looks. One floor.',story:'Wear it your way.',contact:'Find your next look.',cta:'Explore the edit'},
    ripe:{label:'THE BLENDS',heading:'Fruit first. Always.',story:'A brighter way to take a break.',contact:'Find your flavour.',cta:'See the blends'},
    vyre:{label:'THE DROP',heading:'Everyday, reimagined.',story:'Made to be worn your way.',contact:'Discover the drop.',cta:'See the pieces'},
    bruta:{label:'THE MENU',heading:'The good stuff, stacked.',story:'Good food does the talking.',contact:'Bring your appetite.',cta:'See the burgers'},
    bocado:{label:'THE MENU',heading:'Good food for good company.',story:'Every table has a story.',contact:'Pull up a chair.',cta:'See the plates'},
    aether:{label:'THE COLLECTION',heading:'Four shells. One bench.',story:'Made for the move.',contact:'Find your layer.',cta:'Explore the pieces'}
  }[key];
  const detail=document.querySelector('.detail-section');
  const title=detail.querySelector('h2');title.innerHTML=content.heading.replace(/\.$/,'')+'<em>.</em>';
  detail.querySelector('.detail-heading>span').textContent='01 / '+content.label;
  detail.querySelector('.detail-heading p').textContent=site.intro;
  document.querySelector('.story-text h2').textContent=content.story;
  const contact=document.querySelector('.contact-section');
  contact.querySelector('h2').innerHTML=content.contact.replace(/\.$/,'')+'<em>.</em>';
  contact.querySelector('.demo-note').textContent='A visual concept by Ahmed Htira. Your name, content, imagery and contact details can make this site yours.';
  const more=contact.querySelector('a');
  more.textContent='EXPLORE MORE DESIGNS ↗';
  const email=document.createElement('a');
  email.className='concept-email';
  email.href='mailto:ahmedhtira1234@gmail.com?subject='+encodeURIComponent('Website concept: '+site.title);
  email.textContent='MAKE A SITE LIKE THIS ↗';
  more.before(email);
  detail.querySelectorAll('.detail-card').forEach((card,i)=>{
    card.setAttribute('tabindex','0');card.setAttribute('role','button');
    card.setAttribute('aria-label','View '+site.items[i][1]);
    card.querySelector('.card-copy').insertAdjacentHTML('beforeend','<span class="card-open">VIEW DETAILS ↗</span>');
    card.addEventListener('click',()=>open(i));
    card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();open(i)}});
  });
  const dialog=document.createElement('dialog');dialog.className='concept-dialog';
  dialog.innerHTML='<button class="dialog-close" aria-label="Close details">×</button><div class="dialog-image"></div><div class="dialog-copy"><small></small><h2></h2><p></p><a href="#contact">DISCOVER MORE ↗</a></div>';
  document.body.append(dialog);
  dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
  dialog.querySelector('a').addEventListener('click',()=>dialog.close());
  function open(i){
    const item=site.items[i];
    const image=i===0?site.image:i===1?site.extra:(site.thirdImage||site.image);
    dialog.querySelector('.dialog-image').style.backgroundImage='url("'+image+'")';
    dialog.querySelector('small').textContent=content.label+' / '+String(i+1).padStart(2,'0');
    dialog.querySelector('h2').textContent=item[1];dialog.querySelector('p').textContent=item[2]+'. '+site.intro;
    dialog.showModal();
  }
})();
