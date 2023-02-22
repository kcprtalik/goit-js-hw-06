const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {

  output.textContent = input.value || "Anonymous";
  
});

//====================================================================//

//const button = document.querySelector(".my-button");
//button.addEventListener("click", () => {
//console.log("Button was clicked");
//});

//====================================================================//

//const text = document.querySelector(".article-text");
//console.log(text.textContent); // text inside p.article-text

//const title = document.querySelector(".article-title");
//title.textContent = 'Welcome to Bahamas!';
//====================================================================//

//Czyli logiczne «OR» wyłapuje pierwszą prawdę i zwraca znaczenie -
//to znaczenie, przy którym to się odbyło lub ostatni w kolejności operand.

//console.log(true || false); // true
//console.log(false || true); // true
//console.log(true || true); // true

//console.log(3 || false); // 3
//console.log(false || 3); // 3
//console.log(3 || true); // 3
//console.log(true || 3); // true

//Przy wykonaniu logicznego «OR», prawy operand niekoniecznie musi być
//sprawdzony, jeśli lewy już był sprawdzony jako true.
