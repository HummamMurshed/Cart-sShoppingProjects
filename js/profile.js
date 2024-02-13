//variables
const dbName = "username";
const dbEmail = "email";
const dbProfProducts = "dbProducts";

let proUserName = document.getElementById("username");
let proEmail = document.getElementById("email");
let productsLenght = document.getElementById("product-length");
let userImage = document.querySelector(".user-avatar");
//function
function loadProductDataFrom(fileName) {
  return JSON.parse(localStorage.getItem(fileName));
}
function loadUserDataFrom(fileName) {
  return localStorage.getItem(fileName);
}
function getAll() {
  return JSON.parse(localStorage.getItem("dbusers"));
}

function fillUserInfoToPage() {
  let cuurentID = localStorage.getItem("userid");
  proUserName.innerHTML = loadUserDataFrom(dbName);
  proEmail.innerHTML = loadUserDataFrom(dbEmail);
  let currentUser = getAll().find((item) => {
    return item.id == cuurentID;
  });
  userImage.src = currentUser.image;

  productsLenght.firstElementChild.innerHTML =
    loadProductDataFrom(dbProfProducts).length;
}
fillUserInfoToPage();
