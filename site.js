(() => {
  document.querySelectorAll('[data-print]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => window.print());
  });
  document.querySelectorAll('[data-language]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('raha-site-language', link.dataset.language); } catch {}
    });
  });
  const pathname = location.pathname;
  if (pathname.endsWith('/') || pathname.endsWith('/index.html')) {
    try {
      if (localStorage.getItem('raha-site-language') === 'ar') location.replace('index-ar.html');
    } catch {}
  }
  document.querySelectorAll('.mobile-contents a').forEach(link => {
    link.addEventListener('click', () => link.closest('details').removeAttribute('open'));
  });
})();
