(function(){
  // Intersection Observer for load/scroll animations
  const ioObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.remove('opacity-0','translate-y-6');
        entry.target.classList.add('opacity-100','translate-y-0');
        ioObserver.unobserve(entry.target);
      }
    });
  },{threshold:0.1});
  document.querySelectorAll('.js-animate').forEach(el=>{
    // initial state
    el.classList.add('opacity-0','translate-y-6','transition-all','duration-500');
    ioObserver.observe(el);
  });

  // Lightbox for gallery (and any lightbox triggers)
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  document.addEventListener('click', (e)=>{
    if(e.target && e.target.classList.contains('lightbox-trigger')){
      const src = e.target.getAttribute('data-src');
      if(src){ lightboxImg.src = src; lightbox.classList.remove('hidden'); }
    }
  });
  lightbox?.addEventListener('click', (e)=>{
    if(e.target === lightbox || e.target.id === 'lightbox-close'){ lightbox.classList.add('hidden'); }
  });

  // Basic form validation (Contact)
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const form = ev.target;
    const name = form.name?.value?.trim();
    const email = form.email?.value?.trim();
    if(!name || !email){ document.getElementById('form-status')?.setAttribute('class','text-sm text-red-600'); document.getElementById('form-status')?.textContent = 'Please fill in name and email.'; return; }
    document.getElementById('form-status')?.setAttribute('class','text-sm text-green-600');
    document.getElementById('form-status')?.textContent = 'Thanks! Your message has been received.';
    form.reset();
  });

  // Newsletter signup (simple client-side)
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value.trim();
    if(!email){ alert('Please enter a valid email.'); return; }
    localStorage.setItem('aurora_newsletter', email);
    alert('Thanks for joining our newsletter!');
    newsletterForm.reset();
  });
})();
