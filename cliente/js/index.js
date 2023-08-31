const shopContent = document.getElementById("shopContent");
const cart = []; // este es nuestro carrito. un array vacio

productos.forEach((product) => {
  const content = document.createElement("div");
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p>${product.price} $</p>
  `;
  content.className = "card-products";
  shopContent.appendChild(content);

  const buyButton = document.createElement("button");
  buyButton.innerText = "Comprar";

  content.append(buyButton);

  buyButton.addEventListener("click", ()=>{
    cart.push({ // atraves de un push agregamos al carrito
        id: product.id,
        productName: product.productName,
        price: product.price,
        quanty: product.quanty,
        img: product.img,

    })
    console.log(cart)
  })
});