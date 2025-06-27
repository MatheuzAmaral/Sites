document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('forgotForm');
  const email = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', (e) => {
    errorMessage.textContent = '';

    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      e.preventDefault();
      errorMessage.textContent = 'Digite um e-mail válido.';
      return;
    }

    alert('Instruções de recuperação foram enviadas para seu e-mail.');
    e.preventDefault(); // Simula envio
  });
});
