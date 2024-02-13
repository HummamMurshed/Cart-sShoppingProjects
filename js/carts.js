let containercartnew = document.querySelector(".products");
let cartshoopingBadge = document.querySelector(".badge");
let newproducts = [];

function getProductFromLocalStorage() {
  return localStorage.getItem("productcart");
}

function saveToLocalStorage() {
  localStorage.setItem("productcart", JSON.stringify(newproducts));
}
function showCartsInCartsPage() {
  carts = getProductFromLocalStorage();

  if (carts) {
    newproducts = JSON.parse(carts);
    showProductsInPage();
  }
}

function getProductElement(item) {
  let cradToAdd = `
      <div class="item" style='flex-wrap:wrap;'>
      <img src=${item.image} alt="laptop image" }/>
      
      <div class="description">
        <h2>${item.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <span>Size: ${item.size}</span>
      </div>
      <div class="action">
        <button onclick= "removeFromCarts(${item.id})" class="addtocart">Remove From Cart</button>
        <i style="display:none;" class="far fa-heart favorite"></i>
      </div>
      <div style = 'width: 100%; margin: 15px 1px 2px;font-size: 1.4rem; color: darkgreen; font-weigth: bold'>
         <spn>Count : ${item.count}</span>
      </div>
      
      </div>
      `;

  return cradToAdd;
}
function showProductsInPage() {
  let product = newproducts.map((item) => {
    return getProductElement(item);
  });

  containercartnew.innerHTML = product;
}

showCartsInCartsPage();

function noCartInYourCarts() {
  if (newproducts.length === 0)
    containercartnew.innerHTML = `
    <h1 style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 40px; color: seagreen;'>
    Threas No Carrts In This Page
     </h1>
    `;
}

function removeFromCarts(index) {
  let toremove = newproducts.findIndex((item) => {
    return item.id === index;
  });
  newproducts[toremove].likd = false;
  let loadData = JSON.parse(localStorage.getItem("dbProducts"));
  for (pro of loadData) {
    if (pro.id == newproducts[toremove].id) {
      pro.likd = false;
    }
  }
  saveProDataToLocalStorage(loadData);

  newproducts.splice(toremove, 1);
  saveProDataToLocalStorage(loadData);

  showProductsInPage();
  noCartInYourCarts();
  showBadge();
  saveToLocalStorage();
}

// noCartInYourCarts();
// showBadge();
// function showBadge() {
//   cartshoopingBadge.style.display = "block";
//   cartshoopingBadge.innerHTML = JSON.parse(
//     localStorage.getItem("productcart")
//   ).length;
//   document.querySelector(".heart-icon").display = "none";
// }
