var db = [];

readPost(data => {
    db = data;
    listPosts();
});

function listPosts() {
    let divpostagens = document.querySelector('main');

    divpostagens.innerHTML = '';

    if (db.length > 0) {
        const post = db[0];

        divpostagens.innerHTML += `
            <h2 id="titulo">${post.titulo}</h2>
            <section id="content">
                <img src="${post.link_imagem}" alt="Imagem da postagem">
                <p id="autor">Por <span>${post.autor}</span></p>
                <p id="descricao">
                    ${post.descricao}
                </p>
                <div id="mais">
                    <a href="./postagens.html"><p id="ver-mais">Ver mais postagens</p></a>
                </div>
            </section>
        `;
    }
}