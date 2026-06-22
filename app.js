const loginButtons = document.querySelectorAll('.login-btn, .primary-btn, .secondary-btn, .account-card button');
const themeButton = document.querySelector('.theme-btn');
const accountCards = document.querySelectorAll('.account-card');
const body = document.body;

function createLoginModal(role = '') {
  const oldModal = document.querySelector('.login-modal');
  if (oldModal) oldModal.remove();

  const modal = document.createElement('div');
  modal.className = 'login-modal';
  modal.innerHTML = `
    <div class="modal-box">
      <button class="close-modal">×</button>
      <h2>اختر نوع الدخول</h2>
      <p>حدد الحساب الذي تريد الدخول إليه في منصة آفاق التعليمية</p>
      <div class="modal-roles">
        <button data-role="student">🎓 الطالب</button>
        <button data-role="teacher">👨‍🏫 المعلم</button>
        <button data-role="parent">👨‍👩‍👧 ولي الأمر</button>
        <button data-role="admin">🛡️ المدير</button>
      </div>
      <div class="selected-role">${role ? 'تم اختيار: ' + role : 'لم يتم اختيار نوع الحساب بعد'}</div>
    </div>`;

  document.body.appendChild(modal);
  modal.querySelector('.close-modal').onclick = () => modal.remove();
  modal.addEventListener('click', (e) => { if (e.target.classList.contains('login-modal')) modal.remove(); });
  modal.querySelectorAll('.modal-roles button').forEach((btn) => {
    btn.onclick = () => {
      modal.querySelector('.selected-role').textContent = 'سيتم فتح تسجيل دخول: ' + btn.textContent.trim();
    };
  });
}

loginButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let role = '';
    if (button.closest('.student')) role = 'الطالب';
    if (button.closest('.teacher')) role = 'المعلم';
    if (button.closest('.parent')) role = 'ولي الأمر';
    if (button.closest('.admin')) role = 'المدير';
    createLoginModal(role);
  });
});

accountCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.03)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
  });
});

if (themeButton) {
  themeButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeButton.textContent = body.classList.contains('light-mode') ? '🌙' : '☀️ 🌙';
  });
}
