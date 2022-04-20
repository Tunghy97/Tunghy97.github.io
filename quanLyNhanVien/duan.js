let iconMenu = document.querySelector(".icon-menu");
let menuTablet = document.querySelector(".js-menu-tablet");

let modal = document.querySelector(".modal");
let btnCancel = document.querySelector(".btn-cancel");

let btnAddProject = document.querySelectorAll(".btn-add-project");

let closeModalCc = document.querySelector(".close-modal-cc");

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

iconMenu.addEventListener("click", showMenu);
menuTablet.addEventListener("click", hideMenu);

closeModalCc.addEventListener("click", hideModal);

for (let i = 0; i < btnAddProject.length; i++) {
  btnAddProject[i].addEventListener("click", showModal);
}

btnCancel.addEventListener("click", hideModal);
