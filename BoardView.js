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
                
                square.childNodes[1].innerText = pieceText;
            }
        }
    }

    GetCoordinates(square)
    {
        const id= square.id;

        const row = +id[1] -1;        

        const charCode = id[0].charCodeAt(0);
        
        const column = charCode -64 -1;

        return {row, column}
    }

}