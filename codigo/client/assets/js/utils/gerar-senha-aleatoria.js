function gerarSenhaAleatoria() {
    const caracteres =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:?-=[];/';
    const comprimentoSenha = 10;
    let senha = '';

    for (let i = 0; i < comprimentoSenha; i++) {
        const indiceCaractere = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indiceCaractere);
    }

    return senha;
}
