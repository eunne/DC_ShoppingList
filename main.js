const items = document.querySelector(".items")
const addBtn = document.querySelector(".footer__btn");
const input = document.querySelector(".footer__input");


function onAdd() {
  //사용자가 입력한 텍스트를 받아온다
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  // 리스트에 입력한 내용이 추가된다
  const item = createItem(text);
  items.appendChild(item);
  // input창이 리셋됨
  input.value = '';
  // 반복적으로 입력할 수 있도록 커서가 남아있음
  input.focus();
}


function createItem(text) {
  if (text != '') {

  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
    
  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const itemName = document.createElement("span");
  itemName.setAttribute("class", "item_name");
  itemName.innerHTML = text;
  
  const itemDelete = document.createElement("button");
  itemDelete.setAttribute("class","item__delete");
  itemDelete.innerHTML = `<i class="far fa-minus-square"></i>`;
  //delete 버튼을 누르면 삭제됨
  itemDelete.addEventListener("click", () => {
    items.removeChild(itemRow);
  })

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class","item__underline");

  item.appendChild(itemName);
  item.appendChild(itemDelete);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", event => {
  if (event.keyCode === 13) {
    onAdd();
  }
})