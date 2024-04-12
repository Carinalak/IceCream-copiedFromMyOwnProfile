export default function highlightProducts(event) {
    const targetedCard = event.currentTarget;
    targetedCard.classList.add('highlight_card');
}
