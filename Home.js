// Mobile menu toggle, focus-trap for mobile nav, and header hide-on-scroll
(function(){
 
  const siteTopbar = document.getElementById('siteTopbar');
  let lastScroll = window.scrollY || 0;
  function openMenu(){
    menuToggle.setAttribute('aria-expanded','true');
    mobileNav.setAttribute('aria-hidden','false');
    document.documentElement.style.overflow = 'hidden';
    // move focus to first link
    const firstLink = mobileNav.querySelector('a');
    if(firstLink) firstLink.focus();
    // trap focus simple
    document.addEventListener('focus', trapFocus, true);
  }
  function closeMenu(){
    menuToggle.setAttribute('aria-expanded','false');
    mobileNav.setAttribute('aria-hidden','true');
    document.documentElement.style.overflow = '';
    menuToggle.focus();
    document.removeEventListener('focus', trapFocus, true);
  }
  function trapFocus(e){
    if(!mobileNav.contains(e.target) && menuToggle.getAttribute('aria-expanded') === 'true'){
      e.stopPropagation();
      mobileNav.querySelector('a')?.focus();
    }
  }
  menuToggle && menuToggle.addEventListener('click', function(){
    const open = this.getAttribute('aria-expanded') === 'true';
    if(open) closeMenu(); else openMenu();
  });
  // close on outside click or ESC
  mobileNav && mobileNav.addEventListener('click', function(e){
    if(e.target === mobileNav) closeMenu();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      if(menuToggle.getAttribute('aria-expanded') === 'true') closeMenu();
    }
  });

  // simple hide-on-scroll header: hide when scrolling down, show when up
  let ticking = false;
  window.addEventListener('scroll', function(){
    if(!ticking){
      window.requestAnimationFrame(() => {
        const current = window.scrollY;
        if(current > lastScroll && current > 80){
          siteTopbar.classList.add('topbar--hidden');
        } else {
          siteTopbar.classList.remove('topbar--hidden');
        }
        lastScroll = current;
        ticking = false;
      });
      ticking = true;
    }
  });
  // close mobile menu when nav links are clicked
  document.querySelectorAll('#mobileNav a').forEach(a => a.addEventListener('click', closeMenu));
})();
