//variabels
let btnEditProfile = document.getElementById("btncreat");

let email = document.getElementById("email");
let profileName = document.getElementById("inName");
let profileImage = document.getElementById("uplowd-image");

let proImage;

const defulatProfileImge = "image/icons8_user_24px_2.png";
const dbusers = "dbusers";
let btncreate;
let currentUser = {
  id: localStorage.getItem("userid"),
  username: localStorage.getItem("username"),
  password: "admin",
  image: defulatProfileImge,
};
// user = {
//   username: "Hummam",
//   password: "admin",
//   image: defulatProfileImge,
// };

//Eventes
btnEditProfile.addEventListener("click", editProfile);
profileImage.addEventListener("change", uplowdImage);

//Functions
function getAllUsersInfo() {
  console.log(JSON.parse(localStorage.getItem("dbusers")));
  return JSON.parse(localStorage.getItem("dbusers"));
}

function setUser(users) {
  localStorage.setItem(dbusers, JSON.stringify(users));
}
function saveUsersInfoe(data, dbfile = dbusers) {
  localStorage.setItem(dbfile, JSON.stringify(data));
}
function getUserInfo() {
  let all = getAllUsersInfo();
  console.log(all);
  let current = all.find((item) => {
    return currentUser.id == item.id;
  });
  console.log(current);

  return current;
}

function fillCurrentUserInfoToForm() {
  let currUser = getUserInfo();
  profileName.value = currUser.username;
  email.value = currUser.email;
}

function goToProfilPage() {
  setTimeout(() => {
    window.location = "profile.html";
  }, 500);
}
function editProfile(e) {
  e.preventDefault();
  let item = getUserInfo();
  item.name = profileName.value;
  item.image = proImage != null ? proImage : item.image;
  item.email = email.value;
  let all = getAllUsersInfo();
  all[item.id] = item;
  saveUsersInfoe(all, dbusers);

  goToProfilPage();
}

function uplowdImage() {
  let file = this.files[0];
  let type = ["image/jpeg", "image/png", "image/jfif"];
  if (type.indexOf(file.type) == -1) {
    alert("Type Of Image Not supportted");
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert("the Size more thsan 2Mb");
    return;
  }
  getImageBase64(file);
}

function getImageBase64(file) {
  // Object Can Read File Content
  let reader = new FileReader();
  //Method Read File Url and convert image to base64,then we can store and show image in our page
  reader.readAsDataURL(file);
  reader.onload = function () {
    //reader.result content image as 64base
    proImage = reader.result;
  };
  reader.onerror = function () {
    window.alert("Error Type Reader Error");
    return;
  };
}
fillCurrentUserInfoToForm();
