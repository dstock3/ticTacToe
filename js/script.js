
//Basic HTML Elements
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

//Module to build game logic

const gameBoard = (() => {
    //this module will hold the values for each space
    const spaces = [];
    const startGame = (spaces) => {
        for (i = 0; i < 9; i++) {
            spaces.push(null);
        }
    }

    const move = (spaces, movePosition) => {
        for (i = 0; i < spaces.length; i++) {
            if (movePosition === i) {
                spaces.splice(i, 1, "X");
            } else {
                spaces.push(null);
            }
        }
    }

    return {spaces, startGame, move};
})();

const player = (name) => {
    //the player object prototype will contain methods to change values in board object

};

const playerOne = player(); 
const playerTwo = player();

const renderDisplay = (board, parent) => {
    //this function will generate the elements based on the values in board object
    const renderBoard = board.startGame(board.spaces);
    let spaceArray = [];
    for (i = 0; i < board.spaces.length; i++) {
        if (i < 9) {
            let spaceElement = elementBuilder("div", "space", parent);
            spaceElement.setAttribute("id", `position-${i}`);
            if (board.spaces[i] === null) {
                spaceElement.classList.add("blank");
                spaceArray.push(spaceElement);
            } else if (board.spaces[i] === 'X') {
                let xContent = document.createTextNode("X");
                spaceElement.appendChild(xContent);
                spaceElement.classList.add("x");
                spaceArray.push(spaceElement);
            } else if (board.spaces[i] === "O") {
                let oContent = document.createTextNode("O");
                spaceElement.appendChild(oContent);
                spaceElement.classList.add("o");
                spaceArray.push(spaceElement);
            }; 
            
        };

    };
    return {spaceArray}
};

//Factory function to build gameFlow object to direct sequence of moves

const gameFlow = (board, display) => {
    for (i = 0; i < board.spaces.length; i++) {
        let space = document.getElementById(`position-${i}`);
        space.addEventListener('click', () => {
            
        });
    };
};

const render = renderDisplay(gameBoard, gameContainer);
const flow = gameFlow(gameBoard, render);