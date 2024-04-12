export default function highlightProducts(event) {
    const targetedCard = event.currentTarget;
    targetedCard.classList.remove('highlight_card');
}
