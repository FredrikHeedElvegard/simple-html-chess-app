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

    HandleClicking(row, column, square)
    {    
        const piece = square.childNodes[1].innerText;  
        if(this.#selectedSquare !== null)
        {
            this.#selectedSquare.classList.remove("Selected");
            this.#selectedSquare = null; 
        } 
        if(piece === "" || piece[0] !== this.boardModel.currentTurn[0])
            return;           
        
        console.log("Selected " + piece)
        this.#selectedSquare = square;
        square.classList.add("Selected")
    }

    StartGame()
    {
        MakingBoard(this);                

        this.view.UpdateBoard(this.boardModel.board); 
    }       
}



