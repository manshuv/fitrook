function calculateWeights() {
    const barWeight = 45; // Standard barbell weight
    let totalWeight = document.getElementById('totalWeight').value;
    totalWeight = Number(totalWeight);

    if (totalWeight < barWeight) {
        document.getElementById('output').innerText = 'Total weight must be greater than the bar weight (45 lbs).';
        return;
    }

    let weightToLoad = (totalWeight - barWeight) / 2;
    document.getElementById('output').innerText = `Load ${weightToLoad} lbs on each side of the bar.`;
}
