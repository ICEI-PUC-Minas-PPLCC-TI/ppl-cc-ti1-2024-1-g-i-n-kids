const apiUrl = 'SEU_LINK';

function createTask(task, updateFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage('Tarefa criada com sucesso', 'success');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch(error => {
            console.error('Erro ao criar tarefa via JSON Server:', error);
            displayMessage('Erro ao criar tarefa', 'danger');
        });
}

function readTask(processData) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processData(data);
        })
        .catch(error => {
            console.error('Erro ao encontrar tarefas via JSON Server:', error);
            displayMessage('Erro ao encontrar tarefas', 'danger');
        });
}

function updateTask(id, task, updateFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage('Tarefa alterada com sucesso', 'success');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch(error => {
            console.error('Erro ao atualizar tarefa via JSON Server:', error);
            displayMessage('Erro ao atualizar tarefa', 'danger');
        });
}

function deleteTask(id, updateFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage('Tarefa removida com sucesso', 'success');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch(error => {
            console.error('Erro ao remover tarefa via JSON Server:', error);
            displayMessage('Erro ao remover tarefa', 'danger');
        });
}