const images = [
    {
        id: 1,
        text: "Adventure Capatalist",
        action: "redirectUrl",
        url: "https://than1089.github.io/adventure-capitalist",
        imgSrc: "/img/sci/adventurecap.png"
    },
    {
        id: 2,
        text: "Retro Bowl",
        action: "redirectCdn",
        fileName: "retro-bowl",
        imgSrc: "/img/sci/rb.avif"
    },
    {
        id: 3,
        text: "ROBL0X",
        action: "redirectUrl",
        url: "https://d886g6-8080.csb.app/",
        imgSrc: "/img/sci/rblx.png"
    },
    {
        id: 4,
        text: "1",
        action: "redirectCdn",
        fileName: "1",
        imgSrc: "/img/sci/one.png"
    },
    {
        id: 5,
        text: "1v1.LOL Old",
        action: "redirectSrc",
        src: "/static/calculus/source/1v1-lol/old",
        imgSrc: "/img/sci/1v1-lol.webp"
    },
    {
        id: 6,
        text: "1v1.LOL NEW",
        action: "redirectSrc",
        src: "/static/calculus/source/1v1.lol/new",
        imgSrc: "/img/sci/1v1lol.jpg"
    },
    {
        id: 7,
        text: "Achievement Unlocked",
        action: "redirectSrc",
        src: "/static/calculus/source/achievement-unlocked",
        imgSrc: "/img/sci/achievement.webp"
    },
    {
        id: 8,
        text: "Achievement Unlocked 2",
        action: "redirectSrc",
        src: "/static/calculus/source/achievement-unlocked/2/",
        imgSrc: "/img/sci/achievement-2.png"
    },
    {
        id: 9,
        text: "Achievement Unlocked 3",
        action: "redirectSrc",
        src: "/static/calculus/source/achievement-unlocked/3/",
        imgSrc: "/img/sci/achievement-3.webp"
    },
    {
        id: 10,
        text: "Slope",
        action: "redirectSrc",
        src: "/static/calculus/source/slope",
        imgSrc: "/img/sci/slope.jpeg"
    },
    {
        id: 11,
        text: "Eaglercraft 1.3.3 (old)",
        action: "redirectSrc",
        src: "/static/calculus/source/eaglercraft/133",
        imgSrc: "/img/sci/133.jpeg"
    },
    {
        id: 12,
        text: "Eaglercraft 1.5.2 (local)",
        action: "redirectSrc",
        src: "/static/calculus/source/eaglercraft/152",
        imgSrc: "/img/sci/152.jpeg"
    },
    {
        id: 13,
        text: "Eaglercraft 1.8.8 (server)",
        action: "redirectSrc",
        src: "/static/calculus/source/eaglercraft/188",
        imgSrc: "/img/sci/eaglercraft.jpg"
    },
    {
        id: 14,
        text: "Eaglercraft 1.8.9",
        action: "redirectSrc",
        src: "/static/calculus/source/eaglercraft/189",
        imgSrc: "/img/sci/189.jpg"
    },
    {
        id: 15,
        text: "Subway Surfers",
        action: "redirectSrc",
        src: "/static/calculus/source/subway-surfers",
        imgSrc: "/img/sci/subway-surfers.jpeg"
    },
    {
        id: 16,
        text: "Basket Random",
        action: "redirectSrc",
        src: "/static/calculus/source/basket-random",
        imgSrc: "/img/sci/basket-random.jpeg"
    },
    {
        id: 17,
        text: "Hanger 2",
        action: "redirectSrc",
        src: "/static/calculus/source/hanger-2",
        imgSrc: "/img/sci/hanger-2.jpg"
    },
    {
        id: 18,
        text: "Tunnel Rush",
        action: "redirectSrc",
        src: "/static/calculus/source/tunnel-rush",
        imgSrc: "/img/sci/tunnel-rush.jpg"
    },
    {
        id: 19,
        text: "Time Shooter 3",
        action: "redirectSrc",
        src: "/static/calculus/source/time-shooter-3",
        imgSrc: "/img/sci/ts3.jpg"
    },
    {
        id: 20,
        text: "Totally Accurate Battle Sim",
        action: "redirectSrc",
        src: "/static/calculus/source/tabs",
        imgSrc: "/img/sci/tabs.avif"
    },
    {
        id: 21,
        text: "Football Legends",
        action: "redirectSrc",
        src: "/static/calculus/source/football-legends",
        imgSrc: "/img/sci/fblegends.avif"
    },
    {
        id: 22,
        text: "Paper.IO 2",
        action: "redirectSrc",
        src: "/static/calculus/source/paper-io2",
        imgSrc: "/img/sci/paperio2.jpeg"
    },
    {
        id: 23,
        text: "Helix Jump",
        action: "redirectSrc",
        src: "/static/calculus/source/helix-jump",
        imgSrc: "/img/sci/helix-jump.jpeg"
    },
    {
        id: 24,
        text: "A Small World Cup",
        action: "redirectSrc",
        src: "/static/calculus/source/a-small-world-cup",
        imgSrc: "/img/sci/aswc.avif"
    },
    {
        id: 25,
        text: "Basketball Legends",
        action: "redirectSrc",
        src: "/static/calculus/source/basketball-legends",
        imgSrc: "/img/sci/basketball-legends.jpg"
    },
    {
        id: 26,
        text: "JustFall.LOL",
        action: "redirectSrc",
        src: "/static/calculus/source/just-fall",
        imgSrc: "/img/sci/just-fall-lol.png"
    },
    {
        id: 27,
        text: "Death Run 3D",
        action: "redirectSrc",
        src: "/static/calculus/source/death-run-3d",
        imgSrc: "/img/sci/death-run-3d.png"
    },
    {
        id: 28,
        text: "CraftMine",
        action: "redirectSrc",
        src: "/static/calculus/source/craftmine",
        imgSrc: "/img/sci/craftmine.jpg"
    },
    {
        id: 29,
        text: "Happy Wheels",
        action: "redirectSrc",
        src: "/static/calculus/source/happy-wheels",
        imgSrc: "/img/sci/happy-wheels.webp"
    },
    {
        id: 30,
        text: "OvO",
        action: "redirectSrc",
        src: "/static/calculus/source/ovo",
        imgSrc: "/img/sci/ovo.png"
    },
    {
        id: 31,
        text: "Soccer Random",
        action: "redirectSrc",
        src: "/static/calculus/source/soccer-random",
        imgSrc: "/img/sci/soccer-random.png"
    },
    {
        id: 32,
        text: "Slope Tunnel",
        action: "redirectSrc",
        src: "/static/calculus/source/slope-tunnel",
        imgSrc: "/img/sci/slope-tunnel.jpg"
    },
    {
        id: 33,
        text: "Euro Cup",
        action: "redirectSrc",
        src: "/static/calculus/source/euro-cup",
        imgSrc: "/img/sci/euro-cup.avif"
    },
    {
        id: 34,
        text: "Papa's Cupcakeria",
        action: "redirectSrc",
        src: "/static/calculus/source/cupcakeria",
        imgSrc: "/img/sci/cupcakeria.png"
    },
    {
        id: 35,
        text: "Super Mario 64",
        action: "redirectSrc",
        src: "/static/calculus/source/sm64",
        imgSrc: "/img/sci/sm64.jpeg"
    },
    {
        id: 36,
        text: "",
        action: "redirectSrc",
        src: "/static/calculus/source/",
        imgSrc: "/img/sci/"
    },
    {
        id:37 ,
        text: "",
        action: "redirectCdn",
        fileName: "",
        imgSrc: "/img/sci/"
    },
    {
        id: 38,
        text: "",
        action: "redirectUrl",
        url: "https://",
        imgSrc: "/img/sci/"
    },
    {
        id: 39,
        text: "",
        action: "redirectUrl",
        url: "https://",
        imgSrc: "/img/sci/"
    },
    {
        id: 40,
        text: "Vex",
        action: "redirectSrc",
        src: "/static/calculus/source/vex",
        imgSrc: "/img/sci/vex.png"
    },
    {
        id: 41,
        text: "Vex 2",
        action: "redirectSrc",
        src: "/static/calculus/source/vex/2",
        imgSrc: "/img/sci/vex-2.jpeg"
    },
    {
        id: 42,
        text: "Vex 3",
        action: "redirectCdn",
        fileName: "vex3",
        imgSrc: "/img/sci/vex-3.jpg"
    },
    {
        id: 43,
        text: "Vex 4",
        action: "redirectSrc",
        src: "/static/calculus/source/vex/4",
        imgSrc: "/img/sci/vex-4.png"
    },
    {
        id: 44,
        text: "Vex 5",
        action: "redirectSrc",
        src: "/static/calculus/source/vex/5",
        imgSrc: "/img/sci/vex-5.webp"
    },
    {
        id: 45,
        text: "Vex 6",
        action: "redirectSrc",
        src: "/static/calculus/source/vex/6",
        imgSrc: "/img/sci/vex-6.jpeg"
    },
    {
        id: 46,
        text: "Vex 7",
        action: "redirectCdn",
        fileName: "vex7",
        imgSrc: "/img/sci/vex-7.png"
    }
    {
        id: 47,
        text: "Vex 8",
        action: "redirectSrc",
        src: "/static/calculus/source/vex/8",
        imgSrc: "/img/sci/vex-8.jpeg"
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