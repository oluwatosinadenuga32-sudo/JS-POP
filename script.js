 function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + pageId);
    if (page) page.classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById('nav-' + pageId);
    if (activeBtn) activeBtn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const burger = document.getElementById('hamburger');
  menu.classList.toggle('open');
  burger.classList.toggle('open'); // ← was toggling '' (empty string)
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = '#22c55e';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Request';
      btn.style.background = '';
      btn.style.color = '';
      e.target.reset();
    }, 3000);
  }