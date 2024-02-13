//Register User
let username = document.getElementById("username");
var email = document.querySelector("#email");
let password = document.querySelector("#password");
let btnRegister = document.getElementById("signup");
let allUserInfo = [];
// allUserInfo.push;
allUserInfo = JSON.parse(localStorage.getItem("dbusers"));
console.log(allUserInfo);
function isInputEmpety() {
  return username.value === "" || email.value === "" || password.value === "";
}

function storeRegisterDataToLocalStorage() {
  let userInfo = {
    id: allUserInfo != null ? allUserInfo.length : 1,
    username: username.value,
    password: password.value,
    email: email.value,
    image: "image/myimage.png",
  };
  allUserInfo = [...allUserInfo, userInfo];
  localStorage.setItem("dbusers", JSON.stringify(allUserInfo));
}
function grToLogInPage() {
  setTimeout(() => {
    window.location = "login.html";
  }, 1000);
}
btnRegister.addEventListener("click", (e) => {
  //Prevent Auto Refresh
  e.preventDefault();
  if (!isInputEmpety()) {
    storeRegisterDataToLocalStorage();
    grToLogInPage();
  } else {
    window.alert("Pleas Fill Data In RigsterForm");
    username.focus();
  }
});

function printAtConsole(item) {
  console.log(item);
}
