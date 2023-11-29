// Project: digitalwellbeing.org
// File: result.js
// Referenced from: result.html

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the total score from local storage
    const totalScore = localStorage.getItem('digitalWellBeingScore');

    // Display the result
    displayResult(totalScore);
});

function displayResult(score) {
    const resultContainer = document.getElementById('resultContainer');
    const resultContainer2 = document.getElementById('resultContainer2');
    const progressBar = document.getElementById('resultProgressBar');

    // Ensure the score is within the valid range [0, 41]
    const normalizedScore = Math.min(Math.max(score, 0), 41);

    // Update the progress bar value
    progressBar.value = normalizedScore;

    // Display different messages based on score ranges
    let resultMessage = '';
    if (normalizedScore < 10) {
        resultMessage = 'Your digital well-being is very good!';
    } else if (normalizedScore < 30) {
        resultMessage = 'You digital well-being is decent but there is always room to improve.';
    } else {
        resultMessage = 'Your digital well-being needs improvement. Consider making some positive changes.';
    }

    // Display the result message
    resultContainer.innerHTML = `<p style = "padding: 0; margin: 0;">Your total score is: ${normalizedScore}</p>`;
    resultContainer2.innerHTML = `<p style = "padding: 0; margin: 0;">${resultMessage}</p>`;
}