let iconMenu = document.querySelector(".icon-menu");
let menuTablet = document.querySelector(".js-menu-tablet");
let btnAdd = document.querySelectorAll(".btn-add");
let modal = document.querySelector(".modal");
let btnCancel = document.querySelector(".btn-cancel");
let check = document.querySelectorAll(".check");

let nameNv = document.querySelectorAll(".name-nv-cc");
let closeModalCc = document.querySelector(".close-modal-cc")

function showMenu() {
    menuTablet.classList.add("open");
  }
  function hideMenu() {
    menuTablet.classList.remove("open");
  }
  function showModal() {
    modal.classList.add("open");
  }
  
  function hideModal() {
    modal.classList.remove("open");
  }
  
  function changeColorCheck (e){
    e.target.classList.toggle('change-color-check')
  }
  
  
  iconMenu.addEventListener("click", showMenu);
  menuTablet.addEventListener("click", hideMenu);
 btnCancel.addEventListener("click", hideModal)
  closeModalCc.addEventListener("click", hideModal)
  for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener("click", showModal);
  }
  
  
  
    
  
  
  // chenge color check
  for (let i = 0; i < check.length; i++) {
    check[i].addEventListener("click", changeColorCheck);
  }
  
  
