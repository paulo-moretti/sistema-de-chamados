document.getElementById('submitTicket').addEventListener('click', () => {
    const description = document.getElementById('description').value;

    fetch('/sistema-de-chamados/backend/createTicket.php', {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(data => {
          alert(data.message || data.error);
      }).catch(err => console.error(err));
});
