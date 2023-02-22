const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);


const allCategories = numberOfCategories.forEach((el) => {

  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
  
});

//===========================================================//
//Właściwość textContent
//elem.textContent zwraca zawartość tekstową wewnątrz elementu.
//let text = document.getElementById("myList").textContent; 

//===========================================================//

//indeks:       0         1         2
//const tab = ["Marcin", "Ania", "Agnieszka"];

//console.log( tab.length ); //3

//===========================================================//

//forEach wymaga przekazania naszej funkcji, do której przekaże jakieś dane
//[1, 2, 3].forEach((el) => console.log(el));

//numbers.forEach((number, index) => {
//console.log(`Indeks ${index}, wartość ${number}`);
//});
//===========================================================//

//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5

//===========================================================//