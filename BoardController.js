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
        const clickedSquarePiece = clickedSquare.childNodes[1].innerText;          

        if(this.#selectedSquare !== null)
        {
            const fromCoordinates = this.view.GetCoordinates(this.#selectedSquare);
            const toCoordinates = this.view.GetCoordinates(clickedSquare); 
            this.#selectedSquare.classList.remove("Selected");
            this.#selectedSquare = null; 
  
                if(this.boardModel.CanMove(fromCoordinates, toCoordinates))
                {
                    this.boardModel.MoveSquare(fromCoordinates, toCoordinates);
                    this.view.UpdateBoard(this.boardModel.board);
                    return;
                }                  
                   
        } 
        if(clickedSquarePiece[0] !== this.boardModel.currentTurn[0])
            return;           
        
        this.#selectedSquare = clickedSquare;
        clickedSquare.classList.add("Selected")
    }

    StartGame()
    {
        MakingBoard(this);                

        this.view.UpdateBoard(this.boardModel.board); 
    }       
}



