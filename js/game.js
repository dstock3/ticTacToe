
//Basic HTML Elements
function elementBuilder (elType, className, parent) {
    const newElement = document.createElement(elType);
    newElement.classList.add(className);
    parent.appendChild(newElement);
    return newElement;
};

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const body = document.getElementsByTagName("body")[0];
const gameHeader = elementBuilder("h1", "head", body);
const headContent = document.createTextNode("Tic Tac Toe!");
gameHeader.appendChild(headContent);
const gameContainer = elementBuilder("div", "game-container", body);

//Gameboard Setup

const X = "X";
const O = "O";
/*
//for the initial game values
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

const gameBoard = (gameSpaces, parent) => {
    let spaceElementArray = [];
    for (i = 0; i < gameSpaces.length; i++) {
        let spaceElement = elementBuilder("div", "space", parent);
        spaceElement.setAttribute("id", `position-${i}`);
        if (gameSpaces[i] === null) {
            spaceElement.classList.add("blank");
            spaceElementArray.push(spaceElement);
        } else if (gameSpaces[i] === X) {
            let xContent = document.createTextNode(X);
            spaceElement.appendChild(xContent);
            spaceElement.classList.add(X);
            spaceElementArray.push(spaceElement);
        } else if (gameSpaces[i] === O) {
            let oContent = document.createTextNode(O);
            spaceElement.appendChild(oContent);
            spaceElement.classList.add(O);
            spaceElementArray.push(spaceElement);
        };
    }
    return { spaceElementArray };
};

const initialBoardObj = gameBoard(spaces, gameContainer);
const boardElements = initialBoardObj.spaceElementArray;

const flow = ((blankSpaces, spaceElArray, parent) => {
    let newSet = [];
    for (i = 0; i < blankSpaces.length; i++) {
        spaceElArray[i].addEventListener('click', () => {
            (function (_blankSpaces) {
                blankSpaces.splice(i, 1, X);
            } ());
            removeChildren(parent);   
            let newBoardObj = gameBoard(blankSpaces, parent);
            let newBoardElements = newBoardObj.spaceElementArray;
            newSet.push(blankSpaces, newBoardElements);
        });
    return { newSet };

    };
})();

*/

const win = (array, boardPiece) => {
    let winner = false; //win is set to false by default
    let boardArray = [];

    for (i = 0; i < array.length; i++) {
        
        if (array[i] === boardPiece) {
            boardArray.push(i)
        };
    };

    for (i = 0; i < array.length; i++) {
        if (JSON.stringify(boardArray) === JSON.stringify([0, 1, 2])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([0, 4, 8])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([1, 4, 7])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([2, 4, 6])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([2, 5, 8])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([3, 4, 5])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([6, 7, 8])) {
            winner = true;
        };
    };

    
    /*
    if (winner === false) {
        //if winner is false when this is called, I think I can instantiate another round here

    }*/

    return { winner }
}


let exampleArray = [
    X, //position-0 top left
    X, //position-1 top middle
    X, //position-2 top right
    null, //position-3 mid left
    null, //position-4 mid middle
    null, //position-5 mid right 
    null, //position-6 bottom left
    null, //position-7 bottom middle
    null  //position-8 bottom right
]; 

//const gameFlow = flow(spaces, boardElements, gameContainer);
//let newGameArray = gameFlow.newSet[0];
//let winCheck = win(newGameArray, X);

const playerArray = [X, O];

function winChecker(boardArray, parent) {
    for (i = 0; i <= playerArray.length; i++) {
        console.log(playerArray[i])
        let winCheck = win(boardArray, playerArray[i]);
        let winner = winCheck.winner;
        if (winner === true) {
            let winMessage = elementBuilder("h2", "win-result", parent);
            if (JSON.stringify(playerArray[i]) === JSON.stringify(X)) {
                let winContent = document.createTextNode("Player 1 has won!");
                winMessage.appendChild(winContent);
                return winMessage
            } else if (JSON.stringify(playerArray[i]) === JSON.stringify(O)) {
                let winContent = document.createTextNode("Player 2 has won!");
                winMessage.appendChild(winContent);
                return winMessage
            };
        }; //else if winCheck = false, instantiate a new round */
    }
}

winChecker(exampleArray, body);






















