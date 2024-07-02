const images = [
    { id: 1, text: "Adventure Capatalist", action: "redirectUrl", url: "https://than1089.github.io/adventure-capitalist", imgSrc: "/img/sci/adventurecap.png" },
    { id: 2, text: "Retro Bowl", action: "redirectCdn", fileName: "retro-bowl", imgSrc: "/img/sci/rb.avif" },
    { id: 3, text: "ROBL0X", action: "redirectUrl", url: "https://d886g6-8080.csb.app/", imgSrc: "/img/sci/rblx.png" },
    { id: 4, text: "1", action: "redirectCdn", fileName: "1", imgSrc: "/img/sci/one.png" }
];

const imageContainer = document.getElementById('image-container');
const searchBar = document.getElementById('search-bar');

function displayImages(filteredImages) {
    imageContainer.innerHTML = '';
    filteredImages.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `
            <div class="image-item" onclick="handleAction(${image.id})">
            <img src="${image.imgSrc}" alt="${image.text}">
            <p>${image.text}</p>
            </div>
        `;
        imageContainer.appendChild(imageItem);
    });
}

function handleAction(id) {
    const image = images.find(img => img.id === id);
    if (image) {
        if (image.action === 'redirectUrl') {
            redirectUrl(image.url);
        } else if (image.action === 'redirectSrc') {
            redirectSrc(image.src, image.text);
        } else if (image.action === 'redirectCdn') {
            redirectCdn(image.fileName, image.text);
        }
    }
}

function redirectUrl(url) {
    location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}

function redirectSrc(src, text) {
    location.href = `/static/calculus/src.html?mylearningexperience=${encodeURIComponent(src)}&text=${encodeURIComponent(text)}`;
}

function redirectCdn(fileName, text) {
    const url = `https://library.algebrafordummies.fun/GalacticNetwork/3kh0-assets/main/${fileName}/index.html`;
    location.href = `/static/calculus/src.html?mylearningexperience=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
}

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredImages = images.filter(image => image.text.toLowerCase().includes(searchTerm));
    displayImages(filteredImages);
});

document.addEventListener('DOMContentLoaded', () => {
    displayImages(images);
});