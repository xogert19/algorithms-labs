import { field, cells } from "./script.js";
import { setIsAddingChessPieces, setIsRemovingWhiteChessPieces, setIsRemovingBlackChessPieces, setIsAddingKnight, setIsAddingFinish, constantTags } from "./variables.js";
import { Knight, Finish, addChessPiece, removeWhiteChessPiece, removeBlackChessPiece, addKnightChessPiece, removeKnightChessPiece, addFinishCell, removeFinishCell } from "./chesspieces.js";

export const getCoords = (index) => {
    const y = Math.floor(index / 8);
    const x = index - y * 8;
    
    return [x, y];
}

export const getIndex = (x, y) => {
    return y * 8 + x;
}

export const removeEventListeners = () => {
    field.removeEventListener('click', addChessPiece);
    field.removeEventListener('click', removeWhiteChessPiece);
    field.removeEventListener('click', removeBlackChessPiece);
    field.removeEventListener('click', addKnightChessPiece);
    field.removeEventListener('click', removeKnightChessPiece);
    field.removeEventListener('click', addFinishCell);
    field.removeEventListener('click', removeFinishCell);

    setIsAddingChessPieces(false);
    setIsRemovingWhiteChessPieces(false);
    setIsRemovingBlackChessPieces(false);
    setIsAddingKnight(false);
    setIsAddingFinish(false);

    field.classList.remove('field-hover');
}

export const MarkupTheWay = () => {
    const {x, y} = Finish;
    const index = getIndex(x, y);

    if (constantTags.find((vertex) => vertex.vertexIndex === index) === undefined) {
        alert('Finish is unreacable!');
        console.log('Finish is unreachable!');
    } else {
        let cell = constantTags.find((vertex) => vertex.vertexIndex === index);

        let counter = 0;
        while (cell.parentIndex !== null) {
            counter++;
            cell = constantTags.find((vertex) => vertex.vertexIndex === cell.parentIndex);
        }

        cell = constantTags.find((vertex) => vertex.vertexIndex === index);

        while (cell.parentIndex !== null) {
            cells[cell.vertexIndex].classList.add('way');

            if ((cell.vertexIndex !== getIndex(Finish.x, Finish.y)) && (cell.vertexIndex !== getIndex(Knight.x, Knight.y))) {
                cells[cell.vertexIndex].innerText = `${counter}`;
                counter--;
            }

            cell = constantTags.find((vertex) => vertex.vertexIndex === cell.parentIndex);
        }
    }
}