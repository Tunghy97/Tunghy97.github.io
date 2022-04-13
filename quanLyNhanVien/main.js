let iconMenu = document.querySelector('.icon-menu')
let menuTablet = document.querySelector('.js-menu-tablet')
let btnAdd = document.querySelectorAll('.btn-add')
let modal = document.querySelector('.modal')
let btnCancel = document.querySelector('.btn-cancel')



function showMenu (){
menuTablet.classList.add('open')
}
function hideMenu (){
menuTablet.classList.remove('open')
}
function showModal (){
modal.classList.add('open')
}
function hideModal (){
modal.classList.remove('open')
}

iconMenu.addEventListener('click', showMenu)
menuTablet.addEventListener('click', hideMenu)
for(let i = 0; i<btnAdd.length; i++){
    btnAdd[i].addEventListener('click', showModal)
}

btnCancel.addEventListener('click', hideModal)