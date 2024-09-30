let buttonSubmit = document.getElementById("button");

let validRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

let emailInput = document.getElementById("email");

let errorText = document.getElementById("errorText");

let firstSection = document.getElementById("first-section");

let secondSection = document.getElementById("second-section");

let form = document.getElementById("form");

let span = document.getElementById("text-email");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
  if (validRegex.test(emailInput.value)) {
    console.log("Email is valid, continue with form submission");
    //hace desaparecer la primera sección
    firstSection.classList.add("none");
    //hace aparecer la segunda sección
    secondSection.classList.toggle("none");
    secondSection.classList.add("second-section");
    span.innerText = emailInput.value;
  } else {
    console.log("not valid email");
    emailInput.classList.add("error-warning");
    errorText.classList.add("error-warning-text");
    e.preventDefault();
  }
});

console.log(span);
