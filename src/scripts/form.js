const form = document.getElementById("form-email");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const emailValue = email.value;

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email, "E-mail cadastrado com sucesso!");
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("E-mail cadastrado com sucesso!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adicionar mensagem de erro
  small.innerText = message;

  // Adicionar classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");

  // Adicionar mensagem de erro
  small.innerText = message;

  // Adicionar classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
