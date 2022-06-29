"use strict";

const drawingBox = document.querySelector('#drawing-box');

function setSize() {
  let squaresPerSide = 16;
  return squaresPerSide ** 2;
}

function drawFirst() {
  let squaresPerSide = 16;
  let gridArea = squaresPerSide**2;
  defineDrawingArea(squaresPerSide);
  makeDrawingArea(gridArea);
  draw(gridArea);

}

function defineDrawingArea(squaresPerSide){
  
  drawingBox.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
  drawingBox.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
}

//defineDrawingArea();

function makeDrawingArea(gridArea)  {
  for (let i=0; i < gridArea; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('squareDiv');
    drawingBox.appendChild(squareDiv);
    squareDiv.setAttribute('id',`cell${i}`);
  }
}

function clearDrawingArea(){  
  drawingBox.textContent = '';
  drawingBox.style.backgroundColor = '#ebfeff';
}

//makeDrawingArea(gridArea=256);

//let lightnessCounter = new Array(gridArea).fill(90);

function makeLightnessCounter(gridArea) {
   return new Array(gridArea).fill(90);
}

function draw(gridArea) {  
  const allSquareDivs = document.querySelectorAll('.squareDiv');
  let lightnessCounter = makeLightnessCounter(gridArea);
  allSquareDivs.forEach((div) => {
    div.addEventListener('mouseover', (event) => {
      let squareDivNumber = event.target.id.toString().match(/\d+/g);
      event.target.style = `background-color: ${chooseRandomColor(squareDivNumber, lightnessCounter)}`;
      lightnessCounter[squareDivNumber] -=10
    });
  });

  const newSquares = document.querySelector("#newSquares");
  newSquares.addEventListener('click', newDraw); //newDraw called without params
}


function chooseRandomColor(squareDivNumber, lightnessCounter) {
  return `hsla(${(Math.random() * 360)}, 100%, ${lightnessCounter[squareDivNumber]}%, 1)`;
}

drawFirst();

function newDraw(){

    /*let prevSquaresPerSide = squaresPerSide;
    console.log(prevSquaresPerSide); /* click { target: button#newSquares, 
    buttons: 0, clientX: 671, clientY: 89, layerX: 671, layerY: 105 } */
    /*squaresPerSide = prompt(`How many squares do you want on each side? \n
    Currently set at ${prevSquaresPerSide} on each side.  `);*/
    // in prompt "Currently set at [object MouseEvent] on each side."

    let squaresPerSide = prompt(`How many squares do you want on each side? 
  Please enter an integer between 2 and 100.`);

    while (Number.isNaN(Number(squaresPerSide))) {
      squaresPerSide = prompt(`Please enter a number.  \nHow many squares do you want on each side? `);
    } 

    squaresPerSide = Math.abs(Math.round(squaresPerSide));
    squaresPerSide = getNewSquares(squaresPerSide);
    clearDrawingArea();
    
    defineDrawingArea(squaresPerSide);
    let gridArea = squaresPerSide ** 2;
    let lightnessCounter = new Array(gridArea).fill(90);
    makeDrawingArea(gridArea);
    draw(gridArea);
}


function getNewSquares(squaresPerSide) {
  /*const newSquares = document.querySelector("#newSquares");
  newSquares.addEventListener('click', () => {
    squaresPerSide = prompt(`How many squares do you want on each side? \nCurrently set at ${squaresPerSide} on each side.  `);
    while (Number.isNaN(Number(squaresPerSide))) {
      squaresPerSide = prompt(`Please enter a number. \nHow many squares do you want on each side? `);
    }
    clearDrawingArea();
  }); */
     
    squaresPerSide = Math.abs(Math.round(squaresPerSide)); 
    //clearDrawingArea();
    return squaresPerSide;
}

