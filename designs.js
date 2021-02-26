// Assign variables
// Select canvas
const pixelCanvas = document.getElementById('pixelCanvas');

// Select color input
const color = document.getElementById('colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()

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
