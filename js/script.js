const gameBoard = () => {
    spaces: [topLeft, topMiddle, topRight, midLeft, center, midRight, bottomLeft, bottomMiddle, bottomRight];
    const startGame = (spaces) => {
        for (i = 0; i < spaces.length; i++) {
            spaces[i] = null;
        }
    }
};

gameBoard.startGame(gameBoard.spaces);

const player = () => {

};

const playerOne = player(); 
const playerTwo = player();

function elementBuilder (elType, className, parent) {
    const newElement = document.createElement(elType);
    newElement.classList.add(className);
    parent.appendChild(newElement);
    return newElement;
};

const body = document.getElementsByTagName("body")[0];

function renderDisplay(board, parent) {
    let spaces = board.spaces;
    for (i = 0; i < spaces.length; i++) {
        if (spaces[i] === null) {
            let blankElement = elementBuilder("div", "space", parent);
            blankElement.setAttribute("id", "blank");

        } else if (spaces[i] === 'X') {
            let xElement = elementBuilder("div", "space", parent);
            xElement.setAttribute("id", "x");

        } else if (spaces[i] === "O") {
            let oElement = elementBuilder("div", "space", parent);
            oElement.setAttribute("id", "o");
        }
    };
};

renderDisplay(gameBoard, body);