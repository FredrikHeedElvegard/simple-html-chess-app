export class Knight
{
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

        if(rowDiff == 2 && columnDiff ==1)
            return true;
        if(rowDiff == 1 && columnDiff == 2)
            return true;

        return false;
    }

    GetBoardPiece2 = (board, coordinates) => board[coordinates.row][coordinates.column];
    GetBoardPiece = (board, row, column) => board[row][column];

}