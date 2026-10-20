export class BoardView
{  
    
    constructor(BoardController)
    {
        this.controller = BoardController;
    }



    GetIdString(row, column)
    {
        const letter = String.fromCharCode(65 + column);
        return `${letter}${row + 1}`;
    }

    UpdateBoard(modelBoard)
    {
        for (let row = 0; row < 8; row++) {

            for (let column = 0; column < 8; column++) {
                                               
                const square = document.querySelector(`#${this.GetIdString(row, column)}`);

                const pieceText = modelBoard[row][column];

                square.removeEventListener("click", square.myClickingReference)

                square.myClickingReference = () => { this.controller.HandleClicking(row, column) }
                
                if (pieceText !== "")
                    square.addEventListener("click", square.myClickingReference);            
                square.childNodes[1].innerText = pieceText;
            }
        }
    }

}