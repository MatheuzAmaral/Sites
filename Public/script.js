document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', (e) => {
    errorMessage.textContent = ''; // Limpa mensagens anteriores

    // Validação de e-mail
    const emailValue = username.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      e.preventDefault();
      errorMessage.textContent = 'Por favor, insira um e-mail válido.';
      return;
    }

    // Validação de senha
    const passwordValue = password.value.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(passwordValue)) {
      e.preventDefault();
      errorMessage.textContent = 'A senha deve ter no mínimo 6 caracteres, com pelo menos uma letra maiúscula, uma minúscula e um número.';
      return;
    }
  });
});
