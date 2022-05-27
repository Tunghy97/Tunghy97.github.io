let locationDetail = location.href.split("=");
let idProduct = locationDetail[1];
console.log(idProduct)

let detailProduct = document.querySelector(".detail-product");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((posts) => {
    let detail = posts.filter((post) => {
      if (post.id == idProduct) {
        detailProduct.innerHTML = `
            <div class="col l-6 m-8 c-12">
<div class="img-product container-img-detail">
  <div class="img">
   <img
        src="${post.image}"
        alt=""
    />
  </div>
</div>
</div>


<div class="col l-6 m-4 c-12">
<div
class="product-name name-detail-product mg-top-60"
style="font-weight: bold"
>
${post.title}
</div>
<div class="product-price price-detail-product mg-top-30">
<span class="product-cost" style="color: tomato;"> ${post.price} </span>

</div>

<div class="Description mg-top-30">
${post.description}
</div>

</div>
            `;
      }
    });
  });
