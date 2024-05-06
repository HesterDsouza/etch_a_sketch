const btnDiv = document.querySelector(".btn")
const container = document.querySelector(".container")
let gridSize = 16;

const newGridBtn = document.createElement("button");
newGridBtn.classList.add("newGrid");
newGridBtn.textContent = "New Grid";

const removeGridBtn = document.createElement("button");
removeGridBtn.classList.add("removeGrid");
removeGridBtn.textContent = "Remove Grid";

const eraseBtn = document.createElement("button");
eraseBtn.classList.add("clearGrid");
eraseBtn.textContent = "Clear Grid";

function colorGrid(){
    container.addEventListener("mouseover", function(event){
        if(event.target.classList.contains("containerItem")){
            event.target.classList.add("bgColor")
        }
    })
}

function eraseGrid() {
    container.querySelectorAll(".containerItem.bgColor").forEach(item => {
        item.classList.remove("bgColor");
    });
}

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

function newGrid(){
    const addNewGrid = Number(prompt("Enter your choice for grid size. (Eg. entering 10 will create a grid of 10*10): "));
    console.log("Grid Size selected:",addNewGrid)
    if(isNaN(addNewGrid)){
        alert('Please enter a number');
    } else if(addNewGrid <= 0 || addNewGrid > 100){
        alert('Number must be between 1 and 100')
    }else{
        gridSize = addNewGrid;
        container.style.setProperty('--grid-size', gridSize);
        removeGrid();
        for(let i=0; i< gridSize * gridSize; i++){
            const containerItem = document.createElement("div");
            containerItem.classList.add("containerItem");
            container.appendChild(containerItem)
        }
    }
}

colorGrid()

newGridBtn.addEventListener("click", newGrid);

removeGridBtn.addEventListener("click", removeGrid);

eraseBtn.addEventListener("click", eraseGrid);

btnDiv.appendChild(newGridBtn);
btnDiv.appendChild(removeGridBtn);
btnDiv.appendChild(eraseBtn);