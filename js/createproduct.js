//Variables
let txtProductName = document.querySelector("#inName");
// let txtProducImagePath = document.getElementById("indesc");
let btnCreateNewProduct = document.getElementById("btncreat");
let dropList = document.getElementById("size");
let frmCreate = document.getElementById("createform");
let image = document.querySelector("#uplowd-image");
let productImage;
let productSize;
const dataBaseName = "dbProducts";
//Events
dropList.addEventListener("change", getProductSize);
btnCreateNewProduct.addEventListener("click", createNewProduct);
image.addEventListener("change", uplowdImage);
//Function
function getProductSize(e) {
  productSize = e.target.value;
}

function convertStringToObject(text) {
  return JSON.parse(text);
}

function getAllProductFromLocalStorage() {
  let dataAsText = localStorage.getItem(dataBaseName);
  let dataAsArrayOfObject = convertStringToObject(dataAsText);
  return dataAsArrayOfObject;
}

function getNewProductAsObject(id) {
  let productName = txtProductName.value;
  // let ProducImagePath = txtProducImagePath.value;

  let obj = {
    id: id + 1,
    count: 0,
    image: productImage != null ? `${productImage}` : "image/transparentPc.png",
    size: productSize,
    title: productName,
    isMe: true,
  };
  return obj;
}

function convertObjectToString(obj) {
  return JSON.stringify(obj);
}

function saveProductsToLoacalStorage(productsToSave) {
  let savDataAsText = convertObjectToString(productsToSave);
  localStorage.setItem(dataBaseName, savDataAsText);
}

function backToMainPage() {
  setTimeout(function () {
    window.location = "index.html";
  }, 500);
}
function createNewProduct(e) {
  e.preventDefault();
  let allProducts = getAllProductFromLocalStorage();
  let obj = getNewProductAsObject(allProducts.length);
  allProducts = [...allProducts, obj];
  saveProductsToLoacalStorage(allProducts);
  console.log("addedSucessfully");
  backToMainPage();
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
    return;
  };
}
