filterSelection("all")
function filterSelection(name){
    let x = document.querySelectorAll('.img-product-men')
    if(name=='all') name = '';
    for(let i = 0; i<x.length; i++){
        removeClass(x[i], "show-img-product");
        if(x[i].className.indexOf(name) > -1) addClass(x[i], "show-img-product")
    }
}

function addClass (element, name){
    let arr1 = element.className.split(" ")
    let arr2 = name.split(" ")
    for(let i = 0; i< arr2.length;i++){
        if(arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    let arr1 = element.className.split(" ")
    let arr2 = name.split(" ")
    for(let i = 0; i<arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ")
}

let btnContainer = document.querySelector(".fillter");
let btns = document.querySelectorAll(".btn-fillter");
for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        // btns[i].classList.add('active')
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}