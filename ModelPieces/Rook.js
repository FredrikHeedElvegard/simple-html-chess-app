export class Rook{

      #color = "";
      get color() {return this.#color;}
    constructor(color)
    {
        this.#color = color;
    }
    
     CanMove(fromCoordinates, toCoordinates, board)
    {
         const rowDiff = Math.abs(fromCoordinates.row-toCoordinates.row);
        const columnDiff = Math.abs(fromCoordinates.column -toCoordinates.column);
        const columnSign = Math.sign(toCoordinates.column-fromCoordinates.column);
        const rowSign = Math.sign(toCoordinates.row - fromCoordinates.row);

        if(rowDiff ==0)
            if(!this.HasPieceInTheWay(board, fromCoordinates.column,
                toCoordinates.column, columnSign, false, fromCoordinates.row))
                return true;
        if(columnDiff == 0)
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