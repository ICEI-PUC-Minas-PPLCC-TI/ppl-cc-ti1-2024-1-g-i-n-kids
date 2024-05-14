function init() {
    let formularioPostagem = document.querySelector('form');
    let btnCadastrarPostagem = document.getElementById('btnCadastrarPostagem');

    btnCadastrarPostagem.addEventListener('click', () => {
        let campoTitulo = document.getElementById('tituloPostagem').value;
        let campoNomeAutor = document.getElementById('nomeAutor').value;
        let campoLinkImagem = document.getElementById('linkImagem').value;
        let campoTextoPostagem = document.getElementById('textoPostagem').value;

        if (!formularioPostagem.checkValidity()) {
            displayMessage('Preencha o formulário corretamente.', 'warning');
            return;
        }

        let postagem = {
            titulo: campoTitulo, 
            autor: campoNomeAutor, 
            descricao: campoTextoPostagem, 
            link_imagem: campoLinkImagem
        };

        createPost(postagem);

        formularioPostagem.reset();
    });
}