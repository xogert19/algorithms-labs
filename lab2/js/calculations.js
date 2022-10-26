import { getIndex } from "./utils.js";
import { CHESS_PIECES } from "./constants.js";
import { chessBoard, temporaryTags, constantTags, isCalculated, setIsCalculated } from "./variables.js";

const isVertexValid = (x, y) => {
    if (x >= 8 || x < 0) return false;
    if (y >= 8 || y < 0) return false;

    if (chessBoard[y][x] === CHESS_PIECES.white_number) return false;
    if (chessBoard[y][x] === CHESS_PIECES.knight) return false;

    if (constantTags.find((vertex) => vertex.vertexIndex === getIndex(x, y)) === undefined) {
        if (chessBoard[y][x] === CHESS_PIECES.empty_number) return true;
        if (chessBoard[y][x] === CHESS_PIECES.black_number) return true;
        if (chessBoard[y][x] === CHESS_PIECES.finish) return true;
    }

    return false;
}

const addVertex = (x, y, parentIndex, parentWeight) => {
    if (isVertexValid(x, y)) {
        const weightToVertex = chessBoard[y][x] === CHESS_PIECES.black_number ? CHESS_PIECES.black_chesspiece_weight : CHESS_PIECES.empty_cell_weight;

        temporaryTags.push({
            weight: parentWeight + weightToVertex,
            parentIndex: parentIndex,
            vertexIndex: getIndex(x, y),
            x,
            y,
        });
    }
}

export const DijkstraAlgorithm = (x, y, parentIndex, parentWeight) => {
    addVertex(x + 1, y - 2, parentIndex, parentWeight);
    addVertex(x + 2, y - 1, parentIndex, parentWeight);
    addVertex(x + 2, y + 1, parentIndex, parentWeight);
    addVertex(x + 1, y + 2, parentIndex, parentWeight);
    addVertex(x - 1, y + 2, parentIndex, parentWeight);
    addVertex(x - 2, y + 1, parentIndex, parentWeight);
    addVertex(x - 2, y - 1, parentIndex, parentWeight);
    addVertex(x - 1, y - 2, parentIndex, parentWeight);

    temporaryTags.sort((a, b) => b.weight - a.weight);

    while(temporaryTags.length > 0) {
        const lastElement = temporaryTags.pop(); // element with lowest weight
        const {x, y} = lastElement;
        const index = getIndex(x, y);

        if (constantTags.find((vertex) => vertex.vertexIndex === index) === undefined) {
            constantTags.push(lastElement);
            DijkstraAlgorithm(x, y, lastElement.vertexIndex, lastElement.weight);
            break;
        }
    }

    setIsCalculated(true);
}