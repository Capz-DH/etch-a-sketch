const container = document.getElementById("container");


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";

  };
  
};
makeRows(16, 16);

function clearRows() {

    container.innerHTML = "";
};

function refreshRows(){
    clearRows();
    makeRows(16, 16);
    document.querySelectorAll('.grid-item').forEach(item => {
      item.addEventListener('mouseover', event => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        if (document.getElementById('black').checked) {
          item.classList.add('filled');
        } else if (document.getElementById('red').checked) {
          item.style.backgroundColor = 'red';
        } else if (document.getElementById('green').checked) {
          item.style.backgroundColor = 'green';
        } else if (document.getElementById('blue').checked) {
          item.style.backgroundColor = 'blue';
        } else if (document.getElementById('rainbow').checked) {
          item.style.backgroundColor = '#' + randomColor;
      }})
    })
};

document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('mouseover', event => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (document.getElementById('black').checked) {
      item.classList.add('filled');
    } else if (document.getElementById('red').checked) {
      item.style.backgroundColor = 'red';
    } else if (document.getElementById('green').checked) {
      item.style.backgroundColor = 'green';
    } else if (document.getElementById('blue').checked) {
      item.style.backgroundColor = 'blue';
    } else if (document.getElementById('rainbow').checked) {
      item.style.backgroundColor = '#' + randomColor;
    } else if (document.getElementById('eraser').checked) {
      item.style.backgroundColor = '';
    
  }})
})




