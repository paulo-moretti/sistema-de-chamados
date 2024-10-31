document.addEventListener('DOMContentLoaded', () => {
    const pendingList = document.getElementById('pendingTickets');
    const inProgressList = document.getElementById('inProgressTickets');
    const completedList = document.getElementById('completedTickets');

    [pendingList, inProgressList, completedList].forEach(list => {
        new Sortable(list, {
            group: 'shared',
            animation: 150,
            onEnd: function(evt) {
                const id = evt.item.dataset.id;
                const newStatus = evt.to.id === 'pendingTickets' ? 'Pendente' :
                                  evt.to.id === 'inProgressTickets' ? 'Em Andamento' : 'Concluído';
                updateTicketStatus(id, newStatus);
            }
        });
    });

    function updateTicketStatus(id, status) {
        fetch('/sistema-de-chamados/backend/updateTicket.php', {
            method: 'POST',
            body: JSON.stringify({ id, status }),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
          .then(data => {
              if (data.message) {
                  alert('Status atualizado com sucesso!');
              } else {
                  alert('Erro ao atualizar status: ' + data.error);
              }
          }).catch(err => console.error('Erro:', err));
    }
});
