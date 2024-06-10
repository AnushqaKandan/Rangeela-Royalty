let container = document.querySelector("[ourStore]");
let searchProduct = document.querySelector("[searchProduct]");
let sortingByAmount = document.querySelector("[sorting]");

// items/products
let checkoutItems = JSON.parse(localStorage.getItem("checkout"))
  ? JSON.parse(localStorage.getItem("checkout"))
  : [];

// Current year
document.querySelector("[currentYear]").textContent =
  new Date().getUTCFullYear();
let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem(
      "products",
      JSON.stringify([
        {
          id: 1,
          productName: "Pearl Jhumkas",
          category: "Jhumkas",
          description:
            "Timeless classics that brings a touch of sophistication to any ensemble",
          price: 300.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Jhumka1.jpg",
        },

        {
          id: 2,
          productName: "Red and Gold plated Jhumkas",
          category: "Jhumkas",
          description:
            "Floral inspired, designed with a touch of traditionality in mind. ",
          price: 500.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Jhumka2.jpg",
        },
        {
          id: 3,
          productName: "Peacock Pearl Jhumkas",
          category: "Jhumkas",
          description:
            "These stunning Jhumkas feature an elegant peacock design with intricate gold detailing and pearl accents.",
          price: 500.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Jhumka3.jpg",
        },
        {
          id: 4,
          productName: "Purple Floral Jhumkas",
          category: "Jhumkas",
          description:
            " Enchanting purple jhumkas featuring delicate floral designs, perfect for adding a vibrant touch to any traditional outfit.",
          price: 400.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Jhumka4.webp",
        },

        {
          id: 5,
          productName: "Pink Beaded Tikka",
          category: " Maang Tikkas",
          description:
            "This exquisite tikka features intricate gold detailing, white stones, and pink bead accents, perfect for traditional occasions.",
          price: 1000.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Tikka1.webp",
        },

        {
          id: 6,
          productName: "Kundan Studded Tikka",
          category: "Maang Tikka",
          description:
            "This stylish Tikka is embedded with the finest quality stones and is suitable for any occasion.",
          price: 900.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Tikka2.webp",
        },

        {
          id: 7,
          productName: "Pearly White Tikka",
          category: " Maang Tikka",
          description:
            "Traditional Tikka dating back to the Mughal Empire, serves as the epitome of elegence and history.",
          price: 1500.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Tikka3.jpg",
        },

        {
          id: 8,
          productName: "Radiant Pearl Tikka",
          category: " Maang Tikka",
          description:
            "A stunning gold maang tikka adorned with intricate detailing and a lustrous pearl drop, perfect for adding regal elegance to any traditional ensemble.",
          price: 1800.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Tikka4.webp",
        },

        {
          id: 9,
          productName: "Yellow Glass Bangles",
          category: "Bangles",
          description:
            "These vibrant yellow Indian bangles are adorned with intricate gold detailing and sparkling embellishments, making them a perfect accessory for festive and traditional attire.",
          price: 800.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Bangles1.webp",
        },

        {
          id: 10,
          productName: "Maharani Lilac Bangles",
          category: "Bangles",
          description:
            "Exquisite lilac bangles adorned with gold detailing and delicate hanging ornaments, perfect for adding a touch of elegance to any wedding ensemb",
          price: 1300.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Bangles2.webp",
        },

        {
          id: 11,
          productName: "Golden Red Bangles",
          category: "Bangles",
          description:
            "Elegant red bangles with gold embellishments and charming hanging jhumkas, ideal for adding traditional beauty to any festivity.",
          price: 900.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Bangles3.webp",
        },
        {
          id: 12,
          productName: " Blush Pink Bangles",
          category: "Bangles",
          description:
            " Elegant light pink bangles embellished with delicate gold accents and sparkling stones, perfect for adding a touch of grace and charm to any festive outfit.",
          price: 1500.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Bangles5.webp",
        },
        {
          id: 13,
          productName: "Maharaja Gold-Pearl Temple Set",
          category: "Sets",
          description:
            "Majestic gold necklace and earring set adorned with intricate detailing and pearl embellishments, ideal for adding a touch of traditional elegance to any ceremonial attire.",
          price: 3500.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Set1.jpg",
        },

        {
          id: 14,
          productName: "Ruby Kundan Set",
          category: "Sets",
          description:
            " Exquisite Kundan jewelry set featuring intricate designs with ruby red beads and gold accents, perfect for traditional occasions.",
          price: 2000.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Set2.webp",
        },

        {
          id: 15,
          productName: "Emerald Mughal Set ",
          category: "Sets",
          description:
            " Regal Kundan jewelry set with emerald green stones and pearls, inspired by the opulence of Mughal-era craftsmanship, perfect for adding a touch of historical grandeur to any ensemble.",
          price: 1900.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Set3.jpeg",
        },

        {
          id: 16,
          productName: "Elegant Multicolor Set",
          category: "Sets",
          description:
            "A captivating jewelry set featuring a blend of vibrant colors, intricate gold detailing, and sparkling stones, perfect for adding a touch of traditional elegance to any ensemble.",
          price: 1700.0,
          img_url:
            "https://anushqakandan.github.io/All-images/Javascript/Set4.jpg",
        },
      ])
    );

function displayProducts(products) {
  container.innerHTML = "";
  products.forEach((product) => {
    container.innerHTML += `
        <div class="card">
            <img src="${product.img_url}" class="card-img-top" alt="${
      product.productName
    }" id="cardImg${product.id}">
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text1">${product.description}</p>
                <p class="card-text2">Amount: R ${product.price}</p> 
                </p> <button type='button' class="btn btn-success" onclick='addToCart(${JSON.stringify(
                  product
                )})'>Add to cart</button>      
            </div>
        </div>
        `;
  });
}
displayProducts(products);

// Search functionality
searchProduct.addEventListener("keyup", () => {
    try {
      const searchText = searchProduct.value.toLowerCase();
      let filteredProducts = products.filter((product) =>
        product.productName.toLowerCase().includes(searchText)
      );
      displayProducts(filteredProducts);
      if (filteredProducts.length === 0) {
        throw new Error(`${searchText} product not found`);
      }
    } catch (error) {
      container.innerHTML = `<div class="alert alert-warning">${error.message}</div>`;
    }
  });
  
  // Sorting functionality
  let ascendingOrder = true; // Default sort order
  
  sortingByAmount.addEventListener("click", () => {
    try {
      products.sort((a, b) => (ascendingOrder ? a.price - b.price : b.price - a.price));
      displayProducts(products);
      ascendingOrder = !ascendingOrder; // Toggle sort order
      sortingByAmount.textContent = ascendingOrder ? "Sorted by lowest amount" : "Sorted by highest amount";
    } catch (error) {
      container.innerHTML = `<div class="alert alert-danger">Sorting failed. Please try again.</div>`;
    }
  });
  
  // Add to cart functionality
  function addToCart(product) {
    try {
      checkoutItems.push(product);
      localStorage.setItem("checkout", JSON.stringify(checkoutItems));
      document.querySelector("[counter]").textContent = checkoutItems.length || 0;
      alert("Product added to cart successfully!");
    } catch (error) {
      alert("Unable to add product to cart. Please try again.");
    }
  }

window.onload = () => {
  document.querySelector("[counter]").textContent = checkoutItems.length || 0;
};
