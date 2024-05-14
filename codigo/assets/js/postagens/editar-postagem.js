window.onload = function() {
    let editPostId = localStorage.getItem('editPostId');
    let btnEditar = document.getElementById('editar-Infos');
    let formularioEdicao = document.querySelector('form');

    if (editPostId) {
        readPost(data => {
            let postagem = data.find(post => post.id === parseInt(editPostId));

            if (postagem) {
                document.getElementsByName('tituloPostagem')[0].value = postagem.titulo;
                document.getElementsByName('nomeAutor')[0].value = postagem.autor;
                document.getElementsByName('linkImagem')[0].value = postagem.link_imagem;
                document.getElementsByName('textoPostagem')[0].value = postagem.descricao;
            }
            else {
                console.error('Postagem não encontrada');
            }
        });
    }

    btnEditar.addEventListener('click', (e) => {
        let campoTitulo = document.getElementById('titulo-postagem').value;
        let campoAutor = document.getElementById('nome-autor').value;
        let campoLinkImagem = document.getElementById('link-imagem').value;
        let campoTextoPostagem = document.getElementById('texto-postagem').value;

        if (!formularioEdicao.checkValidity()) {
            displayMessage('Preencha todos os campos corretamente!', 'warning');
            return;
        }

        let postagem = {
            titulo: campoTitulo,
            autor: campoAutor,
            descricao: campoLinkImagem,
            link_imagem: campoTextoPostagem
        }

        updatePost(parseInt(editPostId), postagem);

        formularioEdicao.reset();
    });
};