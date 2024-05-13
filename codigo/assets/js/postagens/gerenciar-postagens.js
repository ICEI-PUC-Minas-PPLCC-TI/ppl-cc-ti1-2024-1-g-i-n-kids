var db = [];

readPost(data => {
    db = data;
    listPosts();
});

function listPosts() {
    let divPostagens = document.getElementById('postagens');

    divPostagens.innerHTML = '';

    for (let i = 0; i < db.length; i++) {
        const post = db[i];

        divPostagens.innerHTML += `
                                    <div class="card" style="width: 18rem;">
                                        <h3 class="card-title">${post.titulo}</h3>
                                        <img class="card-img-top" src="${post.link_imagem}" alt="Imagem da postagem">
                                        <div class="card-body">
                                            <div class="icons">
                                                <i class="fa-regular fa-rectangle-xmark delete"></i>
                                                <a href="./editar-postagem.html"><i class="fa-solid fa-pen edit"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    `;
        }
}