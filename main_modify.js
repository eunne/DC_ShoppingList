//불러올 때 .(class)을 찍어야함!
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const coordinator = document.querySelector(".coordinator");

addEventListener('load', () => {
  
  const targetRect = target.getBoundingClientRect();
  console.log(targetRect)
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;


  //움직이도록 만들자
  document.addEventListener("mousemove", mouseMove)

  function mouseMove(event) {
    const x = event.clientX
    const y = event.clientY

    //기존 top과 left에 연결되어 있었기 때문에 삭제해줘야함.
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    // vertical.style.transform = `translateX(${x}px)`;
    // horizontal.style.transform = `translateY(${y}px)`;

    //이미지연결
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;

    // //좌표연결
    // coordinator.style.left = `${x}px`;
    // coordinator.style.top = `${y}px`;
    coordinator.style.transform = `translate(${x}px, ${y}px)`;

    //좌표표시
    coordinator.innerHTML = `${x}px, ${y}px`;
  }
});
