const black = "black "
const white = "white "
import {Bishop } from "./ModelPieces/Bishop.js"
import {Pawn} from "./ModelPieces/Pawn.js"
import {King } from "./ModelPieces/King.js"
import {Queen } from "./ModelPieces/Queen.js"
import {Knight } from "./ModelPieces/Knight.js"
import {Rook} from "./ModelPieces/Rook.js"

export class BoardModel
{    

    #currentTurn = "white";

    get currentTurn(){ return this.#currentTurn; } 

    selectedSquare = null;

    MoveSquare(fromCoordinates, toCoordinates)
    {
        const pieceToMove = this.board[fromCoordinates.row][fromCoordinates.column];
        this.board[fromCoordinates.row][fromCoordinates.column]= null;
        this.board[toCoordinates.row][toCoordinates.column] =pieceToMove;
        this.#currentTurn= (this.#currentTurn == "white")? "black": "white";
    }

    CanMove(fromCoordinates, toCoordinates)
    {
        const pieceToMove = this.GetBoardPiece(fromCoordinates);

          const pieceAtTarget = this.GetBoardPiece(toCoordinates);
        if(pieceAtTarget!= null)
            if(pieceAtTarget.color == pieceToMove.color)
                return false;

       return pieceToMove.CanMove(fromCoordinates, toCoordinates, this.board);
    }

 
    GetBoardPiece = (coordinates) => this.board[coordinates.row][coordinates.column];
   

board = [
    // White Pieces (Row 0)
    [
        new Rook("white",), new Knight("white"), new Bishop("white"), new Queen("white"), 
        new King("white"), new Bishop("white"), new Knight("white"), new Rook("white")
    ],
    // White Pawns (Row 1)
    [
        new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white"), 
        new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white")
    ],
    // Empty Squares (Rows 2 to 5 using null)
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    // Black Pawns (Row 6)
    [
        new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black"), 
        new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black")
    ],
    // Black Pieces (Row 7)
    [
        new Rook("black"), new Knight("black"), new Bishop("black"), new Queen("black"), 
        new King("black"), new Bishop("black"), new Knight("black"), new Rook("black")
    ]
];
}