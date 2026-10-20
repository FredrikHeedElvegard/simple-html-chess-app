export const MakingBoard = ()=>
    {
        const body = document.querySelector("body");

        for (let i = 7; i >= 0; i--) {

            const rowDiv = document.createElement("div");
            rowDiv.classList.add("Row");

            for (let j = 0; j < 8; j++) {
                const square = document.createElement("div");

                const pieceLabel = document.createElement("span");           
                const idLabel = document.createElement("span");   
                pieceLabel.classList.add("PieceLabel");
                idLabel.classList.add("IdLabel");
                const letter = String.fromCharCode(65 + j);                
                const idString = `${letter}${i + 1}`;
                square.id = idString;
                idLabel.innerText = idString;
                pieceLabel.innerText = "Testing";
                
                square.classList.add("Square");
                
                square.appendChild(idLabel);
                square.appendChild(pieceLabel);

                if ((i % 2 !== 0 && j % 2 === 0) || (i%2 === 0 && j %2 !==0))
                    square.classList.add("WhiteSquare");
                else
                    square.classList.add("BlackSquare");

                rowDiv.appendChild(square);
            }

            body.appendChild(rowDiv);
            
        }        
        
    };
    