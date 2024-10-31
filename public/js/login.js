document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/sistema-de-chamados/backend/login.php', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(data => {
          if (data.message) {
              alert(data.message);
              window.location.href = '/sistema-de-chamados/public/dashboard.html'; // Redireciona para a dashboard
          } else {
              alert(data.error);
          }
      }).catch(err => console.error('Erro:', err));
});
