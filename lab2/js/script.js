import { addWhitePieces, removeWhitePieces, addBlackPieces, removeBlackPieces, addKnightPiece, removeKnightPiece, addFinish, removeFinish, calculate, reset } from "./eventListeners.js";

export const field = document.querySelector('.field');

for (let i = 0; i < 64; i++) {
    const cell = document.createElement("div");
    cell.classList.add('cell');

    if (Math.floor(i / 8) % 2 === 0) {
        cell.classList.add(i % 2 ? 'black-cell' : 'white-cell');
    } else {
        cell.classList.add(i % 2 ? 'white-cell' : 'black-cell');
    }

    field.appendChild(cell);
}

export const cells = Array.from(document.querySelectorAll('.cell'));

const addWhitePiecesBtn    = document.querySelector('.add-white');
const removeWhitePiecesBtn = document.querySelector('.remove-white');
const addBlackPiecesBtn    = document.querySelector('.add-black');
const removeBlackPiecesBtn = document.querySelector('.remove-black');
const addKnightBtn         = document.querySelector('.add-knight');
const removeKnightBtn      = document.querySelector('.remove-knight');
const addFinishBtn         = document.querySelector('.add-finish');
const removeFinishBtn      = document.querySelector('.remove-finish');
const calculateBtn         = document.querySelector('.calculate');
const resetBtn             = document.querySelector('.reset');

addWhitePiecesBtn.addEventListener('click', addWhitePieces);
removeWhitePiecesBtn.addEventListener('click', removeWhitePieces);

addBlackPiecesBtn.addEventListener('click', addBlackPieces);
removeBlackPiecesBtn.addEventListener('click', removeBlackPieces);

addKnightBtn.addEventListener('click', addKnightPiece);
removeKnightBtn.addEventListener('click', removeKnightPiece);

addFinishBtn.addEventListener('click', addFinish);
removeFinishBtn.addEventListener('click', removeFinish);

calculateBtn.addEventListener('click', calculate);

resetBtn.addEventListener('click', reset);