const container = document.querySelector('#container');
/*
let rows = 16;
let columns = 16;
let gridArea = rows * columns;

container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
*/

let squaresPerSide = 16;
let gridArea = squaresPerSide * squaresPerSide;

function defineDrawingArea(squaresPerSide){
  // gridArea = squaresPerSide * squaresPerSide;
  container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
}

defineDrawingArea(squaresPerSide);

function makeDrawingArea(gridArea)  {
  for (let i=0; i < gridArea; i++) {
    const squareDiv = document.createElement('div');
  //squareDiv.style.cssText = `background: blue; border-style: solid; border-color: red; border-width: 3px`;
    squareDiv.classList.add('squareDiv');
    container.appendChild(squareDiv);
    squareDiv.setAttribute('id',`cell${i}`);
  }
}

makeDrawingArea(gridArea);

container.addEventListener('mouseover', (event) => {  //works with horizontal and vertical movements, not always of page resized
  console.log(event.target.id);
  console.log(event.target);
  event.target.classList.add('coloredBox');
});

let newSquares = document.querySelector("#newSquares");
newSquares.addEventListener('click', () => {
  prompt(`How many squares do you want on each side? \nCurrently set at ${squaresPerSide} on each side.  `, squaresPerSide);
  defineDrawingArea(squaresPerSide);
  console.log(`Now ${squaresPerSide} squares`);  //still initial value
  gridArea = squaresPerSide * squaresPerSide;
  console.log(`Now grid area is ${gridArea}`);
  makeDrawingArea(gridArea);
});

/* container.style.gridTemplateRows = repeat(${rows}, 1fr);  
 container.style.gridTemplateColumns = repeat(${columns}, 1fr);  */


 /*
for (let i=0; i < gridArea; i++) {
  const squareDiv = document.createElement('div');
  //squareDiv.style.cssText = `background: blue; border-style: solid; border-color: red; border-width: 3px`;
  squareDiv.classList.add('squareDiv');
  container.appendChild(squareDiv);
  squareDiv.setAttribute('id',`cell${i}`);
 // squareDiv.textContent = `box ${i}`;
}
*/

/*
document.getElementById('container').addEventListener('mouseover', (event) => {
  //let coloredBox = event.target.id;
  console.log(event.target.id);
  event.target.id.backgroundColor = 'red';  //no color change
  //event.target.id.classList.add('coloredBox');
}) ;
*/




/*
let draw = document.querySelectorAll('.squareDiv'); //querySelectorAll TypeError: draw.addEventListener is not a function
container.addEventListener('mouseover', e => {  //mouseover and mouseenter trigger event only once with draw, with container draw.style is undefined
  //works only on squareDiv 0
  console.log("Hovered");  //displays message only once with event listener on draw, each time on container
  draw.forEach(function(e) {
    draw.style.backgroundColor = 'purple';
  });
  //draw.style.backgroundColor = 'purple'; //adds only once
  //document.getElementsByClassName('squareDiv').style.backgroundColor = 'purple';  //squareDiv not defined
  //TypeError: document.getElementsByClassName(...).style is undefined
});

*/
