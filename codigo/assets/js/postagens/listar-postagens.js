var db = [];


readPost(data => {
    db = data;
    listPosts();
});
function listPosts() {
    let divpostagens = document.getElementById('postagens');

    divpostagens.innerHTML = '';

    for (let i = 0; i < db.length; i++) {
        const post = db[i];

            divpostagens.innerHTML += `
                                        <div class="card" style="width: 18rem;">
                                          <h3 class="card-title">${post.titulo} 1</h3>
                                          <img class="card-img-top" src="${post.link_imagem}" alt="Imagem da Postagem 1">
                                          <div class="card-body">
                                            <div class="descricao">
                                            </div>
                                          </div>
                                        </div>`;
        }
    }