const floatingInput = document.querySelector("#floatingInput");
const floatingPassword = document.querySelector("#floatingPassword");
const loginButton = document.querySelector("#login-btn");

loginButton.addEventListener("click", function () {
  if (
    floatingInput.value == "admin123@gmail.com" &&
    floatingPassword.value == "admin123"
  ) {
    window.location.href = "index.html";
  } else {
    alert("password salah");
  }
});
