function init(){
    let formularioContatos = document.querySelector('form');
    let btnCadastrarContatos = document.getElementById('btnCadastrarContato');

    btnCadastrarContatos.addEventListener('click',()=>{
        let campoNome = document.getElementById('nome').value;
        let campoEmail = document.getElementById('email').value;
        let campoMensagem = document.getElementById('mensagem').value;

        if (!formularioContatos.checkValidity()) {
            displayMessage('Preencha o formulário corretamente.', 'warning');
            return;
        }

        let contatos = {
            nome_usuario: campoNome,
            email: campoEmail,
            mensagem: campoMensagem,
        };

        createContact(contatos);

        formularioContatos.reset();

    });
}