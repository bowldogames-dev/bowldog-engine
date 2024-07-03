const images = [
    { id: 1, text: "Adventure Capatalist", action: "redirectUrl", url: "https://than1089.github.io/adventure-capitalist", imgSrc: "/img/sci/adventurecap.png" },
    { id: 2, text: "Retro Bowl", action: "redirectCdn", fileName: "retro-bowl", imgSrc: "/img/sci/rb.avif" },
    { id: 3, text: "ROBL0X", action: "redirectUrl", url: "https://d886g6-8080.csb.app/", imgSrc: "/img/sci/rblx.png" },
    { id: 4, text: "1", action: "redirectCdn", fileName: "1", imgSrc: "/img/sci/one.png" },
    { id: 5, text: "1v1.LOL Old", action: "redirectSrc", src: "/static/calculus/source/1v1-lol/old", imgSrc: "/img/sci/1v1-lol.webp" },
    { id: 6, text: "1v1.LOL NEW", action: "redirectSrc", src: "/static/calculus/source/1v1.lol/new", imgSrc: "/img/sci/1v1lol.jpg" },
    { id: 7, text: "Achievement Unlocked", action: "redirectSrc", src: "/static/calculus/source/achievement-unlocked", imgSrc: "/img/sci/achievement.webp" },
    { id: 8, text: "Achievement Unlocked 2", action: "redirectSrc", src: "/static/calculus/source/achievement-unlocked/2/", imgSrc: "/img/sci/achievement-2.png" },
    { id: 9, text: "Achievement Unlocked 3", action: "redirectSrc", src: "/static/calculus/source/achievement-unlocked/3/", imgSrc: "/img/sci/achievement-3.webp" },
    { id: 10, text: "Slope", action: "redirectSrc", src: "/static/calculus/source/slope", imgSrc: "/img/sci/slope.jpeg" },
    { id: 11, text: "Eaglercraft 1.3.3 (old)", action: "redirectSrc", src: "/static/calculus/source/eaglercraft/133", imgSrc: "/img/sci/133.jpeg" },
    { id: 12, text: "Eaglercraft 1.5.2 (local)", action: "redirectSrc", src: "/static/calculus/source/", imgSrc: "/img/sci/152.jpeg" },
    { id: 13, text: "Eaglercraft 1.8.8 (server)", action: "redirectSrc", src: "/static/calculus/source/", imgSrc: "/img/sci/eaglercraft.jpg" },
    { id: 14, text: "Eaglercraft 1.8.9", action: "redirectSrc", src: "/static/calculus/source/", imgSrc: "/img/sci/189.jpg" }
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