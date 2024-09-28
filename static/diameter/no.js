const images = [{
        id: 1,
        text: "Invidious (youtube alt)",
        url: "https://iv.nboeck.de",
        imgSrc: "/img/edu/iv.png"
    },
    {
        id: 2,
        text: "Google",
        url: "https://google.com",
        imgSrc: "/img/edu/google.jpg"
    },
    {
        id: 3,
        text: "Nunflix",
        url: "https://nunflix.com",
        imgSrc: "/img/edu/nunflix.png"
    },
    {
        id: 4,
        text: "YouTube Music",
        url: "https://music.youtube.com",
        imgSrc: "/img/edu/ytm.avif"
    },
    {
        id: 5,
        text: "Cool Math Games",
        url: "https://coolmathgames.com",
        imgSrc: "/img/edu/mathgames.png"
    },
    {
        id: 6,
        text: "Geforce Now",
        url: "https://play.geforcenow.com",
        imgSrc: "/img/edu/gfn.jpeg"
    },
    {
        id: 7,
        text: "Twitch",
        url: "https://twitch.tv",
        imgSrc: "/img/edu/twitch.jpeg"
    },
    {
        id: 8,
        text: "Reddit",
        url: "https://reddit.com",
        imgSrc: "/img/edu/reddit.png"
    },
    {
        id: 9,
        text: "TikTok",
        url: "https://tiktok.com",
        imgSrc: "/img/edu/tiktok.png"
    },
    {
        id: 10,
        text: "Aptoide",
        url: "https://renderisgay.onrender.com/apps/aptoide/5874/aptoide-2.html?app_pkg=com.roblox.client&partner=gamenora",
        imgSrc: "/img/edu/aptoide.webp"
    },
    {
        id: 11,
        text: "Amazon Luna",
        url: "https://luna.amazon.com",
        imgSrc: "/img/edu/amazon-luna.png"
    },
    {
        id: 12,
        text: "Character.AI",
        url: "https://c.ai",
        imgSrc: "/img/edu/cai.png"
    },
    {
        id: 13,
        text: "123Movies",
        url: "https://0123movie.net",
        imgSrc: "/img/edu/123movies.png"
    },
    {
        id: 14,
        text: "Movie Web",
        url: "https://sudo-flix.lol",
        imgSrc: "/img/edu/mw.png"
    },
    {
        id: 15,
        text: "Poki",
        url: "https://poki.com",
        imgSrc: "/img/edu/poki.png"
    },
    {
        id: 16,
        text: "VS Code",
        url: "https://vscode.dev",
        imgSrc: "/img/edu/vsc.png"
    },
    {
        id: 17,
        text: "SoundCloud",
        url: "https://soundcloud.com",
        imgSrc: "/img/edu/soundcloud.png"
    },
    {
        id: 18,
        text: "Instagram",
        url: "https://now.gg/apps/instagram/1228/instagram.html?app_pkg=com.roblox.client&partner=gamenora",
        imgSrc: "/img/edu/insta.jfif"
    },
    {
        id: 19,
        text: "Discord",
        url: "https://renderisgay.onrender.com/apps/discord-inc-/1430/discord-talk-chat-hang-out.html?app_pkg=com.roblox.client&partner=gamenora",
        imgSrc: "/img/edu/discord.png"
    }
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