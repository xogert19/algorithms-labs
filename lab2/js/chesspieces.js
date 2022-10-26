import { cells } from "./script.js";
import { getCoords, getIndex } from "./utils.js";
import { chessBoard, activeChessPiece, numberOfKnights, numberOfFinishes, setNumberOfFinishes, setNumberOfKnights } from "./variables.js";
import { MAX_NUMBER_OF_KNIGHTS, MAX_NUMBER_OF_FINISHES, CHESS_PIECES } from "./constants.js";

export const Knight = {
    x: null,
    y: null,
    isSet: false,
}

export const Finish = {
    x: null,
    y: null,
    isSet: false,
}

export const addChessPiece = (event) => {
    const index = cells.indexOf(event.target);
    const [x, y] = getCoords(index);

    if (!chessBoard[y]) return;
    if (chessBoard[y][x] !== CHESS_PIECES.empty_number) return;

    chessBoard[y][x] = activeChessPiece.number;

    const cell = event.target;
    const chesspiece = document.createElement("div");
    chesspiece.classList.add(activeChessPiece.chesspiece);

    cell.appendChild(chesspiece);
}

export const removeWhiteChessPiece = (event) => {
    const index = cells.indexOf(event.target.parentElement);
    const [x, y] = getCoords(index);

    if (!chessBoard[y]) return;

    if (chessBoard[y][x] === CHESS_PIECES.white_number) {
        chessBoard[y][x] = CHESS_PIECES.empty_number;

        const cell = event.target.parentElement;
        cell.innerHTML = null;
    }
}

export const removeBlackChessPiece = (event) => {
    const index = cells.indexOf(event.target.parentElement);
    const [x, y] = getCoords(index);

    if (!chessBoard[y]) return;

    if (chessBoard[y][x] === CHESS_PIECES.black_number) {
        chessBoard[y][x] = CHESS_PIECES.empty_number;

        const cell = event.target.parentElement;
        cell.innerHTML = null;
    }
}

export const addKnightChessPiece = (event) => {
    if (numberOfKnights >= MAX_NUMBER_OF_KNIGHTS) {
        alert('There must be only one knight!');
        return;
    }

    const cell = event.target;

    const knight = document.createElement("div");
    knight.classList.add('knight');
    knight.innerText = 'K';

    cell.appendChild(knight);

    const index = cells.indexOf(event.target);
    const [x, y] = getCoords(index);

    Knight.x = x;
    Knight.y = y;
    Knight.isSet = true;

    setNumberOfKnights(numberOfKnights + 1);

    chessBoard[y][x] = CHESS_PIECES.knight;
}

export const removeKnightChessPiece = () => {
    setNumberOfKnights(0);

    if (Knight.isSet) {
        const {x, y} = Knight;
        const index = getIndex(x, y);

        chessBoard[y][x] = CHESS_PIECES.empty_number;

        cells[index].innerHTML = null;

        Knight.x = null;
        Knight.y = null;
        Knight.isSet = false;
    }
}

export const addFinishCell = (event) => {
    if (numberOfFinishes >= MAX_NUMBER_OF_FINISHES) {
        alert('There must be only one finish!');
        return;
    }

    const cell = event.target;

    cell.classList.add('finish');
    cell.innerText = CHESS_PIECES.finish;


    const index = cells.indexOf(event.target);
    const [x, y] = getCoords(index);

    Finish.x = x;
    Finish.y = y;
    Finish.isSet = true;

    setNumberOfFinishes(numberOfFinishes + 1);

    chessBoard[y][x] = CHESS_PIECES.finish;
}

export const removeFinishCell = () => {
    setNumberOfFinishes(0);

    if (Finish.isSet) {
        const {x, y} = Finish;
        const index = getIndex(x, y);

        chessBoard[y][x] = CHESS_PIECES.empty_number;
       
        cells[index].innerText = null;
        cells[index].classList.remove('finish');

        Finish.x = null;
        Finish.y = null;
        Finish.isSet = false;
    }
}