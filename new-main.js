const container = document.querySelector('#container');

let squaresPerSide = 16;
let gridArea = squaresPerSide * squaresPerSide;
container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;

for (let i=0; i < gridArea; i++) {
  const squareDiv = document.createElement('div');
  
  squareDiv.classList.add('squareDiv');
  container.appendChild(squareDiv);
  squareDiv.setAttribute('id',`cell${i}`);
}



container.addEventListener('mouseover', (event) => {  //works with horizontal and vertical movements, not always of page resized
  console.log(event.target.id);
  console.log(event.target.id);
  event.target.classList.add('coloredBox');
});



