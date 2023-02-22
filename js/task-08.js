const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all fields");
  }

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);

//====================================================================//

//Aby skasować domyślne działanie przeglądarki na obiekcie zdarzenia,
//istnieje standardowa metoda preventDefault().

//const form = document.querySelector(".register-form");

//form.addEventListener("submit", (event) => {
//  event.preventDefault();

//  const {
//    elements: { username, password }
//  } = event.currentTarget;

//  console.log(username.value, password.value);
// });

//====================================================================//

//const form = document.querySelector(".form");

//form.addEventListener("submit", handleSubmit);

//function handleSubmit(event) {
//  event.preventDefault();
//  const {
//    elements: { login, password }
//  } = event.currentTarget;

//  if (login.value === "" || password.value === "") {
//    return console.log("Please fill in all the fields!");
//  }

//  console.log(`Login: ${login.value}, Password: ${password.value}`);
//  event.currentTarget.reset();
//}
