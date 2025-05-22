function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings: "“You have to believe in yourself when no one else does.”",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let submitForm = document.getElementById("form");
submitForm.addEventListener("submit", generateQuote);
