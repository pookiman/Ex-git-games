function onBallClick() {
    console.log('Ball clicked!');
}

const ball = document.querySelector('.ball');

if (ball) {
    ball.addEventListener('click', onBallClick);
}
