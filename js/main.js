function onBallClick() {
    const ball = document.querySelector('.ball');

    if (!ball) return;

    const currentSize = parseFloat(getComputedStyle(ball).width) || 100;
    const newSize = currentSize + 50;

    ball.style.width = `${newSize}px`;
    ball.style.height = `${newSize}px`;
    ball.textContent = `${newSize}`;
}

const ball = document.querySelector('.ball');

if (ball) {
    ball.addEventListener('click', onBallClick);
}
