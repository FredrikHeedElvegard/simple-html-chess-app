export const MakingBoard = ()=>
    {
        const body = document.querySelector("body");

        for (let i = 7; i >= 0; i--) {

            const rowDiv = document.createElement("div");
            rowDiv.classList.add("Row");

            for (let j = 0; j < 8; j++) {
                const square = document.createElement("div");

                const letter = String.fromCharCode(65 +j);
                square.innerText = `${letter}${i+1}`;
                square.classList.add("Square");
                rowDiv.appendChild(square);
            }

            body.appendChild(rowDiv);
            
        }        
        
    };
    