let btnAddCart = document.querySelector(".add-cart")
btnAddCart.addEventListener("click", function(e){
    // console.log(productDiscount.textContent)
    let newProduct ={
      id: createId(),
      img: imgProduct.innerHTML,
      name: productName.innerText,
      cost: productCost.innerHTML,
      discount: productDiscount.innerHTML,
      size: productSize.innerHTML
    };
    listProduct.push(newProduct);
    renderCart(listProduct);
  
  });