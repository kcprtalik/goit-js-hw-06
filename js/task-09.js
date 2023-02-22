function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector(".change-color");
const colorDescription = document.querySelector(".color");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorDescription.textContent = getRandomHexColor();
});

//======================================================================//

//w camelCase background-color staje się element.style.backgroundColor itd.

//======================================================================//

//colorDescription.textContent ===> moze byc innerHTML

//======================================================================//

//const button = document.querySelector(".my-button");

//button.addEventListener("click", () => {
//  console.log("Button was clicked");
//});

//======================================================================//
