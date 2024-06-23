const images = [
    { id: 1, text: "Invidious (youtube alt)", url: "https://invidious.jing.rocks", imgSrc: "/img/edu/iv.png" },
    { id: 2, text: "Google", url: "https://google.com", imgSrc: "/img/edu/google.jpg" },
    { id: 3, text: "Nunflix", url: "https://nunflix.com", imgSrc: "/img/edu/nunflix.png" },
    { id: 4, text: "YouTube Music", url: "https://music.youtube.com", imgSrc: "/img/edu/ytm.avif" },
    { id: 3, text: "Cool Math Games", url: "https://coolmathgames.com", imgSrc: "/img/edu/mathgames.png" }
];

const imageContainer = document.getElementById('image-container');
const searchBar = document.getElementById('search-bar');

function displayImages(filteredImages) {
    imageContainer.innerHTML = '';
    filteredImages.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `
            <img src="${image.imgSrc}" alt="${image.text}" onclick="redirect('${image.url}')">
            <p>${image.text}</p>
        `;
        imageContainer.appendChild(imageItem);
    });
}

function redirect(url) {
    location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredImages = images.filter(image => image.text.toLowerCase().includes(searchTerm));
    displayImages(filteredImages);
});

document.addEventListener('DOMContentLoaded', () => {
    displayImages(images);
});
