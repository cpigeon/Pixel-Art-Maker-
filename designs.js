// Assign variables
// Select canvas
const pixelCanvas = document.getElementById('pixelCanvas');

// Select color input
const color = document.getElementById('colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
  // Prevents the form from re-submitting
  event.preventDefault();
  // Check if the canvas is already populated with a grid
  const canvasRows = pixelCanvas.childNodes.length;
  // If the canvas is already populated with a grid, remove the previous grid
  if (canvasRows !== 0) {
    for (i = canvasRows-1; i >= 0; i--) {
      pixelCanvas.childNodes[i].remove();
    }
  }
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
})

function makeGrid(height, width) {
// Your code goes here!
  for (n = 0; n < height; n++) {
    const newRow = document.createElement('tr');
    pixelCanvas.appendChild(newRow);
    for (m = 0; m < width; m++) {
      const newCell = document.createElement('td');
      newRow.appendChild(newCell);
    }
  }
}
