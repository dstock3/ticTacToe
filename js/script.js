const gameBoard = (() => {
    //this object will hold the values for each space
    const spaces = [];
    const startGame = (spaces) => {
        for (i = 0; i < 9; i++) {
            spaces.push(null);
            let newSpace = spaces[i]; 
        }
    }

    const firstPosition = (spaces) => {
        for (i = 0; i < 9; i++) {
            if (i === 0) {
                spaces.push("X");
            } else {
                spaces.push(null);
            }
        }
    }

    return {spaces, startGame, firstPosition};
})();

const player = (name) => {
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

const gameHeader = elementBuilder("h1", "head", body);
const headContent = document.createTextNode("Tic Tac Toe!");
gameHeader.appendChild(headContent);

const gameContainer = elementBuilder("div", "game-container", body);

function renderDisplay(board, parent) {
    //this function will generate the elements based on the values in board object
    board.startGame(board.spaces);
    for (i = 0; i < board.spaces.length; i++) {
        if (i < 9) {
            let spaceElement = elementBuilder("div", "space", parent);
            spaceElement.setAttribute("id", `position-${i}`);
            
            if (board.spaces[i] === null) {
                spaceElement.classList.add("blank");
                
            } else if (board.spaces[i] === 'X') {
                let xContent = document.createTextNode("X");
                spaceElement.appendChild(xContent);
                spaceElement.classList.add("x");
            } else if (board.spaces[i] === "O") {
                let oContent = document.createTextNode("O");
                spaceElement.appendChild(oContent);
                spaceElement.classList.add("o");
            };  
        };
    };
};

renderDisplay(gameBoard, gameContainer);