const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
const markup = images
  .map((img) => `<img src=${img.url} alt=${img.alt} width="500">`)
  .join("");
list.insertAdjacentHTML("afterbegin", markup);
list.style = ` display: flex;
  justify-content: center;
  gap: 30px `;

//======================================================================//

//const list = document.querySelector(".list");
//////const newTechnologies = ["React", "TypeScript", "Node.js"];//////
//const markup = newTechnologies.map((technology) => `<li class="list-item new">${technology}</li>`).join("");
//list.insertAdjacentHTML("beforeend", markup);
//list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

//======================================================================//

//tablica.map((element, index, array) => {
//// Ciało funkcji zwrotnej////
//});

//======================================================================//

//const words = ["JavaScript", "jest", "ciekawy"];
//console.log(words.join("")); // "JavaScriptjestciekawy"
//console.log(words.join(" ")); // "JavaScript jest ciekawy"
//console.log(words.join("-")); // "JavaScript-jest-ciekawy"

//Wywołania metod w łańcuchy.
//Każda następna metoda zostanie wykonana na wyniku poprzedniej.

//const names = [...students]
// .sort((a, b) => a.score - b.score)
// .map(student => student.name);

//======================================================================//

//elem.insertAdjacentHTML(position, string);
//"beforebegin" - przed elem
//"afterbegin" - wewnątrz elem, przed wszystkimi dziećmi
//"beforeend" - wewnątrz elem, po wszystkich dzieciach
//"afterend" - po elem

//Właściwość style
//Służy do czytania i zmiany stylów wbudowanych. Zwraca obiekt CSSStyleDeclaration,
//który zawiera listę wszystkich właściwości określonych tylko w stylach wbudowanych
//elementu, a nie cały CSS.
//button.style.backgroundColor = "teal";
//button.style.fontSize = "24px";
//button.style.textAlign = "center";
