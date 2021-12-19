const playButton = document.querySelector("#PlayButton");
const playModal = document.querySelector(".play-modal");
const playItem = document.querySelectorAll(".item");
const modalOverlay = document.querySelector(".modal-overlay");
const leftImage = document.querySelector(".left-image > img");
const rightImage = document.querySelector(".right-image > img");
const result = document.querySelector(".result");
const itemsArray = ["rock", "paper", "scissors"];
const leftScoreHTML = document.querySelector("#leftScore");
const rightScoreHTML = document.querySelector("#rightScore");

var yourchoice;
var computerchoice;

var leftScore = 0;
var rightScore = 0;

result.innerText = "Welcome";

playButton.addEventListener('click', () => {
    playModal.classList.add("show");
    modalOverlay.classList.add("show");
});

playItem.forEach(item => {
    item.addEventListener('click', () => {
        playModal.classList.remove("show");
        modalOverlay.classList.remove("show");

        yourchoice = item.dataset.value;
        console.log("You: " + yourchoice);
        var random = Math.floor(Math.random() * itemsArray.length);

        computerchoice = itemsArray[random];
        console.log("Computer: " + computerchoice);

        if (yourchoice === computerchoice) {
            result.innerText = "It's a tie!";
        } else if (yourchoice === "rock") {
            if (computerchoice === "paper") {
                result.innerText = "You lose!";
                rightScore++;
            } else {
                result.innerText = "You win!";
                leftScore++;
            }
        } else if (yourchoice === "paper") {
            if (computerchoice === "scissors") {
                result.innerText = "You lose!";
                rightScore++;
            } else {
                result.innerText = "You win!";
                leftScore++;
            }
        } else if (yourchoice === "scissors") {
            if (computerchoice === "rock") {
                result.innerText = "You lose!";
                rightScore++;
            } else {
                result.innerText = "You win!";
                leftScore++;
            }
        }

        switch (yourchoice) {
            case "rock": leftImage.src = "img/rock.png";
            break;
            case "paper": leftImage.src = "img/paper.png";
            break;
            case "scissors": leftImage.src = "img/scissors.png";
            break;
        }

        switch (computerchoice) {
            case "rock": rightImage.src = "img/rock.png";
            break;
            case "paper": rightImage.src = "img/paper.png";
            break;
            case "scissors": rightImage.src = "img/scissors.png";
            break;
        }

        leftScoreHTML.innerText = leftScore;
        rightScoreHTML.innerText = rightScore;

    });
});