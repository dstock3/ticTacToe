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

const flowArray = [O];
const initialMoveCount = [];

function flow (newFlowArray) {
    let lastValue = (newFlowArray.length -1)
    if (newFlowArray[lastValue] === X) {
        newFlowArray.push(O);
        return [newFlowArray, O];
    } else if (newFlowArray[lastValue] === O) {
        newFlowArray.push(X);
        return [newFlowArray, X];
    } else if (newFlowArray.length > 9) {
        return null
    }
};

const gameBoard = (gameSpaces, parent, newflowArray, moveCount) => {
    let spaceElementArray = [];
    
    function reviseSpaceArray(spaceArray, i, boardPiece) {
        spaceArray.splice(i, 1, boardPiece);
        return spaceArray;
    }

    for (i = 0; i < gameSpaces.length; i++) {
        let newIndexValue = i;
        let spaceElement = elementBuilder("div", "space", parent);
        spaceElement.setAttribute("id", `position-${newIndexValue}`);
        if (gameSpaces[i] === null) {
            spaceElement.classList.add("blank");
            spaceElement.addEventListener('click', () => {
                removeChildren(parent);
                moveCount.push(1);
                let moveArray = flow(newflowArray);  
                let flowArray = moveArray[0];
                let move = moveArray[1];
                let newSpaceArray = reviseSpaceArray(gameSpaces, newIndexValue, move);
                let newBoardObj = gameBoard(newSpaceArray, parent, flowArray, moveCount);
                winChecker(newBoardObj.gameSpaces, parent, moveCount);
            });
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
    return { spaceElementArray, gameSpaces };
};

const initialBoardObj = gameBoard(spaces, gameContainer, flowArray, initialMoveCount);

const win = (array, boardPiece) => {
    let winner = false;
    let boardArray = [];

    for (i = 0; i < array.length; i++) {
        
        if (array[i] === boardPiece) {
            boardArray.push(i)
        };
    };

    for (i = 0; i < array.length; i++) {
        if (JSON.stringify(boardArray) === JSON.stringify([0, 1, 2])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([3, 4, 5])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([0, 4, 8])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([0, 3, 6])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([1, 4, 7])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([2, 4, 6])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([2, 5, 8])) {
            winner = true;
        } else if (JSON.stringify(boardArray) === JSON.stringify([6, 7, 8])) {
            winner = true;
        }
    };
    return { winner }
}

function winChecker(boardArray, parent, moveCount) {
    
    console.log(moveCount)
    let winCheck = win(boardArray, X);
    if (winCheck.winner === true) {
        let winMessage = elementBuilder("h2", "win-result", parent);
        let winContent = document.createTextNode("Player 1 has won!");
        winMessage.appendChild(winContent);
    };

    winCheck = win(boardArray, O);
    if (winCheck.winner === true) {
        let winMessage = elementBuilder("h2", "win-result", parent);
        let winContent = document.createTextNode("Player 2 has won!");
        winMessage.appendChild(winContent);
    };

    if ((winCheck.winner === false) && (moveCount.length === 9)) {
        let tieMessage = elementBuilder("h2", "win-result", parent);
        let tieContent = document.createTextNode("It's a tie!");
        tieMessage.appendChild(tieContent);
    };

};




















