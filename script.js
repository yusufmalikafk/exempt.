function startJourney() {
    document.querySelector('.introduction-screen').style.display = 'none';
    document.getElementById('ai-assistant').style.display = 'block';
}

function showTherapists() {
    document.getElementById('ai-assistant').style.display = 'none';
    document.getElementById('therapist-selection').style.display = 'block';
}

function startChat(therapist) {
    alert(`Starting chat with ${therapist}`);
}

function startCall(therapist) {
    alert(`Starting call with ${therapist}`);
}

function startPostTherapy() {
    document.getElementById('therapist-selection').style.display = 'none';
    document.getElementById('post-therapy').style.display = 'block';
}

function joinCommunity() {
    document.getElementById('post-therapy').style.display = 'none';
    document.getElementById('community').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
});

function createStars() {
    const colors = ['yellow', 'orange', 'red', 'blue', 'green', 'pink', 'white'];
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('stars');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 5 + 2}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.background = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(star);
    }
}
