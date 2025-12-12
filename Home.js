
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
