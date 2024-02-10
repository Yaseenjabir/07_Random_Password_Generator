const passInput = document.querySelector(".pass-input");
const copyBtn = document.querySelector(".copy");
const box1Input = document.querySelector(".box1 input");
const upperCase = document.querySelector(".UpperCase");
const lowerCase = document.querySelector(".LowerCase");
const number = document.querySelector(".number");
const Symbols = document.querySelector(".Symbols");
const generateBtn = document.querySelector(".generate");
const notification = document.querySelector(".notification");
const notificationBtn = document.querySelector(".notification button");
const body = document.body;

// console.log(notification)

let lengthStr = box1Input.value;
let upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
let numberStr = "0123456789";
let SymbolsStr = "~`!@#$%^7890--==;:,./?";

// console.log(number, numberStr)

generateBtn.addEventListener("click", () => {
  let password = "";

  if (upperCase.checked) {
    password += upperCaseStr;
  }

  if (lowerCase.checked) {
    password += lowerCaseStr;
  }

  if (number.checked) {
    password += numberStr;
  }

  if (Symbols.checked) {
    password += SymbolsStr;
  }

  if (
    !upperCase.checked &&
    !lowerCase.checked &&
    !number.checked &&
    !Symbols.checked
    ) {
    passInput.value = "";
    notification.style.display = "flex";
    notificationBtn.addEventListener("click", () => {
      notification.style.display = "none";
    });
    
  } else {
    passInput.value = "";

    for (i = 0; i < box1Input.value; i++) {
      const randomIndex = Math.floor(Math.random() * password.length);
      passInput.value += password[randomIndex];
    }
    // box1Input.value = ""
  }
});

copyBtn.addEventListener("click", () => {
  passInput.select();
  document.execCommand("copy");
  alert("Password Copied to Clipboard");
});

window.addEventListener("beforeunload", () => {
  passInput.value = "";
  box1Input.value = "";
});