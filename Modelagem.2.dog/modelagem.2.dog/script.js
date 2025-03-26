let cachorrosFelizes = [];

function carregarFotosDeCachorrosFelizes () {
    let url = "https://dog.ceo/api/breeds/image/random/8"; // Alterado para 8 imagens, compatível com a imagem fornecida.

    fetch(url)
        .then(response => response.json())
        .then(data => {
            cachorros = data.message;
            let gallery = document.getElementById("gallery");
            gallery.innerHTML = "";

            cachorros.forEach(imageUrl => {
                let imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                imgElement.classList.add("dog-image");
                gallery.appendChild(imgElement);
            });

            iniciarTrocaAleatoria();
        })
        .catch(error => console.error("Erro ao carregar as fotos: ", error));
}

function iniciarTrocaAleatoria() {
    setInterval(() => {
        let imagens = document.querySelectorAll("#gallery img");
        if (imagens.length > 0) {
            let idAleatorio = Math.floor(Math.random() * imagens.length);

            fetch("https://dog.ceo/api/breeds/image/random")
                .then(response => response.json())
                .then(data => {
                    imagens[idAleatorio].src = data.message; 
                })
                .catch(error => console.error("Erro ao trocar a imagem: ", error));
        }
    }, 3000);
}