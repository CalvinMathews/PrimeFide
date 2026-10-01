(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('themeToggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const savedTheme = localStorage.getItem('primefide-theme-v2');

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem('primefide-theme-v2', theme);
    themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    themeButton.title = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    themeMeta.content = theme === 'dark' ? '#111916' : '#f4f6ef';
  }

  setTheme(savedTheme || 'light');
  themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  if (root.classList.contains('show-splash')) {
    window.setTimeout(() => {
      root.classList.remove('show-splash');
      document.body.classList.add('brand-awake');
    }, 1550);
  } else {
    requestAnimationFrame(() => document.body.classList.add('brand-awake'));
  }

  const menuButton = document.getElementById('menuToggle');
  const menu = document.getElementById('navMenu');
  function closeMenu() {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menu.classList.toggle('is-open', open);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  function linkExpandableCards(selector) {
    const cards = [...document.querySelectorAll(selector)];
    let synchronizing = false;
    const equalize = () => {
      const sharedHeight = cards.some(card => card.open) ? Math.max(...cards.map(card => card.scrollHeight)) : 0;
      cards.forEach(card => { card.style.minHeight = sharedHeight ? `${sharedHeight}px` : ''; });
    };
    cards.forEach(card => card.addEventListener('toggle', () => {
      if (synchronizing) return;
      synchronizing = true;
      const shouldOpen = card.open;
      cards.forEach(other => { if (other.open !== shouldOpen) other.open = shouldOpen; });
      requestAnimationFrame(() => {
        equalize();
        synchronizing = false;
      });
    }));
    return equalize;
  }
  const equalizeCardGroups = [linkExpandableCards('.service-card'), linkExpandableCards('.standard-card')];
  window.addEventListener('resize', () => requestAnimationFrame(() => equalizeCardGroups.forEach(equalize => equalize())), { passive: true });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const subject = `Website enquiry — ${data.get('service')}`;
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Area: ${data.get('service')}`,
      '',
      String(data.get('message'))
    ].join('\n');
    formNote.textContent = 'Your email app is opening with your enquiry. You can send it from there.';
    window.location.href = `mailto:contact@primefideconsulting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
