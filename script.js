
const countdown = document.getElementById('countdown');
const birthdayWish = document.getElementById('birthday-wish');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const birthday = new Date('July 28, 2025 00:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance < 0) {
        countdown.classList.add('hidden');
        birthdayWish.classList.remove('hidden');
        createConfetti();
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
};

const createConfetti = () => {
    const confettiContainer = document.querySelector('.container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }
};

// Add confetti styles to the CSS
const style = document.createElement('style');
style.innerHTML = `
.confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #ff69b4;
    top: -10px;
    animation: fall linear infinite;
}

@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
    }
}
`;
document.head.appendChild(style);


setInterval(updateCountdown, 1000);
