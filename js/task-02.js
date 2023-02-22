const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
for (const el of ingredients) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = el;
  list.append(item);
  console.log(el);
}

//===================================================================//

//elem.classList.add(cls) - dodaje klasę cls do listy klas elementów.

//===================================================================//

//const tab = ["Marcin", "Ania", "Agnieszka"];
//for (const el of tab) {
//el to nazwa zmiennej wymyślona przez nas
//console.log(el); //"Marcin", "Ania"...
//}

//===================================================================//

//document.createElement(tagName);

//Tworzy element o nazwie tagName i zwraca do niego link
//jako wynik jego wykonania.
//tagName to ciąg znaków wskazujący typ tworzonego elementu.
//Element jest tworzony w pamięci, nie ma go jeszcze w DOM.

//const heading = document.createElement("h1");
//console.log(heading); // <h1></h1>

//===================================================================//
//element.append(el1, el2, ...) -
//dodaje jeden lub więcej elementów po wszystkich dzieciach elementu element.
//const lastItem = document.createElement("li");
//lastItem.textContent = "Poly";
//list.append(lastItem);
