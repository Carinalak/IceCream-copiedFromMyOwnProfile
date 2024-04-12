import productsData from './products.json';
import renderProducts from './src/script/renderProducts';
import './style.scss';

const products = productsData;

renderProducts(products);
