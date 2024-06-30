var db = [];

findAllPosts((data) => {
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
            post.title.includes(filtroTema) ||
            post.content.includes(filtroTema) ||
            filtroTema === ''
        ) {
            divpostagens.innerHTML += `
                                        <div class="card" style="width: 18rem;" data-id="${post._id}">
                                            <img class="card-img-top" src="${post.imageLink}" alt="Imagem da postagem ${post.title}">
                                            <div class="card-body">
                                                <div class="descricao">
                                                    <h3 class="card-title">${post.title}</h3>
                                                    <h5 class="autor">${post.author}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        `;
        }
    }

    let postCards = document.querySelectorAll('.card');
    postCards.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.preventDefault();

            let postId = card.getAttribute('data-id');
            window.location.href = `./detalhes-postagem.html?postId=${postId}`;
        });
    });
}

document
    .getElementById('search-form')
    .addEventListener('submit', function (e) {
        e.preventDefault();
        listPosts();
    });
