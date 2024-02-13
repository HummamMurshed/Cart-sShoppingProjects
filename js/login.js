// Login Script

let username = document.getElementById("username");
let password = document.querySelector("#password");
let btnSignIn = document.getElementById("signin");
let usersRecord = [];
usersRecord = JSON.parse(localStorage.getItem("dbusers"));

function isInputEmpety() {
  return username.value === "" || password.value === "";
}
function getUserName() {
  return localStorage.getItem("username");
}
function getPassword() {
  return localStorage.getItem("password");
}

function checkPassword() {
  for (user of usersRecord) {
    if (
      user.password.trim() === password.value.trim() &&
      user.username === username.value.trim()
    ) {
      localStorage.setItem("username", user.username);
      localStorage.setItem("email", user.email);
      localStorage.setItem("userid", user.id);
      
      return true;
    }
  }

  return false;
}
function goToHomePage() {
  setTimeout(() => {
    window.location = "index.html";
  }, 1000);
}
btnSignIn.addEventListener("click", (e) => {
  //For Prevent auto refresh page
  e.preventDefault();
  if (checkPassword() && !isInputEmpety()) {
    goToHomePage();
  } else {
    window.alert("Erorr Password,or UserName Please try again");
  }
});
