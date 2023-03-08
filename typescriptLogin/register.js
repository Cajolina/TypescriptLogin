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
const mainDiv = document.querySelector("main");
const registerContainer = document.querySelector(".registerContainer");
const email = document.querySelector(".regEmail");
const password = document.querySelector(".regPassword");
const firstName = document.querySelector(".regFirstname");
const lastName = document.querySelector(".regLastname");
const age = document.querySelector(".regAge");
const phoneNumber = document.querySelector(".regPhone");
const shoeSize = document.querySelector(".regShoe");
const labelCat = document.querySelector(".regCat");
const catYes = document.querySelector(".regYes");
const labelCatYes = document.querySelector(".regLabelYes");
const catNo = document.querySelector(".regNo");
const labelCatNo = document.querySelector(".regLabelNo");
const regBtn = document.querySelector(".regBtn");
regBtn.addEventListener("click", registerUser);
function registerUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const catOwner = catYes.checked ? true : catNo.checked ? false : null;
        const newUser = {
            email: email.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value,
            age: parseInt(age.value),
            phoneNumber: phoneNumber.value,
            shoeSize: parseInt(shoeSize.value),
            catOwner: catOwner,
        };
        const response = yield fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });
        const data = yield response.json();
        console.log(data);
    });
}
