const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('height: 100%');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

