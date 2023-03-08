const main = document.querySelector("main") as HTMLDivElement;
const loginContainer = document.querySelector(
  ".loginContainer"
) as HTMLDivElement;
const loginInput = document.querySelector(".loginInput") as HTMLInputElement;
const loginPassword = document.querySelector(
  ".loginPassword"
) as HTMLInputElement;
const loginBtn = document.querySelector(".loginButton") as HTMLButtonElement;
const registerButton = document.getElementById(
  "registerButton"
) as HTMLButtonElement;

function goToRegister() {
  document.location.href = "http://127.0.0.1:5500/register.html";
}

loginBtn?.addEventListener("click", loginUser);

async function loginUser() {
  // const user = {
  //   loginValue: loginInput.value,
  //   passwordValue: loginPassword.value,
  // };
  // console.log(user);

  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    // credentials: "include",
    body: JSON.stringify({
      loginInput: loginInput.value,
      loginPassword: loginPassword.value,
    }),
  });

  const data = await response.json();
  console.log(data);
}
// registerButton.addEventListener("click", () => {
//   document.location.href = "http://127.0.0.1:5500/register.html";
// });

// registerButton.addEventListener("click", () => {
//   window.location.href = "/register.html";
// });
