// função para esconder e mostrar a senha

function myFunction() {
  var x = document.getElementById("myInput");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}

// faz aparecer as opções de funções

const select = document.querySelector(".select"),
  selectBtn = select.querySelector(".select-btn"),
  options = select.querySelector(".options");

let funcoes = ["Gestor(a)", "Professor(a)", "Secretario(a)"];

// faz aparecer a função selecionada

function addFuncao() {
  funcoes.forEach((funcao) => {
    let li = `<li onclick="updateName(this)">${funcao}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addFuncao();

// remove as funções dps de selecionada

function updateName(selectedLi) {
  select.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

selectBtn.addEventListener("click", () => {
  select.classList.toggle("active");
});

// menu curso

const optionMenu = document.querySelector(".select-menu"),
  selectButton = optionMenu.querySelector(".select-button"),
  optionsCurso = optionMenu.querySelectorAll(".option-curso"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

// optionsCurso.forEach((option) => {
//   option.addEventListener("click", () => {
//     let selectedOption = option.querySelector(".option-text").innerText;
//     sBtn_text.innerText = selectedOption;
//     console.log(selectedOption);
//   });
// });

optionsCurso.forEach((option) => {
  console.log(option);
});
