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

    MoveSquare(fromCoordinates, toCoordinates)
    {
        const pieceToMove = this.board[fromCoordinates.row][fromCoordinates.column];
        this.board[fromCoordinates.row][fromCoordinates.column]= "";
        this.board[toCoordinates.row][toCoordinates.column] =pieceToMove;
        this.#currentTurn= (this.#currentTurn == "white")? "black": "white";
    }

    CanMove(fromCoordinates, toCoordinates)
    {
        const pieceToMove = this.GetBoardPiece(fromCoordinates);
        const splitWord = this.GetWordSplit(pieceToMove);
        const pieveToMoveColorLess = splitWord[1];
        const color = splitWord[0];

        switch (pieveToMoveColorLess) {
            case "pawn":
               return this.CanPawnMove(color, fromCoordinates, toCoordinates);        
            default:
                return false;
        }
    }

    GetBoardPiece = (coordinates) => this.board[coordinates.row][coordinates.column];

    GetWordSplit = (piece) => piece.trim().split(/\s+/);ç
 

    CanPawnMove(color, fromCoordinates, toCoordinates)
    {
        const pieceAtTarget = this.GetBoardPiece(toCoordinates);
        const sign = (color === "white")? 1: -1;
        const startRow = (color === "white")? 1:6;

        if(pieceAtTarget !== "")
        {
            const splitTargetPiece = this.GetWordSplit(pieceAtTarget);
                
            if(splitTargetPiece[0] != color && 
                Math.abs(fromCoordinates.column - toCoordinates.column) === 1 &&
                toCoordinates.row === fromCoordinates.row +sign
                )                
                return true;

                return false;
        }                        
    
        if(fromCoordinates.column === toCoordinates.column)
        {
            if(toCoordinates.row === fromCoordinates.row + sign)
                return true;

            const pieceInFront = this.GetBoardPiece({row: fromCoordinates.row+sign, column: fromCoordinates.column});
            console.log("In front: " + pieceInFront);
            if(fromCoordinates.row === startRow && 
                toCoordinates.row === fromCoordinates.row + 2*sign &&
            pieceInFront === "")
                return true
        }
        return false;
    }

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