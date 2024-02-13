let userInfoCheck = document.getElementById("user-info");
let userDoneCheck = document.getElementById("user");
let linksCheck = document.querySelector("#links");
let btnLogOutCheck = document.getElementById("logout");
// let home = document.getElementById("home");
// let containerProduct = document.querySelector(".products");
// let cartProcductContainer = document.querySelector(".carts-product");
// let shoopingBadge = document.querySelector(".badge");
// let shooping = document.querySelector("i");

let allUsers = [];
var userName = localStorage.getItem("username");
userDoneCheck.innerHTML = userName;

function getAllUsers() {
  return JSON.parse(localStorage.getItem("dbusers"));
}
function isUserFound() {
  return userName ? true : false;
}
function displayUserInfo() {
  if (isUserFound()) {
    linksCheck.remove();
    userInfoCheck.className = "displayBlock";
    userDoneCheck.innerHTML = userName;
  }
}

displayUserInfo();

btnLogOutCheck.onclick = function () {
  window.location = "register.html";
};
