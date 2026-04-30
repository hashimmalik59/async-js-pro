const productInput = document.querySelector("input");
const main = document.querySelector("main");

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (!response.ok) throw new Error("Products not found");
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data
      .filter((item) => item.price < 50)
      .forEach((productData) => {
        // Element creation
        const productCard = document.createElement("section");
        const productImage = document.createElement("img");
        const productName = document.createElement("h1");
        const productPrice = document.createElement("span");
        const productRating = document.createElement("span");
        const productCategory = document.createElement("span");
        const productDescription = document.createElement("p");

        // Element value from API
        productImage.src = productData.image;
        productName.textContent = `Product Name: ${productData.title}`;
        productPrice.textContent = `Product Price: ${productData.price}$`;
        productRating.textContent = `Product Rating: ${productData.rating.rate}`;
        productCategory.textContent = `Product Category: ${productData.category}`;
        productDescription.textContent = `Product Description: ${productData.description}`;

        // Element styling
        productCard.className =
          "border w-fit h-fit rounded flex flex-col justify-center items-center py-3 px-2";
        productImage.className = "w-50";
        productPrice.className =
          "bg-blue-600 text-white rounded px-2 text-[12px]";
        productDescription.className = "align-center text-[10px]";
        productCategory.className =
          "bg-gray-600 text-white rounded px-2 text-[12px]";

        // Element appending
        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productRating);
        productCard.appendChild(productCategory);
        productCard.appendChild(productDescription);

        main.appendChild(productCard);
      });
  })
  .catch((error) => console.error(`Masla hogaya hai: ${error.message}`));
