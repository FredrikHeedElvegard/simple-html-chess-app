export class Queen{

      #color = "";
      get color() {return this.#color;}
    constructor(color)
    {
        this.#color = color;
    }

     CanMove(fromCoordinates, toCoordinates, board)
    {
          const diffRow = toCoordinates.row - fromCoordinates.row;
        const diffColumn = toCoordinates.column - fromCoordinates.column;
        const rowSign = Math.sign(diffRow);
        const columnSign = Math.sign(diffColumn);

            if(Math.abs(diffColumn) === Math.abs(diffRow))            
            {
                let row = fromCoordinates.row + rowSign;
      
                for (let column = fromCoordinates.column + columnSign; 
                    column*columnSign < toCoordinates.column*columnSign; 
                    column +=columnSign) {
          
                        if(this.GetBoardPiece(board, row, column) !== null)
                            return false

                        row += rowSign;
                    }
                
                return true;
            }

            if(Math.abs(diffRow)==0)
                if(!this.HasPieceInTheWay(board, fromCoordinates.column,
                toCoordinates.column, columnSign, false, fromCoordinates.row))
                return true;
            
            if(Math.abs(diffColumn) == 0)
               if(!this.HasPieceInTheWay(board, fromCoordinates.row,
                toCoordinates.row, rowSign, true, fromCoordinates.column))
                return true;

        return false;



    }

      HasPieceInTheWay = (board, startPos, endPos, sign, isTravelingRows, otherDimPos) =>
    {
        for (let i = startPos + sign; i*sign < endPos*sign; i+= sign) {
            
            let PieceInTheWay = null;
            if(isTravelingRows)
                PieceInTheWay = this.GetBoardPiece(board, i, otherDimPos);
            else
                PieceInTheWay = this.GetBoardPiece(board, otherDimPos, i);
            
            if(PieceInTheWay != null)
                return true;
        }
        return false;
    }

    GetBoardPiece2 = (board, coordinates) => board[coordinates.row][coordinates.column];
    GetBoardPiece = (board, row, column) => board[row][column];
}