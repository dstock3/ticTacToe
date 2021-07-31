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
const headContent = document.createTextNode("Tic-Tac-Toe");
gameHeader.appendChild(headContent);

const masterContainer = elementBuilder("div", "master-container", body);
const playerOneProfile = elementBuilder("div", "score", masterContainer);
playerOneProfile.setAttribute("id", "player-one");
const playerOneHeader = elementBuilder("div", "player-head", playerOneProfile)
const playerOneContent = document.createTextNode("Player One:");
playerOneHeader.appendChild(playerOneContent);
const playerOneScoreCount = elementBuilder("div", "score-number", playerOneProfile)
playerOneScoreCount.setAttribute("id", "player-one-score");

const mainContainer = elementBuilder("div", "main-container", masterContainer);
const gameContainer = elementBuilder("div", "game-container", mainContainer);

const playerTwoProfile = elementBuilder("div", "score", masterContainer);
playerTwoProfile.setAttribute("id", "player-two");
const playerTwoHeader = elementBuilder("div", "player-head", playerTwoProfile)
const playerTwoContent = document.createTextNode("Player Two:");
playerTwoHeader.appendChild(playerTwoContent);
const playerTwoScoreCount = elementBuilder("div", "score-number", playerTwoProfile)
playerTwoScoreCount.setAttribute("id", "player-two-score");
 
//Gameboard Setup

const X = "X";
const O = "O";

//for the initial game values
const spaces = [
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

    const newMove = (newIndexValue) => {
        removeChildren(parent);
        moveCount.push(1);
        let moveArray = flow(newflowArray);  
        let flowArray = moveArray[0];
        let move = moveArray[1];
        let newSpaceArray = reviseSpaceArray(gameSpaces, newIndexValue, move);
        let newBoardObj = gameBoard(newSpaceArray, parent, flowArray, moveCount);
        let winSet = winChecker(newBoardObj.gameSpaces, moveCount);
        return winSet
        }
    
    const scoreKeeper = (winSet, playerOneWinCount, playerTwoWinCount) => {
        let winResult = winSet[0];
        if (winResult) {
            let winCount = winSet[1];
            console.log("player 1: "  + winCount)
            playerOneWinCount = playerOneWinCount + winCount;
            let winCount2 = winSet[2];
            console.log("player 2: " + winCount2)
            playerTwoWinCount = playerTwoWinCount + winCount2;
            let winningProfile = winSet[3];
            let winContent = document.createTextNode(winCount + 1);
            let winElement = document.getElementById(`${winningProfile.id}` + `-score`);
            removeChildren(winElement)
            winElement.appendChild(winContent);
            winningProfile.appendChild(winElement);
        }

        return winResult
    }

    const noMoreMoves = (winResult, gameSpaces) => {
        if (winResult) {
            for (i = 0; i < gameSpaces.length; i++) {
                if (gameSpaces[i] === null) {
                    gameSpaces[i] = "void";
                }
            }
        }
    };  

    
    for (i = 0; i < gameSpaces.length; i++) {
        let newIndexValue = i;
        let spaceElement = elementBuilder("div", "space", parent);
        spaceElement.setAttribute("id", `position-${newIndexValue}`);
        if (gameSpaces[i] === null) {
            spaceElement.classList.add("blank");
            spaceElement.addEventListener('click', function executeMove() {
                let winSet = newMove(newIndexValue);
                let winResult = scoreKeeper(winSet, playerOneWinCount, playerTwoWinCount);
                noMoreMoves(winResult, gameSpaces);
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
        if (boardArray.includes(0) && boardArray.includes(1) && boardArray.includes(2)) {
            winner = true;
            return { winner }
        } else if (boardArray.includes(3) && boardArray.includes(4) && boardArray.includes(5)) {
            winner = true;
            return { winner }
        } else if (boardArray.includes(0) && boardArray.includes(4) && boardArray.includes(8)) {
            winner = true;
            return { winner }
        } else if (boardArray.includes(0) && boardArray.includes(3) && boardArray.includes(6)) {
            winner = true;
            return { winner }
        } else if (boardArray.includes(1) && boardArray.includes(4) && boardArray.includes(7)) {
            winner = true;
            return { winner }
        } else if (boardArray.includes(2) && boardArray.includes(4) && boardArray.includes(6)) {
            winner = true;
            return { winner }
        } else if (boardArray.includes(2) && boardArray.includes(5) && boardArray.includes(8)) {
            winner = true;
            return { winner }
        } else if (boardArray.includes(6) && boardArray.includes(7) && boardArray.includes(8)) {
            winner = true;
            return { winner }
        };
    };
    return { winner }
}

function buttonBuilder(buttonClass, spanClass, parent) {
    let button = elementBuilder("button", buttonClass, parent);
    button.type = "button";
    let span = elementBuilder("span", spanClass, button);
    let buttonBuild = [button, span];
    return buttonBuild;
};

function playButton(parent) {
    let playAgain = buttonBuilder("play-again", "button-text", parent);
    let playButton = playAgain[0];
    let playSpan = playAgain[1];
    let playMessage = document.createTextNode("Play Again");
    playSpan.appendChild(playMessage);
    return [playButton, playSpan];
}

function winChecker(boardArray, moveCount) {

    let scenarioX = win(boardArray, X);
    let scenarioO = win(boardArray, O);
    
    if (scenarioX.winner === true) {
        let messageContainer = elementBuilder("div", "message-container", mainContainer);
        let winMessage = elementBuilder("h2", "win-result", messageContainer);
        let winMessageContent = document.createTextNode("Player 1 has won!");
        winMessage.appendChild(winMessageContent);
        let newPlayButton = playButton(messageContainer);
        let playButtonElement = newPlayButton[0];
        playButtonElement.addEventListener('click', () => {
            removeChildren(messageContainer);
            removeChildren(gameContainer);
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
            
            let flowArray = [O];
            let initialMoveCount = [];
            let newGame = gameBoard(spaces, gameContainer, flowArray, initialMoveCount);
        });

        return true

    };

    if (scenarioO.winner === true) {
        let messageContainer = elementBuilder("div", "message-container", mainContainer);
        let winMessage = elementBuilder("h2", "win-result", messageContainer);
        let winMessageContent = document.createTextNode("Player 2 has won!");
        winMessage.appendChild(winMessageContent);
        let newPlayButton = playButton(messageContainer);
        let playButtonElement = newPlayButton[0];
        playButtonElement.addEventListener('click', () => {
            removeChildren(messageContainer);
            removeChildren(gameContainer);
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
            
            let flowArray = [O];
            let initialMoveCount = [];
            let newGame = gameBoard(spaces, gameContainer, flowArray, initialMoveCount);
        });

        return true

    };

    if ((scenarioX.winner === false) && (scenarioO.winner === false) && (moveCount.length === 9)) {
        let messageContainer = elementBuilder("div", "message-container", mainContainer);
        let tieMessage = elementBuilder("h2", "win-result", messageContainer);
        let tieContent = document.createTextNode("It's a tie!");
        tieMessage.appendChild(tieContent);
        let newPlayButton = playButton(messageContainer);
        let playButtonElement = newPlayButton[0];
        playButtonElement.addEventListener('click', () => {
            removeChildren(messageContainer);
            removeChildren(gameContainer);
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
            
            let flowArray = [O];
            let initialMoveCount = [];
            let newGame = gameBoard(spaces, gameContainer, flowArray, initialMoveCount);

        });
        return true
        
    };
};



















