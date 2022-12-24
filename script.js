const weightsEl = document.querySelector('.weights');
const weightEl = weightsEl.querySelector('.weight');
const templateRef = weightEl.cloneNode(true);
weightEl.remove();

const weightsInput = document.querySelector('#numberWeight');
const weightsSubmitBtn = document.querySelector('.submitNumberWeight');
if (!weightsSubmitBtn) {
    throw new Error('Element not found');
}

const submitEl = document.querySelector('.submitNumber');

const explodeStringAsNumers = (input) => input.value.trim()
    .split(',')
    .map((numAsString) => parseInt(numAsString.trim(), 10));

weightsSubmitBtn.addEventListener('click', function() {
    const weights = explodeStringAsNumers(weightsInput).filter((num, i, arr) => arr.indexOf(num, i + 1) === -1);
    
    if (!weights.length) {
        return alert('No weights specified');
    }
    
    if (weights.some((weight) => weight <= 0 || weight > 10)) {
        return alert('Wagi od 1 do 10!');
    }
    
    const map = weights.map((weight, index) => {
        const template = templateRef.cloneNode(true);
        const id = `weight-${index}`;

        const label = template.querySelector('label');
        label.for = id;
        label.textContent = `Podaj swoją ocenę z wagą ${weight}: `;

        const input = template.querySelector('input');
        input.id = id;
        weightsEl.appendChild(template);

        return [weight, input];
    });

    submitEl.addEventListener('click', () => {
        let weightSum = 0;
        const gradeSum = map.reduce((sum, [ weight, input ]) => {
            weightSum += weight;
            return sum + explodeStringAsNumers(input).reduce((sum2, grade) => sum2 + grade * weight, 0);
        }, 0);

        alert(gradeSum / weightSum);
    });
});



