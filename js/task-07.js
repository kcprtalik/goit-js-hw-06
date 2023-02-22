const scrollbar = document.querySelector("#font-size-control");
const content = document.querySelector("#text");
content.style.fontSize = scrollbar.value + "px";
const contentSize = () => {
  content.style.fontSize = scrollbar.value + "px";
};
scrollbar.addEventListener("input", contentSize);

//===================================================================//

//!pomocne

//https://www.youtube.com/watch?v=flBlBhjivkA

//text.style.fontsize = value + 'px'

//===================================================================//

// now you have a proper float for the font size
//(yes, it can be a float, not just an integer)

//el.style.fontSize = (fontSize + 1) + 'px';

//===================================================================//

//const button = document.querySelector(".my-button");

//const handleClick = () => {
// console.log("Button was clicked");
//};

//button.addEventListener("click", handleClick);

//===================================================================//
