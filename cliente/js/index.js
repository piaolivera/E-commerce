const shopContent = document.getElementById("shopContent");

productos.forEach((products) => {
    const content = document.createElement("div");
    content.innerHTML = `
    <img src="${produtos.img}">
    <h3>${productos.productName} </h3>
    <p>${productos.price} $</p>
    `;
    shopContent.append(content);
    

    
    
});