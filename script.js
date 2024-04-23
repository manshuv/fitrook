function calculateWeights() {
    const barWeight = 45; // Standard barbell weight
    let totalWeight = document.getElementById('totalWeight').value;
    totalWeight = Number(totalWeight);

    if (totalWeight < barWeight) {
        document.getElementById('output').innerText = 'Total weight must be at least 45 lbs (the weight of the bar).';
        return;
    }

    let weightToLoad = (totalWeight - barWeight) / 2;

    if (weightToLoad < 0) {
        document.getElementById('output').innerText = 'Please enter a weight greater than the bar weight (45 lbs).';
    } else {
        document.getElementById('output').innerText = `Load ${weightToLoad} lbs on each side of the bar.`;
        calculatePlates(weightToLoad);
    }
}

function calculatePlates(weightToLoad) {
    const plates = [45, 35, 25, 15, 10, 5, 2.5];
    let remainingWeight = weightToLoad;
    let platesToLoad = [];

    for (let plate of plates) {
        while (remainingWeight >= plate) {
            platesToLoad.push(plate);
            remainingWeight -= plate;
        }
    }

    // Check for remaining weight that cannot be exactly matched
    if (remainingWeight > 0) {
        document.getElementById('output').innerText += `\nCannot load exactly ${weightToLoad} lbs with available plates. Closest possible is ${weightToLoad - remainingWeight} lbs.`;
    }

    document.getElementById('output').innerText += `\nLoad the following plates on each side: ${platesToLoad.join(' lbs, ')} lbs.`;
}