const messages = [
    "You are smart af",
    "Your view on your future",
    "Your ambitiousness",
    "How you make me laugh",
    "How happy I feel with you",
    "You are very attractive...",
    "Your aesthetic face",
    "How you treat me",
    "You annoying from time to time",
    "How you calm me down",
    "You like sharing the same way I do",
    "You cute",
    "Your sense of humor",
    "Your laugher. The sweetest thing I've ever heard",
    "How you see me",
    "How hard you try",
    "Your cute smile"
];

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("msgClose");
const newMessageBtn = document.getElementById("newMessageBtn");
const randomMessage = document.getElementById("randomMessage");

function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    randomMessage.textContent = messages[randomIndex]
}

openBtn.onclick = function() {
    modal.style.display = "block";
    showRandomMessage();
};

newMessageBtn.onclick = function() {
    showRandomMessage();
}

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const carouselNextBtn = document.getElementById('nextBtn');
const carouselPrevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

carouselPrevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

carouselNextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

const songs = [
    { title: "Summertime Sadness", artist: "Lana Del Rey", duration: "3:45", file: "music/song1.mp3", comment: "It sounds a bit sad, but makes me feel like I can breathe. That feeling of freedom and acceptance I relate to you. " },
    { title: "Wrap me in plastic", artist: "Chromance", duration: "3:30", file: "music/CHROMANCE - Wrap Me In Plastic (feat. Marcus Layton).mp3", comment: "Maybe silly a bit. I never allowed myself to feel I'm just a pretty little thing that you can take care of. But I started. Not too often, dw)" },
    { title: "Dusk till Dawn", artist: "Zayn Malik feat Sia", duration: "4:20", file: "music/Zayn Malik ft. Sia - Dusk Till Dawn.mp3", comment: "This one is just romantic. I think it fits." },
    { title: "Towards the Sun", artist: "Rihanna", duration: "3:45", file: "music/Rihanna - Towards The Sun (OST Home).mp3", comment: "I feel hugged andprotected when I listen to that one, so I thought you may too." },
    { title: "Art Deco", artist: "Lana Del Rey", duration: "4:10", file: "music/Лана Дель Рей - Art Deco.mp3", comment: "This is a short comment for Song 5." },
    { title: "It's a trip!", artist: "Joywave", duration: "3:40", file: "music/Joywave - It's A Trip!.mp3", comment: "This is a short comment for Song 6." },
    { title: "My Moon My Man", artist: "Feist", duration: "3:50", file: "music/Feist-My-Moon-My-Man.mp3", comment: "This is a short comment for Song 7." },
    { title: "Into you", artist: "Ariana Grande", duration: "3:27", file: "music/Ариана гранде - Into You.mp3", comment: "This is a short comment for Song 8." },
    { title: "Enjambre", artist: "Impacto", duration: "4:00", file: "music/Enjambre_Lo_Blondo_-_Impacto_(mp3.pm).mp3", comment: "This is a short comment for Song 9." },
    { title: "Birds", artist: "Imagine Dragons", duration: "3:21", file: "music/Imagine Dragons - Birds.mp3", comment: "This is a short comment for Song 10." },
    { title: "Love again", artist: "dua lipa", duration: "3:03", file: "music/02 - dua lipa - love again.mp3", comment: "This is a short comment for Song 11." },
    { title: "Bad Romance", artist: "Lady Gaga", duration: "4:54", file: "music/Lady Gaga - Heavy Metal Lover.mp3", comment: "This is a short comment for Song 12." },
    { title: "Take Me Out", artist: "Franz Ferdinand", duration: "3:57", file: "music/Franz Ferdinand - Take Me Out.mp3", comment: "This is a short comment for Song 13." },
    { title: "Angel", artist: "Massive Attack", duration: "4:00", file: "music/Angel (Remastered 2019) - Massive Attack (youtube).mp3", comment: "This is a short comment for Song 14." },
    { title: "Führe Mich", artist: "Rammstein", duration: "3:54", file: "music/238_1-rammstein-fuh.mp3", comment: "This is a short comment for Song 15." },
    { title: "Heavy love", artist: "Odetari", duration: "4:15", file: "music/Odetari_-_HEAVY_LOVE_(Rilds.com).mp3", comment: "This is a short comment for Song 16." }
];

let currentSongIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPause');
    const playlistPrevBtn = document.getElementById('prevSong');
    const playlistNextBtn = document.getElementById('nextSong');
    const currentSongTitle = document.getElementById('currentSongTitle');
    const songElements = document.querySelectorAll('.song');

   
    function loadSong(index) {
        const song = songs[index];
        audioPlayer.src = song.file;
        currentSongTitle.textContent = `${song.title} - ${song.artist}`;

        
        songElements.forEach((element, i) => {
            if (i === index) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    function playSong() {
        audioPlayer.play().catch(e => console.log("Playback failed:", e));
        playPauseBtn.textContent = '⏸';
    }

    function pauseSong() {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶';
    }

    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            playSong();
        } else {
            pauseSong();
        }
    });

    playlistPrevBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    playlistNextBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    audioPlayer.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    
    songElements.forEach((songElement, index) => {
        songElement.addEventListener('click', (e) => {
            if (!e.target.closest('.global-player') && !e.target.classList.contains('expand-btn')) {
                currentSongIndex = index;
                loadSong(currentSongIndex);
                playSong();
            }
        });
    });

    
    const expandButtons = document.querySelectorAll('.expand-btn');
    expandButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const comment = this.parentElement.nextElementSibling;
            comment.classList.toggle('expanded');

            if (comment.classList.contains('expanded')) {
                this.textContent = '▲';
            } else {
                this.textContent = '▼';
            }
        });
    });

    
    audioPlayer.addEventListener('play', () => {
        playPauseBtn.textContent = '⏸';
    });
    audioPlayer.addEventListener('pause', () => {
        playPauseBtn.textContent = '▶';
    });

    loadSong(currentSongIndex);
});

const items = [
    {
        title: "sad",
        type: "text", 
        text: "I'm with you darling. Let's talk about it. Or would you like to just have a hug? We'll go through this together."
    },
    {
        title: "happy",
        type: "text",
        text: "Me happy too then! I feel so good when you're happy. Makes my life better."
    },
    
    {
        title: "horny",
        type: "text",
        text: "oh. Don't be here, text me man right now."
    },
    {
        title: "mad (at me)",
        type: "text",
        text: "...I am sorry. I feel bad when upset you... I never mean to. I would like you to let me know how I can make it up to you."
    },
    {
        title: "mad (not at me)",
        type: "text",
        text: "Fuck them. Let's kill them? I'm in. But we gotta google how to do hide it first"
    },
    {
        title: "missing me",
        type: "text",
        text: "Awwwwww my babyyy I miss you too. Let's do our best and see each other as soon as possible."
    },
    {
        title: "feeling lonely",
        type: "text",
        text: "I'm here for you. Let me know if you feel that so we talk. If you can't or don't want then just know that I love you very much and think about you every day"
    },
    {
        title: "need confidence",
        type: "text",
        text: "Man you are one of the greatest people I know. I get fascinated by the way you think ans see the world. Talking to you is a damn please. And also.. your face... is hella attractive. Don't pretend you don't know. And also... when you don't feel confident, you are still the most convicing person in the room, so don't worry."
    }
];

const listModal = document.getElementById("listModal");
const detailModal = document.getElementById("detailModal");
const openListBtn = document.getElementById("openListBtn");
const listCloseBtn = document.getElementById("listClose");
const itemList = document.getElementById("itemList");
const detailTitle = document.getElementById("detailTitle");
const detailContent = document.getElementById("detailContent");
const detailCloseBtn = document.getElementById("detailClose");

function buildList() {
    itemList.innerHTML = "";
    items.forEach((item, index) =>{
        const li = document.createElement("li");
        li.textContent = item.title;
        li.style.cursor = "pointer";
        li.style.padding = "8px 0";
        li.style.borderBottom = "1px solid #ddd";
        li.addEventListener("click", () => openDetail(index));
        itemList.appendChild(li);
    });
}

function openDetail(index) {
    const item = items[index];
    detailTitle.textContent = item.title;
    detailContent.innerHTML = "";

    if (item.type === "text") {
        const p = document.createElement("p");
        p.textContent = item.text;
        detailContent.appendChild(p);
    } else if (item.type === "image") {
        const img = document.createElement("img");
        img.src = item.src;
        img.style.maxWidth = "100%";
        detailContent.appendChild(img);
    } else if (item.type === "audio") {
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = item.src;
        detailContent.appendChild(audio);
    }

    detailModal.style.display = "block";
}

openListBtn.onclick = function() {
    buildList();
    listModal.style.display = "block";
};

listCloseBtn.onclick = function() {
    listModal.style.display = "none";
};

detailCloseBtn.onclick = function() {
    detailModal.style.display = "none";

    const audio = detailContent.querySelector("audio");
    if (audio) audio.pause();
};

window.addEventListener("click", function(event) {
    if (event.target == listModal) {
        listModal.style.display = "none"
    }
});

const heartsBtn = document.getElementById("heartsBtn");
const popSound = document.getElementById("popSound");

const HEART_EMOJIS = ["❤️"];

function spawnHeart() {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];

    const rect = heartsBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const spaceLeft = centerX;
    const spaceRight = window.innerWidth - centerX;
    const spaceTop = centerY;
    const spaceBottom = window.innerHeight - centerY;
    
    const maxPageSpreadX = window.innerWidth * 0.33;
    const maxPageSpreadY = window.innerHeight * 0.33;
    
    const spreadX = Math.min(maxPageSpreadX, Math.max(spaceLeft, spaceRight));
    const spreadY = Math.min(maxPageSpreadY, Math.max(spaceTop, spaceBottom));
    
    const x = centerX + (Math.random() - 0.5) * spreadX;
    const y = centerY + (Math.random() - 0.5) * spreadY;

    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.fontSize = (16 + Math.random() * 14) + "px";

    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 80;
    heart.style.setProperty("--drift-x", Math.cos(angle) * distance + "px");
    heart.style.setProperty("--drift-y", Math.sin(angle) * distance + "px");

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => heart.remove());
}

function playPop() {
    popSound.currentTime = 0;
    popSound.play().catch(() => {});
}

heartsBtn.addEventListener("click", () => {
    playPop();
    const count = 6 + Math.floor(Math.random() * 5);
    for (let i = 0; i < count; i++) {
        setTimeout(spawnHeart, i * 70);
    }
});

let holdInterval = null;

heartsBtn.addEventListener("mousedown", () => {
    holdInterval = setInterval(spawnHeart, 150);
})
heartsBtn.addEventListener("mouseup", stopHold);
heartsBtn.addEventListener("mouseleave", stopHold);

heartsBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    playPop();
    const count = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) setTimeout(spawnHeart, i * 100);
    holdInterval = setInterval(spawnHeart, 150);
}, { passive: false });
heartsBtn.addEventListener("touchend", stopHold)

function stopHold() {
    if (holdInterval) {
        clearInterval(holdInterval);
        holdInterval = null;
    }
}

const typedTextEl = document.getElementById("typedText");
const typeCursor = document.getElementById("typeCursor");

const phrase = "Love you... let's live a happy life together 🌷"; 

function typePhrase() {
    let i = 0;
    function nextLetter() {
        if (i < phrase.length) {
            typedTextEl.textContent += phrase[i];
            i++;
            setTimeout(nextLetter, 150 + Math.random() * 300); 
        }
    }
    nextLetter();
}

document.addEventListener("DOMContentLoaded", typePhrase);