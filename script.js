/*==================================================
        PROJECT TINDURAM ❤️
        SCRIPT.JS - PART 1
==================================================*/

/* ===========================
   ELEMENTS
=========================== */

const loader = document.getElementById("loader");
const hero = document.getElementById("hero");
const story = document.getElementById("story");

const enterButton = document.getElementById("enterButton");
const journeyButton = document.getElementById("journeyButton");

const typingText = document.getElementById("typingText");

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

const heartsContainer = document.getElementById("heartsContainer");

/* ===========================
   LOADER TEXT
=========================== */

const loadingMessages = [

    "Initializing Surprise...",

    "Finding Tinduram ❤️",

    "Loading Memories...",

    "Loading Beautiful Eyes...",

    "Preparing Something Special..."

];

let loadingIndex = 0;

setInterval(() => {

    loadingIndex++;

    if (loadingIndex >= loadingMessages.length) {

        loadingIndex = 0;

    }

    typingText.innerText = loadingMessages[loadingIndex];

}, 1200);

/* ===========================
   ENTER BUTTON
=========================== */

enterButton.addEventListener("click", () => {

    loader.style.display = "none";

    hero.classList.remove("hidden");

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

    startMusic();

});

/* ===========================
   JOURNEY BUTTON
=========================== */

journeyButton.addEventListener("click", () => {

    hero.style.display = "none";

    story.classList.remove("hidden");

    revealSections();

    window.scrollTo({

        top: story.offsetTop,

        behavior: "smooth"

    });

});

/* ===========================
   MUSIC
=========================== */

function startMusic() {

    if (!bgMusic) return;

    bgMusic.volume = 0.35;

    bgMusic.play().catch(() => {});

}

musicButton.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play();

        musicButton.innerHTML = '<i class="fa-solid fa-music"></i>';

    } else {

        bgMusic.pause();

        musicButton.innerHTML = "🔇";

    }

});

/* ===========================
   FLOATING HEARTS
=========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const emojis = [

        "❤️",

        "💖",

        "💕",

        "💗",

        "💘",

        "💝"

    ];

    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 22) + "px";

    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 500);
/*==================================================
        PROJECT TINDURAM ❤️
        SCRIPT.JS - PART 2
==================================================*/

/* ===========================
   SCROLL REVEAL
=========================== */

function revealSections() {

    const sections = document.querySelectorAll(".hidden-section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        observer.observe(section);

    });

}

/* ===========================
   PHOTO HOVER EFFECT
=========================== */

const photos = document.querySelectorAll(".photoSection img");

photos.forEach(photo => {

    photo.addEventListener("mousemove", (e) => {

        const rect = photo.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        photo.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;

    });

    photo.addEventListener("mouseleave", () => {

        photo.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});

/* ===========================
   LETTER ANIMATION
=========================== */

const letter = document.querySelector(".letter");

if (letter) {

    letter.style.opacity = "0";

    const letterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                letter.style.transition = "1.5s";

                letter.style.opacity = "1";

                letter.style.transform = "translateY(0px)";

            }

        });

    }, {
        threshold: 0.25
    });

    letter.style.transform = "translateY(60px)";

    letterObserver.observe(letter);

}

/* ===========================
   BUTTON RIPPLE EFFECT
=========================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";
        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 700);

    });

});

/* ===========================
   PAGE FADE-IN
=========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/* ===========================
   END
=========================== */

console.log("❤️ Project TINDURAM Loaded Successfully ❤️");