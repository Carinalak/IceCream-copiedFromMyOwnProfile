export default function removeHighlightProducts(event) {
    const targetedCardBig = event.currentTarget;
    targetedCardBig.style.setProperty('opacity', 0);
}
