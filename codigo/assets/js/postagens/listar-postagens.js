var db = [];
readPosts(data => {
    db = data;
    listPosts();
});
function listContacts() {
    let divpostagens = document.getElementById('postagens');

    divpostagens.innerHTML = '';

    for (let i = 0; i < db.length; i++) {
        const post = db[i];

            divpostagens.innerHTML += `<div class="card-container">
            <div class="card">
              <a href="#">
                <h3>${post.titulo}</h3>
                <img src="${post.link_imagem}" alt="Imagem Card" />
                <div class="card-content">
                  <h3>Descrição</h3>
                  <p>Descrição</p>
                </div>
              </a>
            </div>
          </div>`;
        }
    }