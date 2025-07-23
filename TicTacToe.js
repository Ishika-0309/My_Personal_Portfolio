let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPattents = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button was click!");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations ,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};
const checkWinner = () => {
  let winnerFound = false;
  for (let pattern of winPattents) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    console.log(`Pos 1: ${pos1Val} ,Pos 2: ${pos2Val} ,Pos 3: ${pos3Val}`);
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        winnerFound = true;
        console.log("Winner", pos1Val);
        disabledBoxes();
        showWinner(pos1Val);
        return;
      }
    }
  }
  let allFilled = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      allFilled = false;
    }
  });
  if (!winnerFound && allFilled) {
    showDraw();
  }
};

const showDraw = () => {
  msg.innerText = `It's a Draw ! Play again `;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const resetGame = () => {
  turnO = true;
  enabledBoxes();
  msgContainer.classList.add("hide");
};
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
