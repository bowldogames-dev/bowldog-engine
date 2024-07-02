const images = [
    { id: 1, text: "Adventure Capatalist", action: "redirectUrl", url: "https://than1089.github.io/adventure-capitalist", imgSrc: "image1.jpg" },
    { id: 2, text: "Retro Bowl", action: "redirectSrc", url: "/static/calculus/src/retro-bowl", imgSrc: "image2.jpg" },
    { id: 3, text: "Image 3", action: "redirectUrl", url: "https://roblox.com", imgSrc: "image3.jpg" },
];

const imageContainer = document.getElementById('image-container');
const searchBar = document.getElementById('search-bar');

function displayImages(filteredImages) {
    imageContainer.innerHTML = '';
    filteredImages.forEach(image => {
        const imageItem = document.createElement('div');
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
            redirectSrc(image.url);
        }
    }
}

function redirectUrl(url) {
    location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}

function redirectSrc(url) {
    location.href = url;
}

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredImages = images.filter(image => image.text.toLowerCase().includes(searchTerm));
    displayImages(filteredImages);
});

document.addEventListener('DOMContentLoaded', () => {
    displayImages(images);
});