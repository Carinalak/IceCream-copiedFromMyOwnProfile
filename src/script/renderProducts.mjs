import highlightProducts from './highlightProduct';
import removeHighlightProducts from './removeHighlightProducts';

export default function renderProducts(products) {
    const container = document.querySelector('#productContainer');

    products.forEach((product, index) => {
        const productCard = document.createElement('article');
        productCard.classList.add('product_card');
        productCard.classList.add(
            index % 2 === 0 ? 'product_card_circle' : 'product_card_square',
        );
        productCard.setAttribute('tabindex', '0');
        productCard.setAttribute('aria-label', product.name);

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

        productCard.addEventListener('mouseenter', highlightProducts);
        productCard.addEventListener('touchstart', highlightProducts);
        productCard.addEventListener('focus', highlightProducts);

        const productCardBig = document.createElement('article');
        productCardBig.classList.add('product_card_big');
        productCardBig.classList.add(
            index % 2 === 0
                ? 'product_card_circle_big'
                : 'product_card_square_big',
        );
        productCardBig.setAttribute('tabindex', '0');
        productCardBig.setAttribute('aria-label', product.ingredients);

        const imgBig = document.createElement('div');
        imgBig.classList.add('product_img_big');
        imgBig.style.setProperty('--bg-img', `url(${product.imgUrl})`);

        productCardBig.appendChild(imgBig);

        const descriptionPlateBig = document.createElement('div');
        descriptionPlateBig.classList.add('description_plate_big');

        productCardBig.appendChild(descriptionPlateBig);

        const nameBig = document.createElement('p');
        nameBig.classList.add('product_title_big');
        nameBig.innerText = product.name;

        descriptionPlateBig.appendChild(nameBig);

        const ingredientsInText = product.ingredients.join(', ');

        const allIngredientsBig = document.createElement('p');
        allIngredientsBig.classList.add('ingredients');
        allIngredientsBig.innerText = `Ingredients: ${ingredientsInText}`;
        allIngredientsBig.setAttribute('id', `ingredients-${index}`);

        nameBig.setAttribute('aria-describedby', `ingredients-${index}`);

        descriptionPlateBig.appendChild(allIngredientsBig);

        productCardBig.addEventListener('mouseleave', removeHighlightProducts);
        productCardBig.addEventListener('touchend', removeHighlightProducts);
        productCardBig.addEventListener('focus', removeHighlightProducts);

        productCard.appendChild(productCardBig);
        container.appendChild(productCard);
    });
}
