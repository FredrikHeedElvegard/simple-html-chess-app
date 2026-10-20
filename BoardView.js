export class BoardView
{    

    AddPiece(row, column)
    {
        const letter = String.fromCharCode(65 + column);
        const idString = `${letter}${row + 1}`;
        const square = document.querySelector(`#${idString}`);
        
        square.childNodes[1].innerText = `Testing ${idString}`;

    }

    RemovePiece(row, column)
    {
        const letter = String.fromCharCode(65 + column);
        const idString = `${letter}${row + 1}`;
        const square = document.querySelector(`#${idString}`);

        square.childNodes[1].innerText = "";
    }

}