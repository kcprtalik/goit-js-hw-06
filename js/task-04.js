const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;

decrement.addEventListener("click", () => {
  counterValue = counterValue - 1;
  counter.textContent = counterValue;
});

increment.addEventListener("click", () => {
  counterValue = counterValue + 1;
  counter.textContent = counterValue;
});

//=====================================================//

//Dodaje detektor zdarzeń do elementu.

//element.addEventListener(event, handler, options);

//event - nazwa zdarzenia, ciąg, np. "click".
//handler - funkcja wywołania zwrotnego, która zostanie wywołana po wystąpieniu zdarzenia.
//options - opcjonalny obiekt opcji zaawansowanych.

//const btn = document.querySelector(".button");

//function elementClick() {
//console.log("Kliknąłem na element");
//}

//btn.addEventListener("click", elementClick);
//btn.removeEventListener("click", elementClick);

//====================================================//

//element.textContent = text;

//====================================================//

//Stwórzmy licznik.

//let counter = 0;

//while (counter < 10) {
//console.log("counter: ", counter);
//counter += 1;
//}

//   <style>
//    button {
//  padding: 10px 10px;
//  cursor: pointer;
//}

//    </style>
