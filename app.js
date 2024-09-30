const buttonSubmit = document.getElementById("button");

const validRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const emailInput = document.getElementById("email");

const errorText = document.getElementById("errorText");

const firstSection = document.getElementById("first-section");

const secondSection = document.getElementById("second-section");

const form = document.getElementById("form");

const span = document.getElementById("text-email");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
  if (validRegex.test(emailInput.value)) {
    //hace desaparecer la primera sección
    firstSection.classList.add("none");
    //hace aparecer la segunda sección
    secondSection.classList.toggle("none");
    secondSection.classList.add("second-section");
    span.innerText = emailInput.value;
  } else {
    emailInput.classList.add("error-warning");
    errorText.classList.add("error-warning-text");
    errorText.classList.remove("none");
  }
});

console.log(span);
