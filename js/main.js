function onBallClick() {
    const ball = document.querySelector('.ball');

    if (!ball) return;

    const currentSize = parseFloat(getComputedStyle(ball).width) || 100;
    let newSize = currentSize + 50;

    if (newSize > 400) {
        newSize = 100;
    }

    ball.style.width = `${newSize}px`;
    ball.style.height = `${newSize}px`;
    ball.textContent = `${newSize}`;
}

const ball = document.querySelector('.ball');

if (ball) {
    ball.addEventListener('click', onBallClick);
}
