function onBallClick() {
    const ball = document.querySelector('.ball');

    if (!ball) return;

    const currentSize = parseFloat(getComputedStyle(ball).width) || 100;
    const growBy = getRandomInt(20, 60);
    let newSize = currentSize + growBy;

    if (newSize > 400) {
        newSize = 100;
    }

    ball.style.width = `${newSize}px`;
    ball.style.height = `${newSize}px`;
    ball.style.backgroundColor = getRandomColor();
    ball.textContent = `${newSize}`;
}

const ball = document.querySelector('.ball');

if (ball) {
    ball.addEventListener('click', onBallClick);
}
