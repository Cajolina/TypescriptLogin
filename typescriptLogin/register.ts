const mainDiv = document.querySelector("main") as HTMLDivElement;
const registerContainer = document.querySelector(
  ".registerContainer"
) as HTMLDivElement;
const email = document.querySelector(".regEmail") as HTMLInputElement;
const password = document.querySelector(".regPassword") as HTMLInputElement;
const firstName = document.querySelector(".regFirstname") as HTMLInputElement;
const lastName = document.querySelector(".regLastname") as HTMLInputElement;
const age = document.querySelector(".regAge") as HTMLInputElement;
const phoneNumber = document.querySelector(".regPhone") as HTMLInputElement;
const shoeSize = document.querySelector(".regShoe") as HTMLInputElement;
const labelCat = document.querySelector(".regCat") as HTMLLabelElement;
const catYes = document.querySelector(".regYes") as HTMLInputElement;
const labelCatYes = document.querySelector(".regLabelYes") as HTMLLabelElement;
const catNo = document.querySelector(".regNo") as HTMLInputElement;
const labelCatNo = document.querySelector(".regLabelNo") as HTMLLabelElement;
const regBtn = document.querySelector(".regBtn") as HTMLButtonElement;

interface User {
  email: String;
  password: String;
  firstName: String;
  lastName: String;
  age: Number;
  phoneNumber: String;
  shoeSize: Number;
  catOwner: Boolean | null;
}

regBtn.addEventListener("click", registerUser);

async function registerUser() {
  const catOwner = catYes.checked ? true : catNo.checked ? false : null;

  const newUser: User = {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    age: parseInt(age.value),
    phoneNumber: phoneNumber.value,
    shoeSize: parseInt(shoeSize.value),
    catOwner: catOwner,
  };
  const response = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const data = await response.json();

  console.log(data);
}
