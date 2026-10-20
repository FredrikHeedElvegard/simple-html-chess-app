import { MakingBoard } from "./BoardMaker.js";
import { BoardView } from "./BoardView.js";
import { BoardModel } from "./BoardModel.js";

export class BoardController
{
    constructor()
    {
        this.view = new BoardView(this);
    }

    HandleClicking(row, column, square)
    {
        console.log("Clicked on " + this.view.GetIdString(row, column))
    }

    StartGame()
    {
        MakingBoard(this);
        
        const boardModel = new BoardModel();

        this.view.UpdateBoard(boardModel.board); 
    }       
}



