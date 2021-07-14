//불러올 때 .(class)을 찍어야함!
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const coordinator = document.querySelector(".coordinator");

//움직이도록 만들자
document.addEventListener("mousemove", mouseMove)

function mouseMove(event) {
  const x = event.clientX
  const y = event.clientY
  console.log(`${x}, ${y}`);

  //수평선에 연결, 수직으로 움직여야하니까 top, y좌표 연결
  // '좌표'에 연결해줘야하니까 그냥 y가 아니라 좌표로 입력해줄것!
  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;

  //이미지연결
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  //좌표연결
  coordinator.style.left = `${x}px`;
  coordinator.style.top = `${y}px`;

  //좌표표시
  coordinator.innerHTML = `${x}px, ${y}px`;
}

