//variables

const dbProducts = "dbProducts";
const productToedit = "productToedit";
let productSizec;
let allProductData = getDataFromLocalStorage(dbProducts);
let idItemToEdit = getDataFromLocalStorage(productToedit);
let btnEditProduct = document.getElementById("btnedit");
let txtProductName = document.querySelector("#inName");
let itemToUpdate = getItemToUpdate(idItemToEdit);
let image = document.querySelector("#uplowd-image");
let productImage;
dropList = document.getElementById("size");
printInConsole(dbProducts);

//Event
btnEditProduct.addEventListener("click", editProudctData);
dropList.addEventListener("change", setProductSize);
image.addEventListener("change", uplowdImage);

//function
function printInConsole(text) {
  console.log(text);
}
function saveProductDataToLocalStorage(dbProducts, data) {
  localStorage.dbProducts = JSON.stringify(data);
}
function setProductSize(e) {
  productSizec = e.target.value;
}
function getDataFromLocalStorage(fileName) {
  return JSON.parse(localStorage.getItem(fileName));
}

function getItemToUpdate(id = idItemToEdit) {
  let item = allProductData.find((ele) => {
    return ele.id == idItemToEdit;
  });
  return item;
}
function setNewDataTo() {
  itemToUpdate.title = txtProductName.value;
  itemToUpdate.size = productSizec != null ? productSizec : itemToUpdate.size;
  itemToUpdate.image = productImage != null ? productImage : itemToUpdate.image;
}

function editProudctData(e) {
  e.preventDefault();
  setNewDataTo();
  saveProductDataToLocalStorage(dbProducts, allProductData);
  backToMainPage();
}
function fillItemDataToEdit(item) {
  txtProductName.value = item.title;
  dropList.value = item.size;
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
    productImage = reader.result;
  };
  reader.onerror = function () {
    window.alert("Error Type Reader Error");
  };
}
function backToMainPage() {
  setTimeout(function () {
    window.location = "index.html";
  }, 500);
}

//Invoke function

fillItemDataToEdit(itemToUpdate);
