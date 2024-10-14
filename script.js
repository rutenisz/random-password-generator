const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghiklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+{}[]:;<>?,./|~";

const allChars = upperCase + lowerCase + number + symbol;

const generateRandomPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

document
  .getElementById("btn")
  .addEventListener("click", generateRandomPassword());
