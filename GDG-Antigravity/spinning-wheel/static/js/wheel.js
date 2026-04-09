const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spin-btn');
const winnerDisplay = document.getElementById('winner-display');
const remainingCountDisplay = document.getElementById('remaining-count');
const winnerModal = document.getElementById('winner-modal');
const modalWinnerName = document.getElementById('modal-winner-name');
const closeModalBtn = document.getElementById('close-modal-btn');

let names = [];
let colors = [
    '#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#8b5cf6', 
    '#6366f1', '#3b82f6', '#0ea5e9', '#06b6d4', '#14b8a6', 
    '#10b981', '#22c55e', '#84cc16', '#eab308', '#f59e0b', '#f97316'
];

let currentRotation = 0;
let isSpinning = false;
let animationId;

// Fetch names on start
async function fetchNames() {
    try {
        const response = await fetch('/api/names');
        const data = await response.json();
        names = data.names;
        updateUI();
        drawWheel();
    } catch (error) {
        console.error('Error fetching names:', error);
        winnerDisplay.textContent = 'Error loading names';
    }
}

function updateUI() {
    remainingCountDisplay.textContent = `${names.length} name${names.length !== 1 ? 's' : ''} remaining`;
    if (names.length === 0) {
        spinBtn.disabled = true;
        winnerDisplay.textContent = "Everyone has been picked!";
    } else {
        spinBtn.disabled = false;
    }
}

function drawWheel() {
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2;

    ctx.clearRect(0, 0, width, height);

    if (names.length === 0) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#1e293b';
        ctx.fill();
        return;
    }

    const arcSize = (2 * Math.PI) / names.length;

    for (let i = 0; i < names.length; i++) {
        const angle = currentRotation + i * arcSize;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, angle, angle + arcSize);
        ctx.closePath();
        
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#0f172a';
        ctx.stroke();

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle + arcSize / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Outfit';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 4;
        ctx.fillText(names[i], radius - 20, 8);
        ctx.restore();
    }

    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
}

function easeOutQuart(t) {
    return 1 - (--t) * t * t * t;
}

function spin() {
    if (isSpinning || names.length === 0) return;
    
    isSpinning = true;
    spinBtn.disabled = true;
    winnerDisplay.textContent = "Spinning...";

    const minSpins = 5;
    const extraSpins = minSpins * 2 * Math.PI;
    const randomAngle = Math.random() * 2 * Math.PI;
    
    const targetRotation = currentRotation + extraSpins + randomAngle;
    
    const duration = 5000;
    const startTimestamp = performance.now();
    const startRotation = currentRotation;

    function animate(timestamp) {
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = easeOutQuart(progress);
        
        currentRotation = startRotation + (targetRotation - startRotation) * easeProgress;
        
        drawWheel();

        if (progress < 1) {
            animationId = requestAnimationFrame(animate);
        } else {
            isSpinning = false;
            currentRotation = currentRotation % (2 * Math.PI);
            determineWinner();
        }
    }

    animationId = requestAnimationFrame(animate);
}

function determineWinner() {
    let normalizedRotation = currentRotation % (2 * Math.PI);
    if (normalizedRotation < 0) {
        normalizedRotation += 2 * Math.PI;
    }
    
    const arcSize = (2 * Math.PI) / names.length;
    let pointerAngle = (2 * Math.PI - normalizedRotation) % (2 * Math.PI);
    
    let winnerIndex = Math.floor(pointerAngle / arcSize);
    
    if (winnerIndex < 0) winnerIndex = 0;
    if (winnerIndex >= names.length) winnerIndex = names.length - 1;

    const winner = names[winnerIndex];
    winnerDisplay.textContent = `Winner: ${winner}`;
    
    showWinnerModal(winner, winnerIndex);
}

function showWinnerModal(winner, index) {
    modalWinnerName.textContent = winner;
    winnerModal.classList.remove('hidden');
    
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors.slice(0, 5)
    });

    closeModalBtn.onclick = () => {
        winnerModal.classList.add('hidden');
        names.splice(index, 1);
        updateUI();
        drawWheel();
        
        // Remove the onclick event to avoid multiple attachments if buggy
        closeModalBtn.onclick = null;
    };
}

spinBtn.addEventListener('click', spin);

fetchNames();
