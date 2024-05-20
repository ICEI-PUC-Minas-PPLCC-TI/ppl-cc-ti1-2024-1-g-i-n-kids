function init() {
    let formularioPostagem = document.querySelector('form');
    let btnCadastrarPostagem = document.getElementById('btnCadastrarPostagem');

    btnCadastrarPostagem.addEventListener('click', (e) => {
        let campoTitulo = document.getElementById('titulo-postagem').value;
        let campoNomeAutor = document.getElementById('nome-autor').value;
        let campoLinkImagem = document.getElementById('link-imagem').value;
        let campoTextoPostagem = document.getElementById('texto-postagem').value;

        e.preventDefault();

        if (!formularioPostagem.checkValidity()) {
            displayMessage('Preencha o formulário corretamente.', 'warning');
            return;
        }

        if (campoTitulo.trim().length < 5) {
            displayMessage('O título da postagem deve ter pelo menos 5 caracteres.', 'warning');
            return;
        }

        if (campoNomeAutor.trim().length < 10) {
            displayMessage('O nome do autor deve ter pelo menos 10 caracteres.', 'warning');
            return;
        }

        if (campoTextoPostagem.trim().length < 100) {
            displayMessage('O texto da postagem deve ter pelo menos 100 caracteres.', 'warning');
            return;
        }

        let postagem = {
            titulo: campoTitulo, 
            autor: campoNomeAutor, 
            link_imagem: campoLinkImagem,
            descricao: campoTextoPostagem
        };

        createPost(postagem);

        formularioPostagem.reset();
    });
}