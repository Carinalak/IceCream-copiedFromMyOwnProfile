import highlightProducts from './highlightProduct';
import removeHighlightProducts from './removeHighlightProducts';

export default function renderProducts(products) {
    const container = document.querySelector('#productContainer');

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product_card');

        // remove this after styling!!!!!!!!!!
        productCard.classList.add('highlight_card');

        productCard.classList.add(
            index % 2 === 0 ? 'product_card_circle' : 'product_card_square',
        );

        // TODO: aria-label for img?
        const img = document.createElement('div');
        img.classList.add('product_img');
        img.style.setProperty('--bg-img', `url(${product.imgUrl})`);
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
        /*         allIngredients.classList.add('hidden'); */
        allIngredients.innerText = `Ingredients: ${ingredientsInText}`;
        descriptionPlate.appendChild(allIngredients);

        productCard.addEventListener('mouseenter', highlightProducts);
        productCard.addEventListener('touchstart', highlightProducts);
        productCard.addEventListener('mouseleave', removeHighlightProducts);
        productCard.addEventListener('touchend', removeHighlightProducts);

        container.appendChild(productCard);
    });
}
