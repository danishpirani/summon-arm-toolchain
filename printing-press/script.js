const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', String(!isOpen));
		nav.classList.toggle('open');
	});
}

// Simple progressive enhancement for mobile nav
const style = document.createElement('style');
style.textContent = `
	@media (max-width: 860px) {
		.nav { position: fixed; inset: 64px 14px auto; background: #0f1320; border: 1px solid #1f2430; border-radius: 14px; padding: 10px; display: grid; gap: 6px; box-shadow: 0 10px 30px rgba(0,0,0,.35); transform-origin: top right; transform: scale(.98); opacity: 0; pointer-events: none; }
		.nav.open { opacity: 1; transform: none; pointer-events: auto; }
		.nav a { padding: 10px 12px; border-radius: 8px; }
		.nav a:hover { background: #111827; }
	}
`;
document.head.appendChild(style);

// Dynamic year
document.getElementById('year').textContent = String(new Date().getFullYear());