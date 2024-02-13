let containerProductDeteales = document.querySelector(".products");
let detshoopingBadge = document.querySelector(".badge");
products = JSON.parse(localStorage.getItem("dbProducts"));

setTimeout(function () {
  let btnDeteales = document.querySelector(".action button");
  btnDeteales.innerHTML = "Deteales";
  btnDeteales.onclick = function () {};
  console.log("www");
}, 100);

function getElement(id) {
  for (prod of products) {
    if (prod.id == id) {
      console.log(prod.image);
      return prod;
    }
  }
  return false;
}

function getProductElement(item) {
  let cradToAdd = `
      <div class="item">
      <img src=${item.image} alt="laptop image" }/>
      
      <div class="description">
        <a>${item.title}</a>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <span>Size: ${item.size}</span>
      </div>
      <div class="action">
        <button onclick= "addTocartProduct(${item.id})" class="addtocart">Add To Cart</button>
        <i class="far fa-heart favorite"></i>
      </div>
      </div>
      `;

  return cradToAdd;
}

function getProductID() {
  return localStorage.getItem("productsId");
}

function showDetailes() {
  let id = getProductID();
  console.log(id);
  let item = getElement(id);

  console.log(item);

  containerProductDeteales.innerHTML = getProductElement(item);
}
showDetailes();
