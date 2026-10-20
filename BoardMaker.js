export const MakingBoard = (controller)=>
    {
        const body = document.querySelector("body");

        for (let row = 7; row >= 0; row--) {

            const rowDiv = document.createElement("div");
            rowDiv.classList.add("Row");

            for (let column = 0; column < 8; column++) {
                const square = document.createElement("div");

                const pieceLabel = document.createElement("span");           
                const idLabel = document.createElement("span");   
                pieceLabel.classList.add("PieceLabel");
                idLabel.classList.add("IdLabel");
                const letter = String.fromCharCode(65 + column);                
                const idString = `${letter}${row + 1}`;
                square.id = idString;
                idLabel.innerText = idString;
                // pieceLabel.innerText = "Testing";
                
                square.classList.add("Square");

                square.addEventListener("click", ()=>controller.HandleClicking(row, column, square));
                
                square.appendChild(idLabel);
                square.appendChild(pieceLabel);

                if ((row % 2 !== 0 && column % 2 === 0) || (row%2 === 0 && column %2 !==0))
                    square.classList.add("WhiteSquare");
                else
                    square.classList.add("BlackSquare");

                rowDiv.appendChild(square);
            }

            body.appendChild(rowDiv);
            
        }        
        
    };
    