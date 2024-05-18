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
                                          
                                          <img class="card-img-top" src="${post.link_imagem}" alt="Imagem da Postagem 1">
                                          <div class="card-body">
                                            <div class="descricao">
                                              <h3 class="card-title">${post.titulo}</h3>
                                              <h5 class="autor">${post.autor}
                                            </div>
                                          </div>
                                        </div>`;
        }
    }