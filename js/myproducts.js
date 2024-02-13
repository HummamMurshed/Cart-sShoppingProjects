const dbProducts = "dbProducts";

let containerMyProduct = document.querySelector(".products");
let bntDelete = document.querySelector(".delete");
// let myshoopingBadge = document.querySelector(".badge");
// let btnMyCreateNewProduct = document.getElementById("addTocartProduct");
let allMyProductData = getDataFromLocalStorage(dbProducts);
//Events
// btnCreateNewProduct.addEventListener("click", createNewProduct);

//Function
function saveProductDataToLocalStorage(dbProducts, data) {
  localStorage.setItem(dbProducts, JSON.stringify(data));
}

function createNewProduct() {
  window;
}
function getMyProductElement(item) {
  let cradToAdd = `
    <div class="item" style="border:${
      item.isMe ? "2px solid var(--main-color);" : ""
    }">
    <img src=${item.image} alt="laptop image" }/>
    
    <div class="description">
      <a  onclick = 'saveItemData(${item.id})'>${item.title}</a>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <span>Size: ${item.size}</span>
      <button onclick="goToEditPage(${
        item.id
      })"  class = "edit" style="display:block;">Edite</button>
    </div>
    <div class="action">
      <button onclick= "deleteProduct(${
        item.id
      })" class="addtocart delete">Delete</button>
      <i style = '${
        item.likd ? "color: red;" : "color: black"
      }' onclick="addTocartProduct(${
    item.id
  })" class="far fa-heart favorite heart-icon"></i>
    </div>
    </div>
    `;
  // <spn>Count : ${item.count}</span>
  return cradToAdd;
}

function getDataFromLocalStorage(fileName) {
  return JSON.parse(localStorage.getItem(fileName));
}
function getAllMyProduct() {
  let all = allMyProductData.filter((item) => {
    return item.isMe;
  });
  return all;
}
function fillMyProductsInPage(myproducts) {
  containerMyProduct.innerHTML = "";
  for (mypro of myproducts) {
    containerMyProduct.innerHTML += getMyProductElement(mypro);
  }
}
function areYouShure(message = "Ae You Sure?") {
  return window.confirm(message);
}
function deleteProduct(id) {
  let itemToDelet = allMyProductData.findIndex((item) => {
    return item.isMe && item.id == id;
  });
  if (
    areYouShure(
      "Are You Shre To Delete this item " + allMyProductData[itemToDelet].title
    )
  ) {
    allMyProductData.splice(itemToDelet, 1);
    saveProductDataToLocalStorage(dbProducts, allMyProductData);
    refreshMyProducts();
  } else {
    console.log("no");
  }
}
function refreshMyProducts() {
  getDataFromLocalStorage(dbProducts);
  fillMyProductsInPage(getAllMyProduct());
}
function goToEditPage(id) {
  saveProductDataToLocalStorage("productToedit", id);
  window.location.assign("editproduct.html");
  //   window.location = "editproduct.html";
  //   window.location.replace("editproduct.html");
}
fillMyProductsInPage(getAllMyProduct());
// showBadge();
// function showBadge() {
//   myshoopingBadge.style.display = "block";
//   myshoopingBadge.innerHTML = JSON.parse(
//     localStorage.getItem("productcart")
//   ).length;
// }
