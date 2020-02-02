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

let lightness = 100;

function draw() {  //with lightness as arg, first undefined, then NaN
  const allSquareDivs = document.querySelectorAll('.squareDiv');
  allSquareDivs.forEach((div) => {
    div.addEventListener('mouseenter', (event) => {
      console.log(event.target.id);
      console.log(event.target);
      console.log(lightness);
      //event.target.classList.add('coloredBox');
      event.target.style.cssText = `background-color:${chooseRandomColor(lightness)}`;
      lightness -=10;  //decrements with mouseover or mouseover anywhere in container
    });
  });
}

function chooseRandomColor(lightness) {
  //lightness -=10;  //doesn't change lightness in draw()
  return `hsla(${(Math.random() * 360)}, 100%, ${lightness}%, 1)`;
}

draw();

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






