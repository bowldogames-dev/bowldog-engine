const images = [
    { id: 1, text: "Invidious (youtube alt)", url: "https://invidious.drgns.space", imgSrc: "/img/edu/iv.png" },
    { id: 2, text: "Google", url: "https://google.com", imgSrc: "/img/edu/google.jpg" },
    { id: 3, text: "Nunflix", url: "https://nunflix.com", imgSrc: "/img/edu/nunflix.png" },
    { id: 4, text: "YouTube Music", url: "https://music.youtube.com", imgSrc: "/img/edu/ytm.avif" },
    { id: 5, text: "Cool Math Games", url: "https://coolmathgames.com", imgSrc: "/img/edu/mathgames.png" },
    { id: 6, text: "Geforce Now", url: "https://play.geforcenow.com", imgSrc: "/img/edu/gfn.jpeg" },
    { id: 7, text: "Twitch", url: "https://twitch.tv", imgSrc: "/img/edu/twitch.jpeg" },
    { id: 8, text: "Reddit", url: "https://reddit.com", imgSrc: "/img/edu/reddit.png" }
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
        redirect(image.url);
    }
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
