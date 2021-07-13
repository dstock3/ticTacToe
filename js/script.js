const gameBoard = () => {
    //this object will hold the values for each space
    spaces: [topLeft, topMiddle, topRight, midLeft, center, midRight, bottomLeft, bottomMiddle, bottomRight];
    const startGame = (spaces) => {
        for (i = 0; i < spaces.length; i++) {
            spaces[i] = null;
        }
    }
};

gameBoard.startGame(gameBoard.spaces);

const player = () => {
    //the player object prototype will contain methods to change values in board object

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
    //this function will generate the elements based on the values in board object
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