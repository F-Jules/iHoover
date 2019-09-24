const room = document.getElementById("main-room");
const iHooverStartDiv = document.getElementById("iHoover-start-div");
const instructionsDiv = document.getElementById("instructions-div");
const initializeGridButton = document.getElementById("initialize-grid-button");
const initializeiHooverButton = document.getElementById(
  "initialize-iHoover-button"
);
const setInstructionsButton = document.getElementById("setInstructions-button");
const reinitializeButton = document.getElementById("reinitialize-button");
const feedback = document.getElementById("feedback-p");
let newiHoover;

initializeRoom = () => {
  const width = parseInt(document.getElementById("room-width-input").value);
  const height = parseInt(document.getElementById("room-height-input").value);

  if (width < 0 || height < 0 || width >= 100 || height >= 100) {
    feedback.innerHTML =
      "Width and height must be equal or more than 0 and less than 100";
  } else {
    if (width && height) {
      room.style.display = "grid";
      iHooverStartDiv.style.display = "block";
      feedback.style.display = "none";
    } else {
      feedback.innerHTML = "Please enter a width and an height for the room";
    }

    room.setAttribute("width", width);
    room.setAttribute("height", height);
    room.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    room.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    for (let i = 0; i <= height - 1; i++) {
      for (let j = 0; j <= width - 1; j++) {
        var newCell = document.createElement("div");
        newCell.className = "grid-block";
        newCell.id = "x:" + j + "y:" + (height - 1 - i);
        room.appendChild(newCell);
        newCell.innerHTML = newCell.id;
      }
    }
  }
};

initializeiHoover = () => {
  const xiHoover = parseInt(document.getElementById("iHoover-x-input").value);
  const yiHoover = parseInt(document.getElementById("i-Hoover-y-input").value);
  const gridW = parseInt(room.getAttribute("width"));
  const gridH = parseInt(room.getAttribute("height"));

  if (xiHoover < 0 || yiHoover < 0 || xiHoover > gridW || yiHoover > gridH) {
    feedback.style.display = "block";
    feedback.innerHTML = `iHoover-Proto's X and Y must be set beetween 0 and X:${gridW} / Y:${gridH}`;
  } else {
    feedback.style.display = "none";
    const startingCell = document.getElementById(`x:${xiHoover}y:${yiHoover}`);
    startingCell.style.backgroundColor = "red";
    instructionsDiv.style.display = "block";
    newiHoover = new iHooverProto(xiHoover, yiHoover, "N");
  }
};

setInstructions = () => {
  const gridW = parseInt(room.getAttribute("width"));
  const gridH = parseInt(room.getAttribute("height"));
  const instructionsInput = document
    .getElementById("instructions-input")
    .value.toUpperCase()
    .split("");

  const allowedInstructions = ["A", "D", "G"];
  for (let l = 0; l < instructionsInput.length; l++) {
    if (!allowedInstructions.includes(instructionsInput[l])) {
      console.log(
        "HERE ," + instructionsInput[l],
        allowedInstructions.includes(instructionsInput[l])
      );
      feedback.style.display = "block";
      feedback.innerHTML = "Please be sure to enter only A, G or D";
      break;
    } else {
      feedback.style.display = "none";
      newiHoover.setInstructionsToiHoover(instructionsInput[l]);

      const actualCell = document.getElementById(
        `x:${newiHoover.x}y:${newiHoover.y}`
      );
      if (actualCell) actualCell.style.backgroundColor = "red";
    }
  }
  console.log(typeof newiHoover.x);
  if (
    newiHoover.x < 0 ||
    newiHoover.y < 0 ||
    newiHoover.x > gridW ||
    newiHoover > gridH
  ) {
    feedback.style.display = "block";
    feedback.innerHTML = "Oups... iHoover went into a wall";
  } else {
    feedback.style.display = "block";
    feedback.style.color = "green";
    feedback.innerHTML = `Task completed: iHoover now standing in x:${newiHoover.x} - y:${newiHoover.y}`;
  }
};

initializeGridButton.onclick = initializeRoom;
initializeiHooverButton.onclick = initializeiHoover;
setInstructionsButton.onclick = setInstructions;
reinitializeButton.onclick = window.location.reload;
