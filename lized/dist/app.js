// Set the real WhatsApp number, with country and area code, when supplied.
const WHATSAPP_NUMBER = '554588084656';
const contactDialog = document.querySelector('#contact-dialog');
function openDialog(dialog) { document.querySelectorAll('dialog[open]').forEach(d => d.close()); dialog.showModal(); }
document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', () => openDialog(contactDialog)));
document.querySelectorAll('[data-faq]').forEach(button => button.addEventListener('click', () => openDialog(document.querySelector('#faq-dialog'))));
document.querySelectorAll('dialog').forEach(dialog => { dialog.querySelector('.close').addEventListener('click', () => dialog.close()); dialog.addEventListener('click', event => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close(); } }); });
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => { const open = document.querySelector('.header nav').classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
document.querySelectorAll('.header nav a').forEach(link => link.addEventListener('click', () => { document.querySelector('.header nav').classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));
const projects = [ {name:'Nexora',type:'Tecnologia',style:'nexora',description:'Soluções digitais para um futuro mais inteligente. Uma presença digital com personalidade, inovação e foco no negócio.'}, {name:'Belleza',type:'Beleza e Estética',style:'belleza',description:'Realce sua melhor versão. Um conceito de site elegante e acolhedor para o universo da beleza e estética.'}, {name:'MoveFit',type:'Saúde e Bem-estar',style:'movefit',description:'Disciplina gera resultados. Uma experiência visual marcante para conectar pessoas a uma vida mais ativa.'} ];
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => { const project=projects[Number(button.dataset.project)]; document.querySelector('#project-title').textContent=project.name; document.querySelector('#project-description').textContent=project.description; document.querySelector('.project-preview').className='project-preview '+project.style; openDialog(document.querySelector('#project-dialog')); }));
document.querySelectorAll('[data-slide]').forEach(button=>button.addEventListener('click',()=>{ const grid=document.querySelector('.project-grid'); if(window.innerWidth<=760){grid.scrollBy({left:Number(button.dataset.slide)*grid.clientWidth*.88,behavior:'smooth'});}else{if(Number(button.dataset.slide)>0)grid.append(grid.firstElementChild);else grid.prepend(grid.lastElementChild);} }));
document.querySelector('#contact-form').addEventListener('submit',event=>{event.preventDefault(); const data=new FormData(event.currentTarget); const text=`Olá, Lized! Meu nome é ${data.get('name')}.\nMeu negócio: ${data.get('business')}.\nQuero um site: ${data.get('message')}`; if(WHATSAPP_NUMBER){window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer');}else{document.querySelector('#request-text').value=text;document.querySelector('#contact-result').hidden=false;document.querySelector('#copy-status').textContent='Solicitação preparada. O canal de contato da Lized ainda será disponibilizado.';document.querySelector('#contact-result').scrollIntoView({block:'nearest',behavior:'smooth'});} });
document.querySelector('#copy-request').addEventListener('click',async()=>{const field=document.querySelector('#request-text');try{await navigator.clipboard.writeText(field.value);document.querySelector('#copy-status').textContent='Solicitação copiada!';}catch{field.focus();field.select();document.querySelector('#copy-status').textContent='Selecione e copie o texto da solicitação.';}});
if(WHATSAPP_NUMBER){document.querySelector('#contact-form button[type="submit"]').firstChild.textContent='Continuar no WhatsApp ';document.querySelector('.form-note').textContent='Você poderá revisar sua mensagem no WhatsApp antes de enviar.';}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.header nav a').forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-15% 0px -55% 0px'});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion){
  const reveals=document.querySelectorAll('.reveal');
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  },{threshold:.14,rootMargin:'0px 0px -6% 0px'});
  reveals.forEach(el=>revealObserver.observe(el));
}else{
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));
}
