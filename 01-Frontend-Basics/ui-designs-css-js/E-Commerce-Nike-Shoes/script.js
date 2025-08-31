const products = [
  {
    title: "BRUTON Trendy Sports Shoes For Men",
    price: 99.99,
    image:
      "https://www.dhresource.com/womens-giannis-zoom-freak-4-all-star-asw/0x0-f3-albu-ry-z-30-ffb59b8a-f56e-439f-8a93-1b308651a0b7.jpg.webp",
  },

  {
    title: "6 ATS basketball-shoes",
    price: 99.99,
    image:
      "https://www.tobys.com/cdn/shop/products/ssph.zone-1685058918-DJ6149-500-A.jpg?v=1685059302",
  },

  {
    title: "BRUTON Trendy Sports Shoes For Men",
    price: 99.99,
    image:
      "https://www.dhresource.com/womens-giannis-zoom-freak-4-all-star-asw/0x0-f3-albu-ry-z-30-ffb59b8a-f56e-439f-8a93-1b308651a0b7.jpg.webp",
  },
  {
    title: "basketball-shoes",
    price: 99.99,
    image:
      "https://www.jiomart.com/images/product/original/rvnwu5aqz8/bruton-trendy-sports-shoes-for-men-blue-product-images-rvnwu5aqz8-0-202209021248.jpg?im=Resize=(330,410)",
  },
  {
    title: "basketball-shoes",
    price: 99.99,
    image:
      "https://www.dhresource.com/womens-giannis-zoom-freak-4-all-star-asw/0x0-f3-albu-ry-z-30-ffb59b8a-f56e-439f-8a93-1b308651a0b7.jpg.webp",
  },
  {
    title: "Hiking Sports Shoes For Men",
    price: 99.99,
    image: "images/running-shoes.jpg",
  },
  {
    title: "Sports Shoes For Men",
    price: 99.99,
    image:
      "https://www.tobys.com/cdn/shop/products/ssph.zone-1685058918-DJ6149-500-A.jpg?v=1685059302",
  },
  {
    title: "basketball-shoes",
    price: 99.99,
    image: "images/running-shoes.jpg",
  },
];

const productsSection = document.querySelector(".products");

// Populate product cards
products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.title;
  productImage.classList.add("product-image");

  const productTitle = document.createElement("h3");
  productTitle.classList.add("product-title");
  productTitle.textContent = product.title;

  const productPrice = document.createElement("p");
  productPrice.classList.add("product-price");
  productPrice.textContent = `$${product.price.toFixed(2)}`;

  productCard.appendChild(productImage);
  productCard.appendChild(productTitle);
  productCard.appendChild(productPrice);

  productsSection.appendChild(productCard);
});
