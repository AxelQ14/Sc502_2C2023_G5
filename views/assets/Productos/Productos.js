const products = [
    {
        name: "Rosa",
        price: 10.99,
        description: "Hermosa rosa de color rojo.",
        image: "rose.jpg"
    },
    {
        name: "Lirio",
        price: 8.99,
        description: "Elegante lirio blanco.",
        image: "lily.jpg"
    },
    // Agrega más productos según sea necesario
];

// Obtén la referencia al elemento div donde se mostrarán los productos
const productList = document.getElementById("product-list");

// Recorre el array de productos y crea elementos HTML para mostrarlos
products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const nameElement = document.createElement("h2");
    nameElement.textContent = product.name;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Precio: $${product.price}`;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = product.description;

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;

    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
    productElement.appendChild(descriptionElement);
    productElement.appendChild(imageElement);

    productList.appendChild(productElement);
});