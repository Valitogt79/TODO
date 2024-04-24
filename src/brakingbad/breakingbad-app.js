/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
  const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
  const data = await res.json();
  console.log(data[0]);
  return data[0];
};

//Componente
/**
 *
 * @param {HTMLDivElement} element
 */

export const BreakingbadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Breaking Bad App";
  element.innerHTML = `Loading...`;

  /*   const quote = await fetchQuote();
  element.innerHTML = `Tenemos Data!`;
 */

  const quoteLabel = document.createElement("blockquote");
  const authoLabel = document.createElement("h3");
  const nextQuoteButton = document.createElement("button");
  nextQuoteButton.innerText = "Next Quote";

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authoLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
  };

  //agregando funcionalidad al boton
  nextQuoteButton.addEventListener("click", async() => {
    element.innerHTML = `Loading...`;
    const quote = await fetchQuote();
   renderQuote(quote);
  });

  //renderizando la primera cita
fetchQuote()
 .then ( renderQuote );
};
  