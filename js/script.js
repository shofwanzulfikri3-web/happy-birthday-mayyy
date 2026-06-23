/* ==========================
   PINK PRINCESS SCRIPT
   By Ikyyy ❤️
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("birthdayMusic");

    /* ==========================
       START WEBSITE
    ========================== */

    startBtn.addEventListener("click", () => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

        music.play().catch(() => {
            console.log("Autoplay diblokir browser.");
        });

        createConfetti(150);

    });

    /* ==========================
       GIFT POPUP
    ========================== */

    const giftBtn = document.getElementById("giftBtn");
    const popup = document.getElementById("giftPopup");
    const closePopup = document.getElementById("closePopup");

    giftBtn.addEventListener("click", () => {

        popup.style.display = "flex";

        createConfetti(300);

        createLoveExplosion();

    });

    closePopup.addEventListener("click", () => {

        popup.style.display = "none";

    });

    popup.addEventListener("click", (e) => {

        if (e.target === popup) {
            popup.style.display = "none";
        }

    });

    /* ==========================
       HEARTS
    ========================== */

    setInterval(createHeart, 400);

    /* ==========================
       STARS
    ========================== */

    createStars();

    /* ==========================
       BALLOONS
    ========================== */

    createBalloons();

    /* ==========================
       CURSOR HEART
    ========================== */

    document.addEventListener("mousemove", heartTrail);

});

/* ==========================
   FLOATING HEARTS
========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["💖","💕","💗","💓","💘","❤️"]
    [Math.floor(Math.random() * 6)];

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}

/* ==========================
   STARS
========================== */

function createStars() {

    const container =
        document.getElementById("stars-container");

    for(let i = 0; i < 80; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDuration =
            (1 + Math.random() * 3) + "s";

        star.style.opacity =
            Math.random();

        container.appendChild(star);

    }

}

/* ==========================
   CONFETTI
========================== */

function createConfetti(amount) {

    const colors = [
        "#ff4fa2",
        "#ff8fc7",
        "#ff1493",
        "#ffd1e8",
        "#ffffff",
        "#ff69b4"
    ];

    for(let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";

        confetti.style.left =
            Math.random() * window.innerWidth + "px";

        confetti.style.top = "-20px";

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.zIndex = "99999";

        confetti.style.borderRadius =
            Math.random() > 0.5 ? "50%" : "0";

        document.body.appendChild(confetti);

        let posY = -20;
        let rotate = 0;

        const speed =
            2 + Math.random() * 6;

        const drift =
            -3 + Math.random() * 6;

        const interval = setInterval(() => {

            posY += speed;
            rotate += 10;

            confetti.style.top =
                posY + "px";

            confetti.style.left =
                (parseFloat(confetti.style.left)
                + drift) + "px";

            confetti.style.transform =
                `rotate(${rotate}deg)`;

            if(posY > window.innerHeight) {

                clearInterval(interval);
                confetti.remove();

            }

        }, 16);

    }

}

/* ==========================
   LOVE EXPLOSION
========================== */

function createLoveExplosion() {

    for(let i = 0; i < 80; i++) {

        const love =
            document.createElement("div");

        love.innerHTML = "💖";

        love.style.position = "fixed";

        love.style.left =
            window.innerWidth / 2 + "px";

        love.style.top =
            window.innerHeight / 2 + "px";

        love.style.fontSize = "25px";

        love.style.zIndex = "99999";

        document.body.appendChild(love);

        const angle =
            Math.random() * 360;

        const distance =
            100 + Math.random() * 300;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        love.animate([
            {
                transform: "translate(0,0)",
                opacity: 1
            },
            {
                transform:
                    `translate(${x}px, ${y}px)`,
                opacity: 0
            }
        ], {
            duration: 1800,
            easing: "ease-out"
        });

        setTimeout(() => {
            love.remove();
        }, 1800);

    }

}

/* ==========================
   BALLOONS
========================== */

function createBalloons() {

    const emojis = [
        "🎈",
        "🎀",
        "🌸",
        "🦋",
        "💗"
    ];

    setInterval(() => {

        const balloon =
            document.createElement("div");

        balloon.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        balloon.style.position = "fixed";

        balloon.style.left =
            Math.random() * window.innerWidth + "px";

        balloon.style.bottom = "-50px";

        balloon.style.fontSize =
            (25 + Math.random() * 20) + "px";

        balloon.style.zIndex = "-1";

        document.body.appendChild(balloon);

        let pos = -50;

        const fly = setInterval(() => {

            pos += 2;

            balloon.style.bottom =
                pos + "px";

            if(pos > window.innerHeight + 100) {

                clearInterval(fly);
                balloon.remove();

            }

        }, 20);

    }, 1500);

}

/* ==========================
   CURSOR HEART TRAIL
========================== */

function heartTrail(e) {

    const heart =
        document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = e.clientX + "px";

    heart.style.top = e.clientY + "px";

    heart.style.pointerEvents = "none";

    heart.style.fontSize = "15px";

    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate([
        {
            transform: "translateY(0)",
            opacity: 1
        },
        {
            transform: "translateY(-30px)",
            opacity: 0
        }
    ], {
        duration: 700
    });

    setTimeout(() => {
        heart.remove();
    }, 700);

}