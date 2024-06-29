let userId = localStorage.getItem('userId');

if (!userId) {
    Swal.fire({
        title: 'Acesso restrito',
        text: 'Por favor, faça login para continuar.',
        icon: 'warning',
        confirmButtonColor: '#d6bdff',
    }).then(() => {
        window.location.replace('../usuario/login.html');
    });
}

var db = [];

findAllPosts((data) => {
    db = data;
    listPosts();
});

function listPosts() {
    let divPostagens = document.querySelector('#container #postagens');
    let mensagemAviso = document.querySelector('main #container h5');

    divPostagens.innerHTML = '';
    mensagemAviso.innerHTML = '';

    let userHasPosts = false;

    if (db.length > 0) {
        for (let i = 0; i < db.length; i++) {
            const post = db[i];

            if (post.userId == userId) {
                userHasPosts = true;
                divPostagens.innerHTML += `
                        <div class="card" style="width: 18rem;" data-id="${post._id}">
                            <h3 class="card-title">${post.title}</h3>
                            <img class="card-img-top" src="${post.imageLink}" alt="Imagem da postagem">
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
    }

    if (!userHasPosts) {
        mensagemAviso.innerHTML = 'Você ainda não fez nenhuma postagem';
    }

    init();
}

function init() {
    let btnDelete = document.getElementsByClassName('delete');
    let btnEdit = document.getElementsByClassName('edit');

    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].addEventListener('click', function () {
            let card = this.closest('.card');
            let cardId = card.dataset.id;

            deletePost(cardId);
        });
    }

    for (let i = 0; i < btnEdit.length; i++) {
        btnEdit[i].addEventListener('click', function () {
            let card = this.closest('.card');
            let cardId = card.dataset.id;

            localStorage.setItem('editPostId', cardId);
        });
    }
}
