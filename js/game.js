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

//Gameboard Setup

let spaces = [null, null, null, null, null, null, null, null, null]; 
//for the initial game values

const spaceValues = ((spaceArray) => {
    //This function will manipulate values based on the spaceArray that is passed to it.
    const spaceMove = (spaceArray, spacePosition, spaceValue) => {
        for (i = 0; i < spaceArray.length; i++) {
            if (spacePosition === i) {
                spaceArray[i] = spaceValue;
            };
        };
        return spaceArray
    };
    return {spaceMove}
})();

const gameBoard = ((gameSpaces) => {
    const game = (gameSpaces, parent) => {
        let spaceArray = [];
        for (i = 0; i < gameSpaces.length; i++) {
            let spaceElement = elementBuilder("div", "space", parent);
            spaceElement.setAttribute("id", `position-${i}`);
            if (gameSpaces[i] === null) {
                spaceElement.classList.add("blank");
                spaceArray.push(spaceElement);
            } else if (gameSpaces[i] === 'X') {
                let xContent = document.createTextNode("X");
                spaceElement.appendChild(xContent);
                spaceElement.classList.add("x");
                spaceArray.push(spaceElement);
            } else if (gameSpaces[i] === "O") {
                let oContent = document.createTextNode("O");
                spaceElement.appendChild(oContent);
                spaceElement.classList.add("o");
                spaceArray.push(spaceElement);
            };
        }
        return spaceArray
    }
    return {gameSpaces, game};
})();

const board = gameBoard.game(spaces, gameContainer);

const flow = (blankSpaces) => {
    let newBoard = blankSpaces; //creates a new array based on the values from the initial array
    const boardEvents = () => {
        for (i = 0; i < newBoard.length; i++) {
            let space = newBoard[i];
            space.addEventListener('click', () => {
                newBoard[i] = "X"
            });
        };
        return newBoard;
    };

    return {boardEvents, newBoard}
};

const gameFlow = flow(board, gameBoard.spaces);

