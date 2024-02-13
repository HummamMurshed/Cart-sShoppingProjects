//Main  Js

let userInfo = document.getElementById("user-info");
let userDone = document.getElementById("user");
let links = document.querySelector("#links");
let btnLogOut = document.getElementById("logout");
let home = document.getElementById("home");
let containerProduct = document.querySelector(".products");
let cartProcductContainer = document.querySelector(".carts-product");
let shoopingBadge = document.querySelector(".badge");
let shooping = document.querySelector("i");
// let shoop = document.querySelector("#shoop");
let inputSearch = document.querySelector(".container input");
let seachFillter = document.querySelector(".search-fillter");
let sizeFil = document.querySelector("#size-filter");
let btnEdit;

let heartIcon = null;
setTimeout((_) => {
  heartIcon = document.querySelector(".heart-icon");
  heartIcon.addEventListener("click", addTocartProduct);
}, 200);

function compareTowString(str1, str2) {}
inputSearch.onkeyup = function () {
  let reslut = products.filter((item) => {
    return item.title.toUpperCase().includes(this.value.toUpperCase());
  });

  let element = reslut.map((item) => {
    return getProductElement(item);
  });

  containerProduct.innerHTML = element;
};
let arrayCart = [];

shoopingBadge.onclick = function () {
  // cartProcductContainer.classList.add("displayBlock");
  if (cartProcductContainer.firstElementChild.innerHTML != "") {
    if (cartProcductContainer.style.display == "block") {
      cartProcductContainer.style.display = "none";
      sizeFil.style.zIndex = "1";
    } else {
      cartProcductContainer.style.display = "block";
      sizeFil.style.zIndex = "-1";
    }
  }
};

links.remove();

var userName = localStorage.getItem("username");
userDone.innerHTML = userName;

function isUserFound() {
  return user ? true : false;
}
function displayUserInfo() {
  if (isUserFound()) {
    links.remove();
    userInfo.className = "displayBlock";
    userDone.innerHTML = userName;
  }
}
// displayUserInfo();
function goToRegisterPage() {
  setTimeout(() => {
    window.location = "register.html";
    userInfo.remove();
    links.className = "displayBlock";
  }, 1000);
}
btnLogOut.addEventListener("click", function (e) {
  e.preventDefault();
  // localStorage.clear();
  goToRegisterPage();
});

function getProductElement(item) {
  let cradToAdd = `
    <div class="item" style="border:${
      item.isMe ? "2px solid var(--main-color);" : ""
    }">
    <img src=${item.image} alt="laptop image" }/>
    
    <div class="description">
      <a  onclick = 'saveItemData(${item.id})'>${item.title}</a>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <span>Size: ${item.size}</span>
      <button onclick="editProduct(${
        item.id
      })"  class = "edit" style="display:${
    item.isMe ? "block;" : "none;"
  } ">Edite</button>
    </div>
    <div class="action">
      <button onclick= "addTocartProduct(${
        item.id
      })" class="addtocart">Add To Cart</button>
      <i style = '${
        item.likd ? "color: red;" : "color: black"
      }' onclick="addTocartProduct(${
    item.id
  })" class="far fa-heart favorite heart-icon"></i>
    </div>
    </div>
    `;

  return cradToAdd;
}
function showProductsInPage(toShowproduct = products) {
  let product = toShowproduct.map((item) => {
    return getProductElement(item);
  });

  containerProduct.innerHTML = product;
}

function checkLogInUser() {
  if (localStorage.getItem("username")) {
    window.location = "cartproducts.html";
  } else {
    window.location = "login.html";
  }
}

function getFavoriteCarts() {
  return JSON.parse(localStorage.getItem("productcart"));
}

let allItems = [];

function displayCountFivortCarts() {
  //reset cart fivort
  cartProcductContainer.firstElementChild.innerHTML = "";

  let tempArr = JSON.parse(localStorage.getItem("productcart"));
  tempArr.forEach((element) => {
    cartProcductContainer.firstElementChild.innerHTML += `<p>${element.title} ${element.count} </p>`;
  });
  localStorage.setItem("productcart", JSON.stringify(tempArr));
}

let firstTime = true;
function addTocartProduct(index) {
  let selectItem = products.find((item) => {
    return item.id === index;
  });
  selectItem.likd = true;
  // if (firstTime) {
  //   arrayCart = JSON.parse(localStorage.getItem("productcart"));
  //   selectItem.count = allItems[index];
  //   arrayCart = [...arrayCart, selectItem];
  //   console.log(selectItem.count);
  //   displayCountFivortCarts();
  //   localStorage.setItem("productcart", JSON.stringify(arrayCart));
  //   firstTime = false;
  // } else

  if (typeof allItems[index] != typeof 1) {
    selectItem.count = 1;

    cartProcductContainer.firstElementChild.innerHTML += `<p>${selectItem.title} </p>`;
    shoopingBadge.style.display = "block";
    shoopingBadge.innerHTML = Number(shoopingBadge.innerHTML) + 1;
    arrayCart = JSON.parse(localStorage.getItem("productcart"));
    arrayCart = [...arrayCart, selectItem];
    localStorage.setItem("productcart", JSON.stringify(arrayCart));
    allItems[index] = 1;

    displayCountFivortCarts(index);
  } else {
    selectItem.count = getFavoriteCarts().find((item) => {
      return item.id == index;
    }).count;
    selectItem.count += 1;
    arrayCart = JSON.parse(localStorage.getItem("productcart")).filter(
      (item) => {
        return item.id != index;
      }
    );
    arrayCart = [...arrayCart, selectItem];

    localStorage.setItem("productcart", JSON.stringify(arrayCart));
    displayCountFivortCarts();

    //Show Number Of Carts
  }
  saveProDataToLocalStorage(products);
  loadingDataFromDB();
  showProductsInPage();
}

function saveItemData(id) {
  localStorage.setItem("productsId", id);
  window.location = "deteals.html";
}

this.onunload = function () {};

this.onload = function () {
  let arrObjeect = JSON.parse(localStorage.getItem("productcart"));
  // let dd = JSON.parse(localStorage.getItem("dbProducts"));
  let i = 1;
  for (arr of arrObjeect) {
    allItems[arr.id] = arr.count;
  }
  // for (d of dd) {
  //   d.id = i;
  //   i++;
  // }
  // localStorage.setItem("dbProducts", JSON.stringify(dd));
};
setTimeout(function () {
  // displayCountFivortCarts();
  displayCountFivortCarts();
  // addTocartProduct();
  shoopingBadge.innerHTML =
    Number(shoopingBadge.innerHTML) +
    JSON.parse(localStorage.getItem("productcart")).length;
  shoopingBadge.style.display = "block";
  displayCountFivortCarts();
}, 200);

function editProduct(id) {
  localStorage.setItem("productToedit", id);
  window.location = "editproduct.html";
}
//Fillter By Size

let sizeFilter = document.getElementById("size-filter");

sizeFilter.addEventListener("change", getProductsFilterBySize);

function getProductsFilterBySize(e) {
  let val = e.target.value;
  let allProducts = JSON.parse(localStorage.dbProducts);
  if (val === "all") {
    showProductsInPage(allProducts);
  } else {
    let toShowProducts = allProducts.filter((item) => {
      return item.size === val;
    });
    showProductsInPage(toShowProducts);
  }
}

loadingDataFromDB();

 showProductsInPage();
//  arrayCart = JSON.parse(localStorage.getItem("productcart"));