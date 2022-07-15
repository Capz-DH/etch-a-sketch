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
      item.addEventListener('click', event => {
        item.classList.add('filled');
      })
    })
};

document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.add('filled');
  })
})




