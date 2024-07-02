const taskRouteUrl = 'https://iandn-kids-server.vercel.app/tasks';

function findAllTasks(processData) {
    fetch(taskRouteUrl, {
        headers: {
            Authorization: 'Bearer gPqH84KLJz5SjcP',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            processData(data.Tasks);
        })
        .catch((error) => {
            console.error('Erro ao encontrar tarefas na API:', error);
            displayMessage('Erro ao encontrar tarefas.', 'danger');
        });
}

function findTaskById(taskId, processData) {
    fetch(`${taskRouteUrl}/search/${taskId}`, {
        headers: {
            Authorization: 'Bearer gPqH84KLJz5SjcP',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            processData(data.Post);
        })
        .catch((error) => {
            console.error(
                'Erro ao encontrar postagem cadastrada na API:',
                error
            );
            displayMessage('Erro ao ler postagem.', 'danger');
        });
}

function createTask(task, updateFunction) {
    fetch(taskRouteUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer gPqH84KLJz5SjcP',
        },
        body: JSON.stringify(task),
    })
        .then((response) => response.json())
        .then((data) => {
            displayMessage('Tarefa criada com sucesso.', 'success');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch((error) => {
            console.error('Erro ao criar tarefa na API:', error);
            displayMessage('Erro ao criar tarefa.', 'danger');
        });
}

function deleteTask(id, updateFunction) {
    fetch(`${taskRouteUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer gPqH84KLJz5SjcP',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            displayMessage('Tarefa removida com sucesso.', 'primary');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch((error) => {
            console.error('Erro ao remover tarefa da API:', error);
            displayMessage('Erro ao remover tarefa.', 'danger');
        });
}
