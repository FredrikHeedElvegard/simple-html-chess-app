export class Queen{

      #color = "";
      get color() {return this.#color;}
    constructor(color)
    {
        this.#color = color;
    }

     CanMove(fromCoordinates, toCoordinates, board)
    {
        const pieceToMove = this.GetBoardPiece(fromCoordinates);

       return pieceToMove.CanMove(fromCoordinates, toCoordinates);
    }
}