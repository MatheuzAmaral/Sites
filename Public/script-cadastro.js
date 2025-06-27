document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', (e) => {
    errorMessage.textContent = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!emailRegex.test(email.value.trim())) {
      e.preventDefault();
      errorMessage.textContent = 'E-mail inválido.';
      return;
    }

    if (!passwordRegex.test(password.value.trim())) {
      e.preventDefault();
      errorMessage.textContent = 'Senha fraca. Use ao menos 6 caracteres, com maiúscula, minúscula e número.';
      return;
    }

    if (password.value !== confirmPassword.value) {
      e.preventDefault();
      errorMessage.textContent = 'As senhas não coincidem.';
      return;
    }

    alert('Conta criada com sucesso!');
    e.preventDefault(); // Simula o envio
  });
});
