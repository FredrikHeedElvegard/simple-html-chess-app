const knight = "knight";
const bishop = "bishop";
const queen = "queen";
const king = "king";
const rook = "rook";
const pawn = "pawn";  
const black = "black "
const white = "white "

export class BoardModel
{    

    #currentTurn = "white";

    get currentTurn(){ return this.#currentTurn; } 

    selectedSquare = null;

    board =
        [
            [white+rook, white+knight, white+bishop, white+queen, white+king, white+bishop, white+knight, white+rook],
            [white + pawn, white + pawn, white + pawn, white + pawn, white + pawn, white + pawn, white + pawn, white + pawn],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            [black + pawn, black + pawn, black + pawn, black + pawn, black + pawn, black + pawn, black + pawn, black + pawn],
            [black+rook, black+knight, black+bishop, black+queen, black+king, black+bishop, black+knight, black+rook]
        ];
}