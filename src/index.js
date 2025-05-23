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

  let userInput = document.getElementById("enter-input");
  let apiKey = "900fe54a2dcb23943o88ct0a1d192e13";
  let prompt = `Generate a qoute about ${userInput} use basic html`;
  let context = `you are an AI assistant who creates quotes.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQoute);
  console.log(apiUrl);
  console.log(userInput);
}

let submitForm = document.getElementById("form");
submitForm.addEventListener("submit", generateQuote);
