export default function renderProducts(products) {
    const container = document.querySelector('#productContainer');

    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product_card');

        const img = document.createElement('img');
        img.classList.add('product_img');
        img.src = product.imgUrl;
        img.alt = product.imgAlt;
        productCard.appendChild(img);

        const descriptionPlate = document.createElement('div');
        descriptionPlate.classList.add('description_plate');
        productCard.appendChild(descriptionPlate);

        const name = document.createElement('p');
        name.classList.add('product_title');
        name.innerText = product.name;
        descriptionPlate.appendChild(name);

        const ingredientsInText = product.ingredients.join(', ');

        const allIngredients = document.createElement('p');
        allIngredients.classList.add('ingredients');
        allIngredients.innerText = `Ingredients: ${ingredientsInText}`;
        productCard.appendChild(allIngredients);

        container.appendChild(productCard);
    });
}
