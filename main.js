const container = document.querySelector('#container');

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
    squareDiv.classList.add('squareDiv');
    container.appendChild(squareDiv);
    squareDiv.setAttribute('id',`cell${i}`);
  }
}

function clearDrawingArea(){  
  container.innerHTML = '';
  container.style.backgroundColor = 'white';
  console.log(`clear drawing area ${squaresPerSide} squares, ${gridArea} area`);
}

makeDrawingArea(gridArea);

//let lightness = 100;
/*

let lightness = new Array(gridArea).fill(100);
*/

let lightnessCounter = new Array(gridArea).fill(100);

function draw(...lightnessCounter) {  //with lightness as arg,darkens on pass thru any div in container
  const allSquareDivs = document.querySelectorAll('.squareDiv');
  allSquareDivs.forEach((div) => {
    //lightness -=10; //after 1st event lightness =-2460
    div.addEventListener('mouseenter', (event) => {
      console.log("event.target.id " + event.target.id);  //div id, ex cell5
      console.log(event.target);
      let squareDivNumber = event.target.id.toString().match(/\d+/g);
      //console.log(lightness);
      //event.target.classList.add('coloredBox');
      event.target.style.cssText = `background-color: ${chooseRandomColor(squareDivNumber, ...lightnessCounter)}`;
      //event.target.style.cssText = `background-color:${chooseRandomColor(lightness)}`;
      lightnessCounter[squareDivNumber] -=10
      //lightness -=10;  //decrements with mouseover or mouseover anywhere in container
    });
  });
}
/*
function chooseRandomColor(lightness) {
  //lightness -=10;  //doesn't change lightness in draw()
  return `hsla(${(Math.random() * 360)}, 100%, ${lightness}%, 1)`;
}
*/

function chooseRandomColor(squareDivNumber,...lightnessCounter) {
  return `hsla(${(Math.random() * 360)}, 100%, ${lightnessCounter[squareDivNumber]}%, 1)`;
}

draw(...lightnessCounter);

/*  works after Start again button clicked
container.addEventListener('mouseover', (event) => {  //container EventListener colors individual boxes when starting inside container, otherwise colors whole container
  //squareDiv EventListener doesn't work and Start again button doesn't either
  console.log(event.target.id);
  console.log(event.target);
  event.target.classList.add('coloredBox');  
});
*/

let newSquares = document.querySelector("#newSquares");
newSquares.addEventListener('click', () => {
  squaresPerSide = prompt(`How many squares do you want on each side? \nCurrently set at ${squaresPerSide} on each side.  `);
  clearDrawingArea();
  defineDrawingArea(squaresPerSide);
  console.log(`Now ${squaresPerSide} squares`);  
  gridArea = squaresPerSide * squaresPerSide;
  console.log(`Now grid area is ${gridArea}`);
  makeDrawingArea(gridArea);
  draw();
});






