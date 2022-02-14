document.addEventListener("DOMContentLoaded", function() {
    let addSquareButton = document.createElement("button");
    addSquareButton.textContent = "Add Square";



    let squareContainer = document.createElement("div");
    squareContainer.id = "square-container";
    // squareContainer.style.display = "flex";
    // squareContainer.style.flexWrap = "wrap";
    let squareCounter = 0;
    const potentialSquareColors = ["red", "green", "blue", "yellow", "magenta", "tomato", "cyan", "purple"];

    addSquareButton.addEventListener("click", function() {
        squareCounter++;
        let newSquare = document.createElement("div");
        newSquare.className = "square";
        newSquare.id = squareCounter;

        newSquare.addEventListener("mouseenter", function(e) {
            e.target.textContent = newSquare.id
            console.log(e.target)
        });

        newSquare.addEventListener("mouseleave", function(e) {
            e.target.textContent = "";
        });

        newSquare.addEventListener("click", function() {
            let randomNumber = Math.floor(Math.random() * potentialSquareColors.length);
            newSquare.style.backgroundColor = potentialSquareColors[randomNumber];
        });

        newSquare.addEventListener("dblclick", function() {
            if (newSquare.id % 2 == 0) {
                if (newSquare.nextSibling) {
                    newSquare.nextSibling.remove();
                } else {
                    alert("No square!");
                }
            } else {
                if (newSquare.previousSibling) {
                    newSquare.previousSibling.remove();
                } else {
                    alert("No square!");
                }
            }
        });


        squareContainer.appendChild(newSquare);
    });

    document.body.appendChild(addSquareButton);
    document.body.appendChild(squareContainer);

});