export default function highlightProducts(event) {
    const targetedCard = event.currentTarget;
    const ingredients = targetedCard.querySelector('.ingredients');
    ingredients.classList.add('hidden');
    targetedCard.classList.remove('highlight_card');
}
