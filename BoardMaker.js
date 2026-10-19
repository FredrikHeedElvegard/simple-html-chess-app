export const MakingBoard = ()=>
    {
        const body = document.querySelector("body");

        for (let i = 0; i < 8; i++) {

            const rowDiv = document.createElement("div");
            rowDiv.classList.add("Row");

            for (let j = 0; j < 8; j++) {
                const square = document.createElement("div");
                square.classList.add("Square");
                rowDiv.appendChild(square);
            }

            body.appendChild(rowDiv);
            
        }        
        
    };
    