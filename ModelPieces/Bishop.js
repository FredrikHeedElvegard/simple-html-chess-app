
export class Bishop{
    
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

        if(Math.abs(diffColumn) !== Math.abs(diffRow))
            return false;

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

    GetBoardPiece2 = (board, coordinates) => board[coordinates.row][coordinates.column];
    GetBoardPiece = (board, row, column) => board[row][column];

}