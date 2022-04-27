let input = document.querySelector('.over-search-item')
let button = document.querySelector('button')

let user = document.querySelector(".icon-user");
let modalSignin = document.querySelector(".js-modal-signin");
let modalClose = document.querySelectorAll(".js-modal-close");
let btnSignup = document.querySelector(".js-btn-signup")
let btnSignin = document.querySelector(".js-btn-signin")
let modalSignup = document.querySelector(".js-modal-signup")
let iconCart = document.querySelector(".icon-cart")
let modalCart = document.querySelector(".js-modal-cart")
let inputEmail = document.querySelector(".input-email")
let hidden = document.querySelector(".hidden")
let deleteProductCart = document.querySelector(".container-delete-product")
let btnAdd = document.querySelector('.nextBtn')
let btnSubt = document.querySelector('.prevBtn')
// Lấy ra counter
let counter = document.querySelector('#counter');

btnAdd.addEventListener('click', function(){
  counter.innerText = + counter.innerText + 1
  
})

btnSubt.addEventListener('click', function(){
    if(counter.innerText == 0) {
        deleteProductCart.style.display = "block"
        return
    }
 counter.innerText = + counter.innerText - 1
})




function showModalSignin() {
    modalSignin.classList.add("open");
}
function hideModalSignin() {
    modalSignin.classList.remove("open");
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



iconCart.addEventListener("click",showModalCart)
user.addEventListener("click", showModalSignin);

for(let close of modalClose){

    close.addEventListener("click", function(){
        hideModalSignin()
        hideModalSignup()
        hideModaCart()
    });
}

inputEmail.addEventListener("click", function(){
    hidden.style.display = "block"
})


button.addEventListener('click', function(){
    this.parentElement.classList.toggle('show')
    this.previousElementSibling.focus()
})

btnSignup.addEventListener("click",function(){
    hideModalSignin()
    showModalSignup()
})
btnSignin.addEventListener("click",function(){
    hideModalSignup()
    showModalSignin()
  
})