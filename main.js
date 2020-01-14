const container = document.querySelector('#container');
//const squareDiv = document.createElement('div');

//squareDiv.style.cssText = 'background: blue; border-style: solid; border-color: red; border-width: 3px';
//squareDiv.classList.add('squareDiv');
for (i=0; i < 16; i++) {
  const squareDiv = document.createElement('div');
  squareDiv.style.cssText = 'background: blue; border-style: solid; border-color: red; border-width: 3px';
squareDiv.classList.add('squareDiv');
  container.appendChild(squareDiv);
  squareDiv.textContent = `box ${i}`;
}
