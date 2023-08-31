document.addEventListener("DOMContentLoaded", function () {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  const generateButton = document.getElementById("generate");
  const passwordDisplay = document.getElementById("password");

  generateButton.addEventListener("click", function () {
    const selectedLength = parseInt(document.getElementById("length").value);
    let characters = "";

    if (document.getElementById("uppercase").checked) {
      characters += uppercase;
    }
    if (document.getElementById("lowercase").checked) {
      characters += lowercase;
    }
    if (document.getElementById("numbers").checked) {
      characters += numbers;
    }
    if (document.getElementById("symbols").checked) {
      characters += symbols;
    }

    if (characters.length === 0 || selectedLength === 0) {
      passwordDisplay.textContent = "En az bir seçenek işaretleyin";
      return;
    }

    let password = "";
    for (let i = 0; i < selectedLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }

    passwordDisplay.textContent = password;
  });
});
