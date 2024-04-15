export default function highlightProducts(event) {
    const targetedCard = event.currentTarget;
    const targetedCardBig = targetedCard.querySelector('.product_card_big');
    targetedCardBig.style.setProperty('opacity', 1);
}
