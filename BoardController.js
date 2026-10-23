import { MakingBoard } from "./BoardMaker.js";
import { BoardView } from "./BoardView.js";
import { BoardModel } from "./BoardModel.js";

export class BoardController
{
    #selectedSquare = null;

    constructor()
    {
        this.view = new BoardView(this);
        this.boardModel = new BoardModel();
    }

    HandleClicking(clickedSquare)
    {    
        const coordinatesClicked = this.view.GetCoordinates(clickedSquare);
        const clickedPiece = this.boardModel.board[coordinatesClicked.row][coordinatesClicked.column];      

        if(this.#selectedSquare !== null)
        {
            const fromCoordinates = this.view.GetCoordinates(this.#selectedSquare);
            this.#selectedSquare.classList.remove("Selected");
            this.#selectedSquare = null; 
  
                if(this.boardModel.CanMove(fromCoordinates, coordinatesClicked))
                {
                    this.boardModel.MoveSquare(fromCoordinates, coordinatesClicked);
                    this.view.UpdateBoard(this.boardModel.board);
                    return;
                }                  
                   
        } 
      
        if(clickedPiece !== null)
        {
            if(clickedPiece.color === this.boardModel.currentTurn)
            {
                 this.#selectedSquare = clickedSquare;
                clickedSquare.classList.add("Selected");
            }
        }
    }

    StartGame()
    {
        MakingBoard(this);                

        this.view.UpdateBoard(this.boardModel.board); 
    }       
}



