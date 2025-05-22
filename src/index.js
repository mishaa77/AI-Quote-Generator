function displayQoute(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let userElement = document.getElementById("enter-input");
  let apiKey = "900fe54a2dcb23943o88ct0a1d192e13";
  let prompt = `Generate a qoute about${userElement}`;
  let context = `you are an AI assistant who creates quotes .Generate quotes based on the ${userElement}.the quote should be relatable and should mention the${userInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQoute);
  console.log(userElement);
}

let submitForm = document.getElementById("form");
submitForm.addEventListener("submit", generateQuote);
