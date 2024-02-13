//Variabels
let shortshoopingBadge = document.querySelector(".badge");
let showcartProcductContainer = document.querySelector(".carts-product");
// let seachFillter = document.querySelector(".search-fillter");

//Function
function getShowDataFromLocalStorage(fileName = "productcart") {
  return JSON.parse(localStorage.getItem(fileName));
}
function showBadge() {
  setTimeout(function () {
    shortshoopingBadge.style.display = "block";
    shortshoopingBadge.innerHTML =
      +shortshoopingBadge.innerHTML +
      +JSON.parse(localStorage.getItem("productcart")).length;
  }, 200);
}

shortshoopingBadge.onclick = function () {
  // cartProcductContainer.classList.add("displayBlock");
  if (showcartProcductContainer.firstElementChild.innerHTML != "") {
    if (showcartProcductContainer.style.display == "block") {
      showcartProcductContainer.style.display = "none";
      //   seachFillter.style.zIndex = "";
    } else {
      showcartProcductContainer.style.display = "block";
      //   seachFillter.style.zIndex = "-1";
    }
  }
};
function displayCountFivortCarts() {
  //reset cart fivort
  showcartProcductContainer.firstElementChild.innerHTML = "";

  let tempArr = getShowDataFromLocalStorage();
  tempArr.forEach((element) => {
    showcartProcductContainer.firstElementChild.innerHTML += `<p>${element.title} ${element.count} </p>`;
  });
  localStorage.setItem("productcart", JSON.stringify(tempArr));
}
setTimeout(() => {
  displayCountFivortCarts();
}, 200);

showBadge();
