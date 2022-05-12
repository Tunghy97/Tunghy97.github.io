let input = document.querySelector(".over-search-item");
let button = document.querySelector("button");
let productCost = document.querySelectorAll(".product-cost");
let productDiscount = document.querySelectorAll(".product-discount");
let user = document.querySelector(".icon-user");
let header = document.querySelector(".header");
let home = document.querySelector("#doan")
let modalSignin = document.querySelector(".js-modal-signin");
let modalClose = document.querySelectorAll(".js-modal-close");
let modalMenu = document.querySelector(".modal-menu")
let navItems = document.querySelector(".nav-items")
let btnSignup = document.querySelector(".js-btn-signup");
let btnSignin = document.querySelector(".js-btn-signin");
let modalSignup = document.querySelector(".js-modal-signup");
let iconCart = document.querySelector(".icon-cart");
let modalCart = document.querySelector(".js-modal-cart");
let inputEmail = document.querySelector(".input-email");
let hidden = document.querySelector(".hidden");
var iconMobileMenu = document.querySelector(".mobile-menu");
let deleteProductCart = document.querySelector(".container-delete-product");
let btnAdd = document.querySelector(".nextBtn");
let btnSubt = document.querySelector(".prevBtn");
// Lấy ra counter
let counter = document.querySelector(".counter");

let productName = document.querySelectorAll(".product-name")
let productPrice = document.querySelectorAll(".product-price")
let productSize = document.querySelectorAll(".size-prosuct-cart")
let imgProduct = document.querySelectorAll(".img-product .img a")
let listItemCart = document.querySelector(".list-item-cart")
let btnAddCarts = document.querySelectorAll(".btn-add-to-cart")
function createId() {
  return Math.floor(Math.random() * 1000);
}
let localKey = "listProduct"
let dataString = localStorage.getItem(localKey)
let listProduct;
if(dataString){
  listProduct = JSON.parse(dataString);
}else{
  listProduct = [];
}

function renderCart(arr){
  listItemCart.innerHTML = "";
  if(arr.length == 0){
    listItemCart.innerHTML = "không có sản phẩm nào trong giỏ hàng";
    localStorage.removeItem(localKey)
    return
  }
  let product = "";
  for (let i = 0; i < arr.length; i++) {
    let t = arr[i];
    product +=`
    <div class="item-cart row mg-top-10">
              <div class="col l-4 m-4 c-6">
                <div class="image-product-cart">
                  ${t.img}
                </div>
              </div>
              <div class="col l-8 m-8 c-6">
                <div class="over-info-cart">
                  <div class="name-product-cart">
                    ${t.name}
                  </div>
                  <div class="parame">
                    <div class="price-product-cart mg-top-10">
                    <span class="product-cost">
                      ${t.cost}
                    </span>
                    <span class="product-discount">
                      ${t.discount}
                    </span>
                    </div>
                    <div class="size-prosuct-cart mg-top-10">
                      ${t.size}
                    </div>
                    <div class="quantity mg-top-10">
                      <div class="btn-container">
                        <div class="btn counterBtn prevBtn">-</div>
                        <div class="counter" style="color: #333333">1</div>
                        <div class="btn counterBtn nextBtn">+</div>
                      </div>
                      <div class="container-delete-product">
                        <i class="bx bxs-coffee-togo" onclick = "deleteProduct(${t.id})"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `;
  }
  listItemCart.innerHTML = product;
}
renderCart(listProduct)

for(let i=0; i<btnAddCarts.length; i++){
  btnAddCarts[i].addEventListener("click", function(e){
    // console.log(productDiscount.textContent)
    let newProduct ={
      id: createId(),
      img: imgProduct[i].innerHTML,
      name: productName[i].innerText,
      cost: productCost[i].innerHTML,
      discount: productDiscount[i].innerHTML,
      size: productSize[i].innerHTML
    };
    listProduct.push(newProduct);
    renderCart(listProduct);
    localStorage.setItem(localKey, JSON.stringify(listProduct))
  });
}

function deleteProduct(id) {
  for (let i = 0; i < listProduct.length; i++) {
    if (listProduct[i].id == id) {
      listProduct.splice(i, 1);
    }
  }
  renderCart(listProduct);
}

// quantity
btnAdd.addEventListener("click", function () {
  alert("cộng")
  counter.innerText = +counter.innerText + 1;
});

btnSubt.addEventListener("click", function () {
  if (counter.innerText == 0) {
    return;
  }
  counter.innerText = +counter.innerText - 1;
});




function showModalSignin() {
  modalSignin.classList.add("open");
}
function hideModalSignin() {
    modalSignin.classList.remove("open");
}
function showModalMenu() {
  modalMenu.classList.toggle("open");
}

function hideModalSignup() {
  modalSignup.classList.remove("open");
}
function showModalSignup() {
  modalSignup.classList.add("open");
}
function hideModaCart() {
  modalCart.classList.remove("open");
}
function showModalCart() {
  modalCart.classList.add("open");
}

iconMobileMenu.addEventListener("click", showModalMenu)
modalMenu.addEventListener("click", function(e){
  if(e.target == e.currentTarget){
    showModalMenu()
  }
})
  

iconCart.addEventListener("click", showModalCart);
user.addEventListener("click", showModalSignin);

for (let close of modalClose) {
  close.addEventListener("click", function () {
    hideModalSignin();
    hideModalSignup();
    hideModaCart();
  });
}

inputEmail.addEventListener("click", function () {
  hidden.style.display = "block";
});

button.addEventListener("click", function () {
  this.parentElement.classList.toggle("show-input");
  this.previousElementSibling.focus();
});

btnSignup.addEventListener("click", function () {
  hideModalSignin();
  showModalSignup();
});
btnSignin.addEventListener("click", function () {
  hideModalSignup();
  showModalSignin();
});



// window.addEventListener("scroll", function () {
//   var x = pageYOffset;
//   if (x > 80) {
//     header.classList.add("changcolor");
//   } else {
//     header.classList.remove("changcolor");
//   }
// });