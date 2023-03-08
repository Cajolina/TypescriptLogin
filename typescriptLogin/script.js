"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const main = document.querySelector("main");
const loginContainer = document.querySelector(".loginContainer");
const loginInput = document.querySelector(".loginInput");
const loginPassword = document.querySelector(".loginPassword");
const loginBtn = document.querySelector(".loginButton");
const registerButton = document.getElementById("registerButton");
function goToRegister() {
    document.location.href = "http://127.0.0.1:5500/register.html";
}
loginBtn === null || loginBtn === void 0 ? void 0 : loginBtn.addEventListener("click", loginUser);
function loginUser() {
    return __awaiter(this, void 0, void 0, function* () {
        // const user = {
        //   loginValue: loginInput.value,
        //   passwordValue: loginPassword.value,
        // };
        // console.log(user);
        const response = yield fetch("http://localhost:3000/api/login", {
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
        const data = yield response.json();
        console.log(data);
    });
}
// registerButton.addEventListener("click", () => {
//   document.location.href = "http://127.0.0.1:5500/register.html";
// });
// registerButton.addEventListener("click", () => {
//   window.location.href = "/register.html";
// });
