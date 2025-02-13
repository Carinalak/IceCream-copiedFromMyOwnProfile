import animationOrangeBall from './src/script/orangeBall';
import animationPinkBall from './src/script/pinkBall';
import animationIceCream from './src/script/animationIceCream';
import printContactUs from './src/script/input';
import cookieBar from './src/script/cookies';
import productsData from './products.json';
import renderProducts from './src/script/renderProducts';
import './style.scss';

const products = productsData;

animationPinkBall();

animationOrangeBall();

animationIceCream();

renderProducts(products);

printContactUs();

cookieBar();
