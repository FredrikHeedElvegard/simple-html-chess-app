import { MakingBoard } from "./BoardMaker.js";
import { BoardView } from "./BoardView.js";


MakingBoard();

const view = new BoardView();

view.AddPiece(2, 3);
view.RemovePiece(2, 3);