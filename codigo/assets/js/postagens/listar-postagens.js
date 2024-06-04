var db = [];

readPost((data) => {
    db = data;
    listPosts();
});

function listPosts() {
    let divpostagens = document.getElementById('postagens');
    let filtroTema = document.getElementById('filtro-tema').value;

    divpostagens.innerHTML = '';

    for (let i = 0; i < db.length; i++) {
        const post = db[i];

        if (
            post.titulo.includes(filtroTema) ||
            post.descricao.includes(filtroTema) ||
            filtroTema == ''
        ) {
            divpostagens.innerHTML += `
                                        <a href="./detalhes-postagem.html">
                                            <div class="card" style="width: 18rem;">
                                                <img class="card-img-top" src="${post.link_imagem}" alt="Imagem da Postagem 1">
                                                <div class="card-body">
                                                    <div class="descricao">
                                                        <h3 class="card-title">${post.titulo}</h3>
                                                        <h5 class="autor">${post.autor}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    `;
        }
    }
}

document
    .getElementById('search-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        listPosts();
    });
