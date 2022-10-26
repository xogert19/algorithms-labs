import { field, cells } from "./script.js";
import { CHESS_PIECES } from "./constants.js";
import { DijkstraAlgorithm } from "./calculations.js";
import { removeEventListeners, getIndex, getCoords, MarkupTheWay } from "./utils.js";
import { chessBoard, activeChessPiece, isAddingChessPieces, isRemovingWhiteChessPieces, isRemovingBlackChessPieces, isAddingKnight, isAddingFinish } from "./variables.js";
import { setIsAddingChessPieces, setIsRemovingWhiteChessPieces, setIsRemovingBlackChessPieces, setIsAddingKnight, setIsAddingFinish, temporaryTags, constantTags } from "./variables.js";
import { Knight, Finish, addChessPiece, removeWhiteChessPiece, removeBlackChessPiece, addKnightChessPiece, removeKnightChessPiece, addFinishCell, removeFinishCell } from "./chesspieces.js";
import { isCalculated, setIsCalculated } from "./variables.js";

export const addWhitePieces = () => {
    if (isCalculated) {
        reset();
        setIsCalculated(false);
    }

    activeChessPiece.chesspiece = CHESS_PIECES.white;
    activeChessPiece.number = CHESS_PIECES.white_number;

    removeEventListeners();

    if (!isAddingChessPieces) {
        field.addEventListener('click', addChessPiece);
        setIsAddingChessPieces(true);
    }

    field.classList.add('field-hover');
}

export const removeWhitePieces = () => {
    if (isCalculated) {
        reset();
        setIsCalculated(false);
    }

    removeEventListeners();

    if (!isRemovingWhiteChessPieces) {
        field.addEventListener('click', removeWhiteChessPiece);
        setIsRemovingWhiteChessPieces(true);
    }

    field.classList.add('field-hover');
}


export const addBlackPieces = () => {
    if (isCalculated) {
        reset();
        setIsCalculated(false);
    }

    activeChessPiece.chesspiece = CHESS_PIECES.black;
    activeChessPiece.number = CHESS_PIECES.black_number;

    removeEventListeners();

    if (!isAddingChessPieces) {
        field.addEventListener('click', addChessPiece);
        setIsAddingChessPieces(true);
    }

    field.classList.add('field-hover');
}

export const removeBlackPieces = () => {
    if (isCalculated) {
        reset();
        setIsCalculated(false);
    }

    removeEventListeners();

    if (!isRemovingBlackChessPieces) {
        field.addEventListener('click', removeBlackChessPiece);
        setIsRemovingBlackChessPieces(true);
    }

    field.classList.add('field-hover');
}

export const addKnightPiece = () => {
    if (isCalculated) {
        reset();
        setIsCalculated(false);
    }

    removeEventListeners();

    if (!isAddingKnight) {
        field.addEventListener('click', addKnightChessPiece);
        setIsAddingKnight(true);
    }

    field.classList.add('field-hover');
}

export const removeKnightPiece = () => {
    if (isCalculated) {
        reset();
        setIsCalculated(false);
    }

    removeEventListeners();

    removeKnightChessPiece();
}

export const addFinish = () => {
    if (isCalculated) {
        reset();
        setIsCalculated(false);
    }

    removeEventListeners();

    if (!isAddingFinish) {
        field.addEventListener('click', addFinishCell);
        setIsAddingFinish(true);
    }

    field.classList.add('field-hover');
}

export const removeFinish = () => {
    if (isCalculated) {
        reset();
        setIsCalculated(false);
    }

    removeEventListeners();

    removeFinishCell();
}

export const reset = () => {
    cells.forEach((item, index) => {
        item.innerHTML = null;
        item.classList.remove('way', 'finish', 'knight');

        const [x, y] = getCoords(index);
        chessBoard[y][x] = CHESS_PIECES.empty_number;
    });

    temporaryTags.length = 0;
    constantTags.length = 0;

    removeEventListeners();

    removeKnightChessPiece();
    removeFinishCell();
}

export const calculate = () => {
    if (Knight.isSet && Finish.isSet) {
        const {x, y} = Knight;
        const knightIndex = getIndex(x, y);

        const KnightObject = {
            weight: 0,
            parentIndex: null,
            vertexIndex: knightIndex,
            x: x,
            y: y,
        }
        
        constantTags.push(KnightObject);

        DijkstraAlgorithm(x, y, knightIndex, 0);

        MarkupTheWay();

        setIsCalculated(true);

        temporaryTags.length = 0;
        constantTags.length = 0;
    } else {
        alert('Knight and Finish must be set!');
    }

    removeEventListeners();
}