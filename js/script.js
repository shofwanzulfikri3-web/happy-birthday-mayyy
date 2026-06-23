// =====================================================
// LOADER
// =====================================================
const loader = document.getElementById('loader');
const startBtn = document.getElementById('startBtn');
const music = document.getElementById('birthdayMusic');
const musicToggle = document.getElementById('musicToggle');

startBtn.addEventListener('click', () => {
    loader.classList.add('hide');
    music.play().catch(() => { /* autoplay blocked, user can use the toggle */ });
    musicToggle.classList.add('playing');
    launchConfetti(60);
});

musicToggle.addEventListener('click', () => {
    if (music.paused) {
        music.play().catch(() => {});
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<i class="fa-solid fa-music"></i>';
    } else {
        music.pause();
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
});

// =====================================================
// FLOATING HEARTS, STARS, BALLOONS
// =====================================================
const heartsContainer = document.getElementById('hearts-container');
const starsContainer = document.getElementById('stars-container');
const balloonsContainer = document.getElementById('balloons-container');

const heartEmojis = ['❤️', '💖', '💕', '💗'];
const starEmojis = ['✨', '⭐', '🌟'];
const balloonEmojis = ['🎈', '🎈', '🎈'];

function spawnFloating(container, emojis, className, durationRange) {
    const el = document.createElement('span');
    el.className = className;
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
    el.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
    const duration = durationRange[0] + Math.random() * (durationRange[1] - durationRange[0]);
    el.style.animationDuration = duration + 's';
    container.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000 + 200);
}

setInterval(() => spawnFloating(heartsContainer, heartEmojis, 'floating-heart', [6, 11]), 800);
setInterval(() => spawnFloating(starsContainer, starEmojis, 'floating-star', [7, 12]), 1100);
setInterval(() => spawnFloating(balloonsContainer, balloonEmojis, 'floating-balloon', [9, 14]), 2600);

// =====================================================
// REASON FLIP CARDS
// =====================================================
document.querySelectorAll('.reason-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') card.classList.toggle('flipped');
    });
});

// =====================================================
// LETTER REVEAL ON SCROLL
// =====================================================
const revealItems = document.querySelectorAll('.reveal-text');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.2 });

revealItems.forEach(item => revealObserver.observe(item));

// =====================================================
// QUIZ RECEH
// =====================================================
const quizReply = document.getElementById('quizReply');

document.querySelectorAll('.quiz-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        quizReply.textContent = btn.dataset.reply;
        document.querySelectorAll('.quiz-btn').forEach(b => b.style.background = '');
        btn.style.background = 'var(--lavender)';
        btn.style.color = '#fff';
    });
});

// =====================================================
// GIFT POPUP
// =====================================================
const giftBtn = document.getElementById('giftBtn');
const giftPopup = document.getElementById('giftPopup');
const closePopup = document.getElementById('closePopup');

giftBtn.addEventListener('click', () => {
    giftPopup.classList.add('show');
    launchConfetti(120);
});

closePopup.addEventListener('click', () => {
    giftPopup.classList.remove('show');
});

giftPopup.addEventListener('click', (e) => {
    if (e.target === giftPopup) giftPopup.classList.remove('show');
});

// =====================================================
// LOVE COUNTER (signature interaction)
// =====================================================
const loveBtn = document.getElementById('loveBtn');
const loveCount = document.getElementById('loveCount');
const loveMsg = document.getElementById('loveMsg');

let clicks = 0;

const milestoneMessages = {
    1: 'Aamiin, baru mulai nih 🥰',
    5: 'Tombolnya ikut deg-degan kayak Ikyyy 😳',
    10: 'Sayangnya udah dua digit, mantap 💞',
    20: 'Jari kamu rajin banget, gemes deh 😆',
    35: 'Oke ini udah resmi gemoy banget 🐻',
    50: 'Setengah abad klik cinta, sah jadi pasangan abadi 👑❤️'
};

loveBtn.addEventListener('click', () => {
    clicks++;
    loveCount.textContent = `${clicks} klik cinta`;

    if (milestoneMessages[clicks]) {
        loveMsg.textContent = milestoneMessages[clicks];
        launchConfetti(40);
    } else if (clicks > 50) {
        loveMsg.textContent = 'Udah dari tadi cintanya nggak abis-abis ya ❤️';
    } else {
        loveMsg.textContent = 'Terus klik, Ikyyy nggak akan capek liatnya 🤭';
    }
});

// =====================================================
// CONFETTI HELPER
// =====================================================
function launchConfetti(count) {
    if (typeof confetti !== 'function') return;
    confetti({
        particleCount: count,
        spread: 70,
        startVelocity: 35,
        origin: { y: 0.6 },
        colors: ['#E85D75', '#F4C95D', '#C9A6E8', '#FFE4EC']
    });
}
