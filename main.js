const container = document.querySelector('#container');
let rows = 16;
let columns = 16;
let gridArea = rows * columns;
container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;  //works
container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; //works

for (let i=0; i < gridArea; i++) {
  const squareDiv = document.createElement('div');
  squareDiv.style.cssText = `background: blue; border-style: solid; border-color: red; border-width: 3px`;
  squareDiv.classList.add('squareDiv');
  container.appendChild(squareDiv);
  squareDiv.textContent = `box ${i}`;
}
