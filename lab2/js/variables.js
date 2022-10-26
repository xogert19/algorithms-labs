import { CHESS_PIECES } from "./constants.js";

export const chessBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

export const activeChessPiece = {
    chesspiece: CHESS_PIECES.white,
    number: CHESS_PIECES.white_number,
};

export let numberOfKnights = 0;
export let numberOfFinishes = 0;

export const setNumberOfKnights = (value) => numberOfKnights = value;
export const setNumberOfFinishes = (value) => numberOfFinishes = value;

export let isAddingChessPieces = false;
export let isRemovingWhiteChessPieces = false;
export let isRemovingBlackChessPieces = false;
export let isAddingKnight = false;
export let isAddingFinish = false;

export const setIsAddingChessPieces = (value) => numberOfKnights = value;
export const setIsRemovingWhiteChessPieces = (value) => numberOfFinishes = value;
export const setIsRemovingBlackChessPieces = (value) => numberOfKnights = value;
export const setIsAddingKnight = (value) => numberOfFinishes = value;
export const setIsAddingFinish = (value) => numberOfKnights = value;

export const temporaryTags = [];
export const constantTags = [];

export let isCalculated = false;
export const setIsCalculated = (value) => isCalculated = value;