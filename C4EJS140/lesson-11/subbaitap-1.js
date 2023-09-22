document.addEventListener("DOMContentLoaded", function() {
    const productDescriptionElement = document.getElementById("productDescription");

    const queryParams = new URLSearchParams(window.location.search);
    const productJson = queryParams.get("product");
    const product = JSON.parse(productJson);
    const imgUrls = product.img;
    const nameProduct = product.nameProduct;
    const describe = product.describe;
    const price = product.price;
    const discount = product.discount;
    const SKU = product.SKU;
    const category = product.category;
    const tags = product.tags;
    const status = product.status;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const imgElement = document.createElement("img");
    imgElement.src = imgUrls[0];
    imageContainer.appendChild(imgElement);

    const description = document.createElement("div");
    description.style.marginLeft='20vh';

    const nameElement = document.createElement("h1");
    nameElement.textContent = nameProduct;

    const describeElement = document.createElement("p");
    describeElement.textContent = describe;

    const priceElement = document.createElement("p");
    priceElement.textContent = "Price: $" + price;

    const discountElement = document.createElement("p");
    if (discount !== "") {
      discountElement.textContent = "Discount: " + discount + "%";
    }
    const skuElement = document.createElement("p");
    skuElement.textContent = "SKU: " + SKU;

    const categoryElement = document.createElement("p");
    categoryElement.textContent = "Category: " + category;
  
    const tagsElement = document.createElement("p");
    tagsElement.textContent = "Tags: " + tags;
  
    const statusElement = document.createElement("p");
    statusElement.textContent = "Status: " + status + " left in stock";

    const quantity=document.createElement("div");
    quantity.style.width='20%';
    quantity.style.border='1px solid black';
    quantity.style.textAlign='center';
    quantity.style.marginRight='10px';
    const quantityInput = document.createElement("input");
    quantityInput.style.border='none';
    quantityInput.style.textAlign='center';
    quantityInput.type = "number";
    quantityInput.value = 1;
    quantityInput.min = 1;

    const decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", function() {
        if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
    decreaseButton.style.width='25%';
    decreaseButton.style.height='5.8vh';
    decreaseButton.style.border='none';
    decreaseButton.style.textAlign='center';

    const increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", function() {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });
    increaseButton.style.width='25%';
    increaseButton.style.height='5.8vh';
    increaseButton.style.border='none';
    increaseButton.style.textAlign='center';
    
    const addToCartContainer = document.createElement("div");
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", function() {
        const quantity = parseInt(quantityInput.value);
        addToCart(nameProduct, price, quantity);
    });
    addToCartButton.style.width='60%';
    addToCartButton.style.height='5.8vh';
    addToCartButton.style.backgroundColor='black';
    addToCartButton.style.color='white';

    quantity.appendChild(decreaseButton);
    quantity.appendChild(quantityInput);
    quantity.appendChild(increaseButton);

    addToCartContainer.style.display='flex';
    addToCartContainer.appendChild(quantity);
    addToCartContainer.appendChild(addToCartButton);

    function addToCart(productName, price, quantity) {
        alert("Add to cart successfully");
        console.log("Product added to cart:", productName);
        console.log("Price:", price);
        console.log("Quantity:", quantity);
    }

    productDescriptionElement.appendChild(imageContainer);
    description.appendChild(nameElement);
    description.appendChild(describeElement);
    description.appendChild(priceElement);
    description.appendChild(discountElement);
    description.appendChild(skuElement);
    description.appendChild(categoryElement);
    description.appendChild(tagsElement);
    description.appendChild(statusElement);
    description.appendChild(addToCartContainer);
    productDescriptionElement.appendChild(description);
});
  