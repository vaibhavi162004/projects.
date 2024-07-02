let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startStopBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    display.textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function start() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
        startBtn.textContent = 'Pause';
    }
}

function pause() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = 'Start';
    }
}

function reset() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    isRunning = false;
    updateDisplay();
    startBtn.textContent = 'Start';
}

startBtn.addEventListener('click', () => {
    if (isRunning) {
        pause();
    } else {
        start();
    }
});

resetBtn.addEventListener('click', reset);

updateDisplay();

