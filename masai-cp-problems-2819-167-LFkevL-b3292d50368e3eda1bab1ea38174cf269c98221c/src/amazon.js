function Listing(name, category, imageUrl, price) {
  this.name = name;
  this.category = category;
  this.imageUrl = imageUrl;
  this.price = price;
  this.sold = false;
}
function getFormData() {
  const form = document.getElementById("form");
  const name = form.querySelector("#name").value;
  const category = form.querySelector("#category").value;
  const imageUrl = form.querySelector("#image").value;
  const price = form.querySelector("#price").value;
  addListing(name, category, imageUrl, price);
  displayProducts();
}
function addListing(name, category, imageUrl, price) {
  const product = new Listing(name, category, imageUrl, price);
  let products = JSON.parse(localStorage.getItem("Products")) || [];
  products.push(product);
  localStorage.setItem("Products", JSON.stringify(products));
}
window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  const form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    getFormData();
  });
  displayProducts();
};
function displayProducts() {
  const products = JSON.parse(localStorage.getItem("Products")) || [];
  const productList = document.getElementById("product-list");
  // Clear previous content
  productList.innerHTML = "";
  // Append each product to the list
  products.forEach(function (product) {
    const listItem = document.createElement("li");
    listItem.textContent = `Product: ${product.name}, Category: ${product.category}, Price: ${product.price}`;
    productList.appendChild(listItem);
  });
}
// donot chnage the export statement
if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}

























