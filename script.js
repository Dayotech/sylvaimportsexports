
const toggle = document.querySelector('[data-menu-toggle]');
const panel = document.querySelector('[data-mobile-panel]');
if (toggle && panel) {
  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}
const form = document.getElementById('whatsappForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      'Hello, I want to make an inquiry.',
      '',
      `Name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Company: ${data.get('company') || ''}`,
      `Product: ${data.get('product') || ''}`,
      `Message: ${data.get('message') || ''}`
    ];
    const message = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/22871492295?text=${message}`, '_blank');
  });
}
