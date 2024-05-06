const btnDiv = document.querySelector(".btn")
const container = document.querySelector(".container")
let gridSize = 16;

const button = document.createElement("button");
button.classList.add("numSqrs")
button.textContent = "New Grid"

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

function newGrid(){
    const addNewGrid = Number(prompt("Create new box grid. Enter your choice for grid size. (Eg. entering 10 will create a grid of 10*10): "));
    console.log("Grid Size selected:",addNewGrid)
    if(isNaN(addNewGrid)){
        alert('Please enter a number');
    } else if(addNewGrid <= 0 || addNewGrid > 100){
        alert('Number must be between 1 and 100')
    }else{
        gridSize = addNewGrid
        const totalPixels = container.offsetWidth;
        const squareSize = totalPixels / gridSize;
        for(let i=0; i< gridSize * gridSize; i++){
            const containerItem = document.createElement("div");
            containerItem.classList.add("containerItem");
            containerItem.style.width = `${squareSize}px`;
            containerItem.style.height = `${squareSize}px`
            container.appendChild(containerItem)
        }
    }
}

button.addEventListener("click", () => {
        removeGrid();
        newGrid();
})

btnDiv.appendChild(button)

const totalPixels = container.offsetWidth;
const squareSize = totalPixels / gridSize;

for(let i=0; i< gridSize * gridSize; i++){
    const containerItem = document.createElement("div");
    containerItem.classList.add("containerItem");
    containerItem.style.width = `${squareSize}px`;
    containerItem.style.height = `${squareSize}px`
    container.appendChild(containerItem)
}