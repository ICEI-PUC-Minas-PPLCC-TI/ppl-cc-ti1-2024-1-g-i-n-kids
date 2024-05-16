const apiUrl = 'https://49dd28ab-09e8-4ea8-8821-f809d96b3f78-00-38p61bxaux1od.spock.repl.co/postagens';

function createPost(post, updateFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage('Postagem criada com sucesso', 'success');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch(error => {
            console.error('Erro ao criar postagem via JSON Server:', error);
            displayMessage('Erro ao criar postagem', 'danger');
        });
}

function readPost(processData) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processData(data);
        })
        .catch(error => {
            console.error('Erro ao ler postagens via JSON Server:', error);
            displayMessage('Erro ao ler postagens', 'danger');
        });
}

function updatePost(id, post, updateFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage('Postagem alterada com sucesso', 'success');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch(error => {
            console.error('Erro ao atualizar postagem via JSON Server:', error);
            displayMessage('Erro ao atualizar postagem', 'danger');
        });
}

function deletePost(id, updateFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            location.reload();
            
            if (updateFunction) {
                updateFunction();
            }
        })
        .catch(error => {
            console.error('Erro ao remover postagem via JSON Server:', error);
        });
}