const h2 = document.getElementById("numero");
const btnAdicionar = document.getElementById("adicionar");
const btnZerar = document.getElementById("zerar");
const btnSubtrair = document.getElementById("subtrair");
let number = 0;

h2.innerHTML = number;

btnAdicionar.addEventListener("click", function () {
  number++;
  h2.innerHTML = number;
});
btnSubtrair.addEventListener("click", () => {
  if (number > 0) {
    number--;
    h2.innerHTML = number;
  } else {
    number = 0;
    h2.innerHTML = number;
  }
});
btnZerar.addEventListener("click", () => {
  number = 0;
  h2.innerHTML = number;
});
