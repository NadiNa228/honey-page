const messages = [
    "This is message 1.",
    "This is message 2.",
    "This is message 3.",
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
    { title: "Song Title 1", artist: "Artist 1", duration: "3:45", file: "music/song1.mp3", comment: "This is a short comment for Song 1." },
    { title: "Song Title 2", artist: "Artist 2", duration: "4:20", file: "music/song2.mp3", comment: "This is a short comment for Song 2." },
    { title: "Song Title 3", artist: "Artist 3", duration: "4:20", file: "music/song3.mp3", comment: "This is a short comment for Song 3." },
    { title: "Song Title 4", artist: "Artist 4", duration: "5:30", file: "music/song4.mp3", comment: "This is a short comment for Song 4." },
    { title: "Song Title 5", artist: "Artist 5", duration: "2:55", file: "music/song5.mp3", comment: "This is a short comment for Song 5." },
    { title: "Song Title 6", artist: "Artist 6", duration: "7:12", file: "music/song6.mp3", comment: "This is a short comment for Song 6." },
    { title: "Song Title 7", artist: "Artist 7", duration: "3:40", file: "music/song7.mp3", comment: "This is a short comment for Song 7." },
    { title: "Song Title 8", artist: "Artist 8", duration: "6:05", file: "music/song8.mp3", comment: "This is a short comment for Song 8." },
    { title: "Song Title 9", artist: "Artist 9", duration: "4:55", file: "music/song9.mp3", comment: "This is a short comment for Song 9." },
    { title: "Song Title 10", artist: "Artist 10", duration: "8:00", file: "music/song10.mp3", comment: "This is a short comment for Song 10." },
    { title: "Song Title 11", artist: "Artist 11", duration: "2:30", file: "music/song11.mp3", comment: "This is a short comment for Song 11." },
    { title: "Song Title 12", artist: "Artist 12", duration: "5:45", file: "music/song12.mp3", comment: "This is a short comment for Song 12." },
    { title: "Song Title 13", artist: "Artist 13", duration: "7:30", file: "music/song13.mp3", comment: "This is a short comment for Song 13." }
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
        title: "Text Item",
        type: "text", 
        text: "This is a paragraph of text. Replace it with whatever you want to say."
    },
    {
        title: "Image Item",
        type: "image",
        src: "image/picture.jpg"
    },
    {
        title: "Audio Item",
        type: "audio",
        src: "music/song1.mp3"
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