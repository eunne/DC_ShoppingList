const button = document.querySelector("button");
const rabbit = document.querySelector(".rabbit");
const reset = document.querySelector(".reset");

button.addEventListener('click', (event) => {
  rabbit.scrollIntoView({block: "end", behavior: "smooth"});
});

reset.onclick = () => {
  window.scrollTo({top:0, behavior:"smooth", inline:"end"});
};
