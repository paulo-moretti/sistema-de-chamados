// Lógica de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    fetch('/sistema-de-chamados/backend/login.php', {
        method: 'POST',
        body: JSON.stringify({ username, password, rememberMe }),
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(data => {
          if (data.message) {
              alert(data.message);
              window.location.href = '/sistema-de-chamados/public/dashboard.html';
          } else {
              alert(data.error);
          }
      }).catch(err => console.error('Erro:', err));
});

// Lógica de cadastro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    fetch('/sistema-de-chamados/backend/register.php', {
        method: 'POST',
        body: JSON.stringify({ username: newUsername, password: newPassword }),
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(data => {
          if (data.message) {
              alert('Cadastro realizado com sucesso!');
              document.getElementById('registerForm').reset();
              // Alternar para a aba de login após cadastro
              document.querySelector('#login-tab').click();
          } else {
              alert(data.error);
          }
      }).catch(err => console.error('Erro:', err));
});
