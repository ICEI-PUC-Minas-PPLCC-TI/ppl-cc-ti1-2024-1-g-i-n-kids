const apiUrl = 'https://iandn-kids-server.vercel.app/posts';

function findAllPosts(processData) {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            processData(data.Posts);
        })
        .catch((error) => {
            console.error('Erro ao ler postagens cadastradas na API:', error);
            displayMessage('Erro ao ler postagens', 'danger');
        });
}

function findPostById(postId, processData) {
    fetch(`${apiUrl}/search/${postId}`)
        .then((response) => response.json())
        .then((data) => {
            processData(data.Post);
        })
        .catch((error) => {
            console.error(
                'Erro ao encontrar postagem cadastrada na API:',
                error
            );
            displayMessage('Erro ao ler postagem', 'danger');
        });
}

function createPost(post, updateFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    })
        .then((response) => response.json())
        .then((data) => {
            displayMessage('Postagem criada com sucesso', 'success');

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch((error) => {
            console.error('Erro ao criar postagem na API:', error);
            displayMessage('Erro ao criar postagem', 'danger');
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
        .then((response) => response.json())
        .then((data) => {
            if (updateFunction) {
                updateFunction();
            }
        })
        .catch((error) => {
            console.error('Erro ao atualizar postagem da API:', error);
            displayMessage('Erro ao atualizar postagem', 'danger');
        });
}

function deletePost(id, updateFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => {
            location.reload();

            if (updateFunction) {
                updateFunction();
            }
        })
        .catch((error) => {
            console.error('Erro ao remover postagem da API:', error);
        });
}
