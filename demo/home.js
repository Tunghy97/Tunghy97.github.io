let input = document.querySelector(".over-search-item");
let button = document.querySelector("button");

let user = document.querySelector(".icon-user");
let header = document.querySelector(".header");

let modalSignin = document.querySelector(".js-modal-signin");
let modalClose = document.querySelectorAll(".js-modal-close");
let modalMenu = document.querySelector(".modal-menu")
let btnSignup = document.querySelector(".js-btn-signup");
let btnSignin = document.querySelector(".js-btn-signin");
let modalSignup = document.querySelector(".js-modal-signup");
let iconCart = document.querySelector(".icon-cart");
let modalCart = document.querySelector(".js-modal-cart");
let inputEmail = document.querySelector(".input-email");
let hidden = document.querySelector(".hidden");
var mobileMenu = document.querySelector(".mobile-menu");
let deleteProductCart = document.querySelector(".container-delete-product");
let btnAdd = document.querySelector(".nextBtn");
let btnSubt = document.querySelector(".prevBtn");
// Lấy ra counter
let counter = document.querySelector("#counter");

// quantity
btnAdd.addEventListener("click", function () {
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
  modalMenu.classList.add("open");
}
function hideModalMenu() {
  modalMenu.classList.remove("open");
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

mobileMenu.addEventListener("click", showModalMenu)
modalMenu.addEventListener("click", hideModalMenu)

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

window.addEventListener("scroll", function () {
  var x = pageYOffset;
  if (x > 80) {
    header.classList.add("changcolor");
  } else {
    header.classList.remove("changcolor");
  }
});
