const input = document.querySelector("#input");
const add = document.querySelector("#add");
const list = document.querySelector("#list");

add.addEventListener("click", clickButton);
input.addEventListener("keyup", event => {
  if (event.keyCode === 13 ){
    clickButton();
    }
  }
);

let idx = 0;

function clickButton(){
  let temp = document.createElement('div');
  temp.setAttribute("class","alllist");
  temp.setAttribute("id","addlist"+idx);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button id='addbtn' onclick='remove("+idx+")'>X</button>";
  list.appendChild(temp);
  input.value = '';
  idx++
}

function remove(idx) {
  let temp = document.getElementById('addlist'+idx)
  list.removeChild(temp)
}