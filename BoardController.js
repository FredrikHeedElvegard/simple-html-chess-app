import { MakingBoard } from "./BoardMaker.js";
import { BoardView } from "./BoardView.js";
import { BoardModel } from "./BoardModel.js";

export class BoardController
{
    constructor()
    {
        this.view = new BoardView(this);
        this.boardModel = new BoardModel();
    }

    HandleClicking(row, column, square)
    {        
        if (square.childNodes[1].innerText[0] === "w")
            console.log("WHITE");
        console.log("We are clicking " + this.view.GetIdString(row, column));
    }

    StartGame()
    {
        MakingBoard(this);                

        this.view.UpdateBoard(this.boardModel.board); 
    }       
}



