fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then(function (posts) {
    let htmls = posts.map(function (post) {
      return `
                    <div class="img-product img-product-men trousers col l-3 c-6 m-4">
                      <a href="./details.html?id=${post.id}">
                        <div class="img">
                            <img src="${post.image}" alt="" />
                          <div class="title">
                            <div class="product-name">${post.title}</div>
                            <div class="product-price">
                              <span class="product-cost">${post.price}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    `;
    });
    let html = htmls.join(" ");

    document.querySelector(".list-product").innerHTML = html;
  });
