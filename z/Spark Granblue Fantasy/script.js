function calculateSparks() {
    const currentSparks = parseInt(document.getElementById('currentSparks').value);
    const targetSparks = parseInt(document.getElementById('targetSparks').value);
    const sparksNeeded = targetSparks - currentSparks;

    let resultMessage = '';
    if (sparksNeeded = 0) {
        resultMessage = 'Congratulations! You have enough sparks.';
    } else {
        resultMessage = `You need ${sparksNeeded} more sparks to reach your target.`;
    }

    document.getElementById('result').innerText = resultMessage;
}
