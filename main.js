const board = document.getElementById('board');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');
const playWithAI = document.getElementById('playWithAI');

let cells = [];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initializeGame() {
    cells = Array(9).fill(null);
    board.innerHTML = '';
    cells.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.addEventListener('click', () => handleCellClick(index));
        board.appendChild(cellElement);
    });
    message.textContent = `Player ${currentPlayer}'s turn`;
    gameActive = true;
}

function handleCellClick(index) {
    if (cells[index] || !gameActive) return;

    cells[index] = currentPlayer;
    board.children[index].textContent = currentPlayer;

    if (checkWin()) {
        gameActive = false;
        message.textContent = `It'z ${currentPlayer} win!`;
        return;
    }

    if (cells.every(cell => cell)) {
        gameActive = false;
        message.textContent = 'It\'s a tie!';
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'Y' : 'X';
    message.textContent = `Player ${currentPlayer}'s turn`;

    if (playWithAI.checked && currentPlayer === 'X') {
        aiMove();
    }
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => cells[index] === currentPlayer);
    });
}

function aiMove() {
    let emptyCells = cells.map((cell, index) => cell === null ? index : null).filter(val => val !== null);
    let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    handleCellClick(randomIndex);
}

resetBtn.addEventListener('click', initializeGame);

initializeGame();
