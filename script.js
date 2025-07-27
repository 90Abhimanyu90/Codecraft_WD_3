// RPS

    document.getElementById("i3").innerHTML = 0;
    document.getElementById("i4").innerHTML = 0;

    co = document.getElementById("rockon");
    co.setAttribute("style", "border:5px;border-style:solid;border-color:white;");
    co1 = document.getElementById("rockon2");
    co1.setAttribute("style", "border:5px;border-style:solid;border-color:white;"
    );
    co2 = document.getElementById("rockon3");
    co2.setAttribute(
      "style",
      "border:5px;border-style:solid;border-color:white;"
    );
    let user = 0;
    let computer = 0;
    
    function rps(x) {
      const y = Math.floor(Math.random() * 3 + 1);
      if (x == 1 && y == 1) {
        colo = document.getElementById("rockon");
        colo.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:blue;"
        );
        colo2 = document.getElementById("rockon2");
        colo2.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
        colo3 = document.getElementById("rockon3");
        colo3.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
      } else if (x == 1 && y == 2) {
        colo11 = document.getElementById("rockon");
        colo11.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:green;"
        );
        colo12 = document.getElementById("rockon2");
        colo12.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:red;"
        );
        colo13 = document.getElementById("rockon3");
        colo13.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
      } else if (x == 1 && y == 3) {
        colo14 = document.getElementById("rockon");
        colo14.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:green;"
        );
        colo15 = document.getElementById("rockon2");
        colo15.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
        colo16 = document.getElementById("rockon3");
        colo16.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:red;"
        );
      } else if (x == 2 && y == 1) {
        colo17 = document.getElementById("rockon");
        colo17.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:red;"
        );
        colo18 = document.getElementById("rockon2");
        colo18.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:green;"
        );
        colo19 = document.getElementById("rockon3");
        colo19.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
      } else if (x == 2 && y == 2) {
        colo4 = document.getElementById("rockon");
        colo4.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
        colo5 = document.getElementById("rockon2");
        colo5.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:blue;"
        );
        colo6 = document.getElementById("rockon3");
        colo6.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
      } else if (x == 2 && y == 3) {
        colo20 = document.getElementById("rockon");
        colo20.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
        colo21 = document.getElementById("rockon2");
        colo21.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:green;"
        );
        colo22 = document.getElementById("rockon3");
        colo22.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:red;"
        );
      } else if (x == 3 && y == 1) {
        colo23 = document.getElementById("rockon");
        colo23.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:red;"
        );
        colo24 = document.getElementById("rockon2");
        colo24.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
        colo25 = document.getElementById("rockon3");
        colo25.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:green;"
        );
      } else if (x == 3 && y == 2) {
        colo26 = document.getElementById("rockon");
        colo26.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
        colo27 = document.getElementById("rockon2");
        colo27.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:red;"
        );
        colo28 = document.getElementById("rockon3");
        colo28.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:green;"
        );
      } else if (x == 3 && y == 3) {
        colo29 = document.getElementById("rockon");
        colo29.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
        colo30 = document.getElementById("rockon2");
        colo30.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:white;"
        );
        colo31 = document.getElementById("rockon3");
        colo31.setAttribute(
          "style",
          "border:5px;border-style:solid;border-color:blue;"
        );
      }
      if ((x == 1 && y == 3) || (x == 2 && y == 1) || (x == 3 && y == 2)) {
        document.getElementById("i2").innerHTML = "USER WIN";
        user = user + 1;
        computer = computer + 0;
        document.getElementById("i3").innerHTML = user;
        document.getElementById("i4").innerHTML = computer;
      } else if (
        (x == 1 && y == 2) ||
        (x == 2 && y == 3) ||
        (x == 3 && y == 1)
      ) {
        document.getElementById("i2").innerHTML = "Computer wins";
        computer = computer + 1;
        user = user + 0;
        document.getElementById("i3").innerHTML = user;
        document.getElementById("i4").innerHTML = computer;
      } else {
        document.getElementById("i2").innerHTML = "TIE";
        document.getElementById("i3").innerHTML = user;
        document.getElementById("i4").innerHTML = computer;
      }
    }
    function reset() {
      user = 0;
      computer = 0;
      document.getElementById("i3").innerHTML = user;
      document.getElementById("i4").innerHTML = computer;
    }
    function handlMouse() {
      let Ramdi = document.querySelector("#random");
      Ramdi.setAttribute("src", "images/dice-roll-dice.gif");
    }
    function gif2() {
      let gif3 = document.getElementById("random");
      gif3.setAttribute("src", "images/dice.jpeg");
    }
    function gift() {
      let gif4 = document.querySelector("#random2");
      gif4.setAttribute("src", "images/rpsgif.gif");
    }
    function gifted() {
      let gif5 = document.getElementById("random2");
      gif5.setAttribute("src", "images/mainimg.jpeg");
    }
    function divas() {
      let gif6 = document.getElementById("random3");
      gif6.setAttribute("src", "images/otpgif.gif");
    }
    function divas2() {
      let gif7 = document.getElementById("random3");
      gif7.setAttribute("src", "images/otp.png");
    }

    // Tik Tack Toe
function tiks(){
  let imgb=document.getElementById('tikss');
  imgb.setAttribute("src","images/tiktakgif.webp");
}
function tikss(){
  let imgb2=document.getElementById('tikss');
  imgb2.setAttribute("src","images/tiktakimg.png");
}

    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let value = document.getElementById("foot");
    value.innerHTML = "";

    function cross(index) {
      if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('btn-primary1')[index].innerText = currentPlayer;
        document.getElementsByClassName('btn-primary1')[index].setAttribute("style", "color:black;");
        if (checkWinner(currentPlayer)) {
          value = document.getElementById("foot");
          value.innerHTML = currentPlayer + " wins ";
          resetBoard();
        }
        else if (board.every(cell => cell !== '')) {
          resetBoard();
          // alert('It\'s a draw!');
          value = document.getElementById("foot");
          value.innerHTML = "It's a draw";
        }
        else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }

    function checkWinner(player) {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      return winningCombinations.some(combination =>
        combination.every(index => board[index] === player)
      );
    }

    function resetBoard() {
      currentPlayer = 'X';
      board = ['', '', '', '', '', '', '', '', ''];
      const containers = document.getElementsByClassName('btn-primary1');
      for (let i = 0; i < containers.length; i++) {
        containers[i].innerText = '_';
        containers[i].setAttribute("style", "color:white;");
      }

    }
    
const apiUrl = 'https://random-word-api.herokuapp.com/word?number=1&length=5'; // API endpoint for 5-letter words

// Variables
let selectedWord = ""; // The word selected for the current game
let displayedWord = ""; // Displayed version of the word (some letters shown)
const maxAttempts = 5; // Maximum number of attempts allowed
let attemptsLeft = maxAttempts; // Number of attempts left for the player
let timer; // Timer variable
const timerDuration = 60; // Timer duration in seconds

// DOM Elements
const startGameBtn = document.getElementById('start-game');
const gameContainer = document.getElementById('game-container');
const wordBlocks = document.getElementById('word-blocks');
const guessInput = document.getElementById('guess');
const submitGuessBtn = document.getElementById('submit-guess');
const revealWordBtn = document.getElementById('reveal-word');
const message = document.getElementById('message');
const timerDisplay = document.getElementById('timer-display');
const resetGameBtn = document.getElementById('reset-game');

// Initialize the game
function initGame() {
    resetGame(); // Reset the game initially
    startTimer(); // Start the timer
}

// Reset the game
function resetGame() {
    clearInterval(timer); // Clear any existing timer
    attemptsLeft = maxAttempts; // Reset attempts
    timerDisplay.textContent = timerDuration; // Reset timer display
    message.textContent = ""; // Clear message
    guessInput.value = ""; // Clear input field
    selectedWord = ""; // Clear selected word
    displayedWord = ""; // Clear displayed word
    wordBlocks.innerHTML = ""; // Clear word blocks

    // Fetch a random word from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch word.');
            }
            return response.json();
        })
        .then(data => {
            selectedWord = data[0].toLowerCase(); // Extract the word from API response
            displayedWord = generateDisplayedWord(selectedWord); // Generate displayed word
            displayWordBlocks(displayedWord); // Display word blocks
            startTimer(); // Start timer after fetching word
            showGame(); // Show game container after fetching word
        })
        .catch(error => {
            console.error('Error fetching word:', error.message);
            selectedWord = "apple"; // Fallback word in case of API failure
            displayedWord = generateDisplayedWord(selectedWord); // Generate displayed word
            displayWordBlocks(displayedWord); // Display word blocks
            startTimer(); // Start timer after fetching word
            showGame(); // Show game container after fetching word
        });
}

// Show game container and start timer
function showGame() {
    gameContainer.style.display = 'block'; // Show game container
    startGameBtn.style.display = 'none'; // Hide start game button
}

// Generate displayed word with some letters revealed
function generateDisplayedWord(word) {
    let displayed = "";
    for (let i = 0; i < word.length; i++) {
        if (Math.random() < 0.5) {
            displayed += word[i];
        } else {
            displayed += "_";
        }
    }
    return displayed;
}

// Display word blocks based on the displayed word
function displayWordBlocks(displayedWord) {
    wordBlocks.innerHTML = "";
    for (let i = 0; i < displayedWord.length; i++) {
        const block = document.createElement('div');
        block.classList.add('word-block');
        if (displayedWord[i] !== '_') {
            block.textContent = displayedWord[i];
        }
        wordBlocks.appendChild(block);
    }
}

// Update displayed attempts left
function updateAttemptsDisplay() {
    message.textContent = `Attempts left: ${attemptsLeft}`;
}

// Handle guess submission
function submitGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    if (guess === selectedWord) {
        // Player guessed correctly
        message.textContent = "Congratulations! You guessed the word!";
        clearInterval(timer); // Stop the timer
    } else {
        // Player guessed incorrectly
        message.textContent = "Incorrect guess. Try again.";
        attemptsLeft--;
        updateAttemptsDisplay();
        if (attemptsLeft === 0) {
            // No attempts left, game over
            message.textContent = `Game Over! The word was "${selectedWord}".`;
            clearInterval(timer); // Stop the timer
        }
    }
    guessInput.value = ""; // Clear input field
}

// Reveal the selected word
function revealWord() {
    message.textContent = `The word was "${selectedWord}".`;
    clearInterval(timer); // Stop the timer
}

// Start the timer
function startTimer() {
    clearInterval(timer); // Clear any existing timer
    timerDisplay.textContent = timerDuration;
    timer = setInterval(() => {
        timerDuration--;
        timerDisplay.textContent = timerDuration;
        if (timerDuration <= 0) {
            clearInterval(timer); // Stop the timer when it reaches zero
            message.textContent = `Time's up! The word was "${selectedWord}".`;
        }
    }, 1000); // Update every second
}

// Reset game and timer
resetGameBtn.addEventListener('click', () => {
    resetGame();
});

// Event listeners
startGameBtn.addEventListener('click', () => {
    initGame(); // Start game on click
});

submitGuessBtn.addEventListener('click', submitGuess);
revealWordBtn.addEventListener('click', revealWord);

// Start the game initially
startGameBtn.style.display = 'block'; // Display start game button initially
gameContainer.style.display = 'none'; // Hide game container initially

function gif5(){
  let gif7 = document.getElementById("random5");
      gif7.setAttribute("src", "images/wordgif.gif");
}
function gif6(){
  let gif8 = document.getElementById("random5");
      gif8.setAttribute("src", "images/word.jpeg");
}







// OTP GAME

function otp() {
  let ans = Math.floor(Math.random()*99999-10000+1)+10000;
  document.getElementById("otp2").innerHTML =ans;
    }
function reset10() {
      document.getElementById("otp2").innerHTML = "";
    }





// LUDO
    function ludo() {
          let rolle = Math.floor(Math.random() * 6 + 1);
          document.getElementById("ludo2").innerHTML = rolle;
        }
    function reset9() {
          document.getElementById("ludo2").innerHTML = "";
        }