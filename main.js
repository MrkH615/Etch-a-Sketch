const container = document.querySelector('#container');

let squaresPerSide = 16;
let gridArea = squaresPerSide * squaresPerSide;

function defineDrawingArea(squaresPerSide){
  
  container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
}

defineDrawingArea(squaresPerSide);

function makeDrawingArea(gridArea)  {
  for (let i=0; i < gridArea; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('squareDiv');
    container.appendChild(squareDiv);
    squareDiv.setAttribute('id',`cell${i}`);
  }
}

function clearDrawingArea(){  
  container.innerHTML = '';
  container.style.backgroundColor = 'white';
}

makeDrawingArea(gridArea);

let lightnessCounter = new Array(gridArea).fill(90);

function draw(...lightnessCounter) {  
  const allSquareDivs = document.querySelectorAll('.squareDiv');
  allSquareDivs.forEach((div) => {
    div.addEventListener('mouseover', (event) => {
      let squareDivNumber = event.target.id.toString().match(/\d+/g);
      event.target.style.cssText = `background-color: ${chooseRandomColor(squareDivNumber, ...lightnessCounter)}`;
      lightnessCounter[squareDivNumber] -=10
    });
  });
}


function chooseRandomColor(squareDivNumber,...lightnessCounter) {
  return `hsla(${(Math.random() * 360)}, 100%, ${lightnessCounter[squareDivNumber]}%, 1)`;
}

draw(...lightnessCounter);

let newSquares = document.querySelector("#newSquares");
newSquares.addEventListener('click', () => {
  squaresPerSide = prompt(`How many squares do you want on each side? \nCurrently set at ${squaresPerSide} on each side.  `);
  while (Number.isNaN(Number(squaresPerSide))) {
    squaresPerSide = prompt(`Please enter a number.  \nHow many squares do you want on each side? `);
  }
  squaresPerSide = Math.abs(Math.round(squaresPerSide));
  clearDrawingArea();
  defineDrawingArea(squaresPerSide);  
  gridArea = squaresPerSide * squaresPerSide;
  lightnessCounter = new Array(gridArea).fill(90);
  makeDrawingArea(gridArea);
  draw(...lightnessCounter);
});






