// curso select menu

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

// turma select menu

const optionMenuTurma = document.querySelector(".select-menu-turma"),
  selectBtnTurma = optionMenuTurma.querySelector(".select-btn-turma"),
  optionsTurma = optionMenuTurma.querySelectorAll(".option-turma"),
  sBtn_textTurma = optionMenuTurma.querySelector(".sBtn-text-turma");

selectBtnTurma.addEventListener("click", () =>
  optionMenuTurma.classList.toggle("active")
);

optionsTurma.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text-turma").innerText;
    sBtn_textTurma.innerText = selectedOption;

    optionMenuTurma.classList.remove("active");
  });
});

// local select menu

const optionMenuLocal = document.querySelector(".select-menu-local"),
  selectBtnLocal = optionMenuLocal.querySelector(".select-btn-local"),
  optionsLocal = optionMenuLocal.querySelectorAll(".option-local"),
  sBtn_textLocal = optionMenuLocal.querySelector(".sBtn-text-local");

selectBtnLocal.addEventListener("click", () =>
  optionMenuLocal.classList.toggle("active")
);

optionsLocal.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text-local").innerText;
    sBtn_textLocal.innerText = selectedOption;

    optionMenuLocal.classList.remove("active");
  });
});

// msg select menu

const optionMenuMsg = document.querySelector(".select-menu-msg"),
  selectBtnMsg = optionMenuMsg.querySelector(".select-btn-msg"),
  optionsMsg = optionMenuMsg.querySelectorAll(".option-msg"),
  sBtn_textMsg = optionMenuMsg.querySelector(".sBtn-text-msg");

selectBtnMsg.addEventListener("click", () =>
  optionMenuMsg.classList.toggle("active")
);

optionsMsg.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text-msg").innerText;
    sBtn_textMsg.innerText = selectedOption;

    optionMenuMsg.classList.remove("active");
  });
});
