const modalContainer = document.getElementById("modal-container");
const modaloverlay = document .getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");


const displaycart = () => {
    modalContainer.style.display= "block";
    modaloverlay.style.display = "block";
//modal Header
const modalHeader = document.createElement ("div");
const modalclose = document.createElement ("div");
modalclose.innerText="❌"
modalClose.className = "modal-close"
modalHeader. append (modalClose)

modalClose.addEventListener("click", ()=> {
    modalContainer.style.display= "none";
    modaloverlay.style.display= "none";

})

const modalTitle = document.createElement("div");
modalTitle.innerText = "cart";
modalTitle.className = modal-title;
modalHeader.append(modalTitle);


modalContainer.append(modalHeader);
};

cartBtn.addEventListener("click", displaycart);
