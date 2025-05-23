function displayQoute(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
  console.log(response.data);
}

function generateQuote(event) {
  event.preventDefault();

  let userInstruction = document.querySelector("#user-input");
  let apiKey = "f3a1ab1884f405093fec0555dtb0oa41";
  let prompt = `user input:Generate a qoute about ${userInstruction.value}`;
  let context =
    "you are an AI assistant who creates quotes.Generate a a quote and Make sure to follow the user input ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = `⏳Generating a quote about  ${userInstruction.value}...`;

  axios.get(apiUrl).then(displayQoute);
  console.log(apiUrl);
  console.log(userInstruction.value);
}

let submitForm = document.getElementById("form");
submitForm.addEventListener("submit", generateQuote);
