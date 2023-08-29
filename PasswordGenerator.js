const generateButton = document.getElementById("generate");
const lengthSelect = document.getElementById("lengthSelect");
const includeUpperCase = document.getElementById("includeUpperCase");
const includeLowerCase = document.getElementById("includeLowerCase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const passwordField = document.getElementById("password");

generateButton.addEventListener("click", generatePassword);

function generatePassword() {
  const length = parseInt(lengthSelect.value);
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()-_+=<>?";

  let charSet = "";
  if (includeUpperCase.checked) charSet += uppercaseChars;
  if (includeLowerCase.checked) charSet += lowercaseChars;
  if (includeNumbers.checked) charSet += numberChars;
  if (includeSymbols.checked) charSet += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  passwordField.value = password;
}
