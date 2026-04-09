document.addEventListener('DOMContentLoaded', () => {
    let countdownInterval;
    let remainingTime = 0; // in seconds
    let isPaused = true;

    const timerDisplay = document.getElementById('timerDisplay');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const timeInput = document.getElementById('timeInput');
    
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');

    function updateDisplay(totalSeconds) {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        
        minutesDisplay.textContent = String(mins).padStart(2, '0');
        secondsDisplay.textContent = String(secs).padStart(2, '0');
    }

    function startTimer() {
        if (!isPaused) return;

        if (remainingTime === 0) {
            const inputVal = parseInt(timeInput.value);
            if (isNaN(inputVal) || inputVal <= 0) {
                alert("Please enter a valid number of minutes.");
                return;
            }
            remainingTime = inputVal * 60;
        }

        isPaused = false;
        timerDisplay.parentElement.classList.remove('timer-done');
        
        countdownInterval = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                updateDisplay(remainingTime);
            } else {
                clearInterval(countdownInterval);
                isPaused = true;
                timerDisplay.parentElement.classList.add('timer-done');
            }
        }, 1000);
    }

    function pauseTimer() {
        if (isPaused) return;
        clearInterval(countdownInterval);
        isPaused = true;
    }

    function resetTimer() {
        clearInterval(countdownInterval);
        isPaused = true;
        remainingTime = 0;
        updateDisplay(remainingTime);
        timerDisplay.parentElement.classList.remove('timer-done');
        timeInput.value = '';
    }

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);

    // Initial display string parsing
    updateDisplay(remainingTime);
});
