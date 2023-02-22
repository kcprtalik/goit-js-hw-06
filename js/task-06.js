const validation = document.querySelector("#validation-input");

const checkNumbers = () => {
  if (validation.value.length === Number(validation.dataset.length)) {
    validation.classList.remove(`invalid`);
    validation.classList.add(`valid`);
    return;
  } else {
    validation.classList.remove(`valid`);
    validation.classList.add(`invalid`);
  }
};

validation.addEventListener("blur", checkNumbers);

//=========================================================================//

// tylko w polach tekstowych i textarea  jest generowane za każdym
//razem, gdy zmienia się wartość elementu,

//Gdy element posiada fokus, pojawia się zdarzenie focus,
//a gdy fokus znika, na przykład użytkownik kliknie w innym miejscu ekranu,
//następuje zdarzenie blur.

//const textInput = document.querySelector(".text-input");
//const output = document.querySelector(".output");

//textInput.addEventListener("input", (event) => {
//output.textContent = event.currentTarget.value;
//});

//=======================================================================//

//removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
//});

//textInput.addEventListener("blur", () => {
//    textInput.value = "";
//});

//=======================================================================//

//const button = document.querySelector(".my-button");

//const handleClick = () => {
//  console.log("Button was clicked");
//};

//button.addEventListener("click", handleClick);

//=======================================================================//

//let cost;
//const subscription = "pro";
//if (subscription === "pro") {
//  cost = 100;
//} else {
//  cost = 0;
//}
//console.log(cost); // 100

//=======================================================================//

//<button type="button" data-action="save">Save</button>
//<button type="button" data-action="close">Close</button>

//const saveBtn = document.querySelector('button[data-action="save"]');
//console.log(saveBtn.dataset.action); // "save"

//const closeBtn = document.querySelector('button[data-action="close"]');
//console.log(closeBtn.dataset.action); // "close"

//=======================================================================//

//elem.classList.add(cls) - dodaje klasę cls do listy klas elementów.
//elem.classList.remove(cls) - usuwa klasę cls z listy klas elementów.
