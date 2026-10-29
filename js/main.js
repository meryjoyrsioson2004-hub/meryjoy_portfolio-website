/* Edit this object with your verified personal details before publishing. */
const portfolio = {
  name: 'Mery Joy Sioson',
  email: 'meryjoyrsioson2004@gmail.com',
  facebook: 'https://www.facebook.com/joy.sioson.2024',
  linkedin: 'https://www.linkedin.com/in/mery-joy-sioson-289470445/?isSelfProfile=true',
  whatsapp: 'https://wa.me/639950379527',
  github: 'https://github.com/',
  resume: 'assets/documents/SIOSON_RESUME.pdf',
  projects: [{ id: 'cacao', category: 'ai', title: 'CNN-Based Fermentation Monitoring and Optimization System for Quality Enhancement of Cacao Beans' }]
};

document.title = `Electronics Engineering Portfolio | ${portfolio.name}`;
document.querySelectorAll('.brand').forEach(link => { link.setAttribute('aria-label', `${portfolio.name}, home`); const label=link.querySelector('span:last-child'); if(label) label.innerHTML=`${portfolio.name}<span class="brand-dot">.</span>`; });
const emailLink=document.querySelector('.contact-email');
if(emailLink){emailLink.href=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.email)}`;emailLink.target="_blank";emailLink.rel="noreferrer";emailLink.innerHTML=`${portfolio.email} <span aria-hidden="true">↗</span>`;}
const heroSocials=document.querySelectorAll('.hero-socials a');
if(heroSocials[0])heroSocials[0].href=portfolio.facebook;
if(heroSocials[1])heroSocials[1].href=portfolio.linkedin;
if(heroSocials[2]){heroSocials[2].href=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.email)}`;heroSocials[2].target="_blank";heroSocials[2].rel="noreferrer";}
if(heroSocials[3])heroSocials[3].href=portfolio.whatsapp;
const social=document.querySelectorAll('.social-links a');
if(social[0])social[0].href=portfolio.facebook;
if(social[1])social[1].href=portfolio.linkedin;
document.querySelectorAll('a[href="assets/documents/SIOSON_RESUME.pdf"]').forEach(link=>link.href=portfolio.resume);
const year=document.querySelector('#year');
if(year)year.textContent=new Date().getFullYear();

const menuButton=document.querySelector('.menu-toggle'); const nav=document.querySelector('.site-nav');
function closeMenu(){if(!menuButton||!nav)return;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');nav.classList.remove('is-open');}
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('is-open',open);});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
}

const sections=[...document.querySelectorAll('main section[id]')];
if(nav&&'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${entry.target.id}`));}}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(section=>observer.observe(section));}

// Reveal section content as it enters the viewport; it remains visible if motion scripting is unavailable.
if('IntersectionObserver' in window){document.body.classList.add('motion-ready');const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('main > .section, .site-footer').forEach(section=>{section.classList.add('scroll-reveal');revealObserver.observe(section);});}

// Keep the About section's existing content-specific reveal sequence.
document.querySelectorAll('#about .about-label, #about .ece-cv-stamp, #about .about-intro, #about .about-description, #about .about-divider, #about .interest-title, #about .interest-tags, #about .about-contact-link').forEach(element=>element.classList.add('about-reveal'));

// Stagger headings, text, cards, lists, and controls throughout each section.
const revealItemSelector='.hero-copy > *, .hero-visual-column > *, .section-heading > *, .about-left > *, .about-right > *, .eyebrow, h1, h2, h3, p, li, figure, .skill-card, .skills-portrait, .filter-bar, .project-card, .project-footnote, .experience-card, .credential-card, .resume-banner, .contact-grid > *, .contact-panel, .social-links a, .footer-inner > *';
document.querySelectorAll('main > .section, .site-footer').forEach(section=>{
  [...section.querySelectorAll(revealItemSelector)].forEach((element,index)=>{
    if(element.classList.contains('about-reveal'))return;
    element.classList.add('item-reveal');
    element.style.setProperty('--item-reveal-delay',`${Math.min(index*42,360)}ms`);
  });
});
const filterButtons=[...document.querySelectorAll('.filter-button')]; const projectCards=[...document.querySelectorAll('.project-card')]; const emptyState=document.querySelector('.project-empty');
filterButtons.forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;let count=0;filterButtons.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});projectCards.forEach(card=>{const show=filter==='all'||card.dataset.category===filter;card.hidden=!show;if(show)count++;});if(emptyState)emptyState.hidden=count>0;}));

const dialog=document.querySelector('#project-dialog');
if(dialog){
  const closeButton=dialog.querySelector('.dialog-close');
  document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');}));
  if(closeButton)closeButton.addEventListener('click',()=>{if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');});
  dialog.addEventListener('click',event=>{if(event.target===dialog&&typeof dialog.close==='function')dialog.close();});
  dialog.addEventListener('close',()=>{const trigger=document.querySelector('[data-project="cacao"]');if(trigger)trigger.focus();});
}


