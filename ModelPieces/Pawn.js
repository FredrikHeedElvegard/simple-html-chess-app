export class Pawn{

      #color = "";
      get color() {return this.#color;}
    constructor(color)
    {
        this.#color = color;
    }

    CanMove(fromCoordinates, toCoordinates, board)
    {
        const pieceAtTarget = this.GetBoardPiece2(board, toCoordinates);
        const sign = (this.#color === "white")? 1: -1;
        const startRow = (this.#color === "white")? 1:6;

        if(pieceAtTarget !== null)
        {                
            if(pieceAtTarget.color != this.#color && 
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

            const pieceInFront = this.GetBoardPiece(board, fromCoordinates.row+sign, fromCoordinates.column);

            if(fromCoordinates.row === startRow && 
                toCoordinates.row === fromCoordinates.row + 2*sign &&
            pieceInFront === null)
                return true
        }

        

        return false;
    }
    
    GetBoardPiece2 = (board, coordinates) => board[coordinates.row][coordinates.column];
    GetBoardPiece= (board, row, column) => board[row][column];
}