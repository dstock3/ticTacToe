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

const X = "X";
const Y = "Y";

let spaces = [
    null, //position-0 top left
    null, //position-1 top middle
    null, //position-2 top right
    null, //position-3 mid left
    null, //position-4 mid middle
    null, //position-5 mid right 
    null, //position-6 bottom left
    null, //position-7 bottom middle
    null  //position-8 bottom right
]; 
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
            } else if (gameSpaces[i] === X) {
                let xContent = document.createTextNode(X);
                spaceElement.appendChild(xContent);
                spaceElement.classList.add("x");
                spaceArray.push(spaceElement);
            } else if (gameSpaces[i] === "O") {
                let oContent = document.createTextNode(O);
                spaceElement.appendChild(oContent);
                spaceElement.classList.add(O);
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

const win = (array, boardPiece) => {
    let win = false; //win is set to false by default
    let boardArray = [];
    for (i = 0; i < array.length; i++) {
        
        if (array[i] === boardPiece) {
            boardArray.push(i)
        };
    };
    console.log(boardArray)

    for (i = 0; i < array.length; i++) {
        if (JSON.stringify(boardArray) === JSON.stringify([0, 1, 2])) {
            return true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([0, 4, 8])) {
            return true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([1, 4, 7])) {
            return true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([2, 4, 6])) {
            return true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([2, 5, 8])) {
            return true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([3, 4, 5])) {
            return true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([6, 7, 8])) {
            return true;
        };
    };
    return win
}


//const winningMove = win(spaces, X);











