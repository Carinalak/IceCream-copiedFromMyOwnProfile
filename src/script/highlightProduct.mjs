export default function highlightProducts(event) {
    const targetedCard = event.currentTarget;
    const ingredients = targetedCard.querySelector('.ingredients');
    ingredients.classList.remove('hidden');
    targetedCard.classList.add('highlight_card');
}
