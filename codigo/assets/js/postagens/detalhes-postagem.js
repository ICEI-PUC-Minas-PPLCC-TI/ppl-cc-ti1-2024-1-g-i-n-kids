document.addEventListener('DOMContentLoaded', () => {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    let postId = getQueryParam('postId');

    if (postId) {
        findPostById(postId, (post) => {
            displayPostDetails(post);
        });
    }
});

function displayPostDetails(post) {
    let divpostagens = document.querySelector('main');

    divpostagens.innerHTML = '';

    if (post) {
        const content = post.content
            .split('\n')
            .map((paragraph) => `<p>${paragraph}</p>`)
            .join('');

        divpostagens.innerHTML = `
            <h2 id="titulo">${post.title}</h2>
            <section id="content">
                <img src="${post.imageLink}" alt="Imagem da postagem">
                <p id="autor">Por <span>${post.author}</span></p>
                <div id="descricao">
                    ${content}
                </div>
                <div id="mais">
                    <a href="./postagens.html"><p id="ver-mais">Ver mais postagens</p></a>
                </div>
            </section>
        `;
    }
}
