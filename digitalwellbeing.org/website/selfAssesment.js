// Project: digitalwellbeing.org
// File: script.js
// Referenced from: selfassesment.html

document.addEventListener('DOMContentLoaded', function() {
    
});

function calculateScore() {
    // Check if all questions are answered
    const allQuestionsAnswered = document.querySelectorAll('input[type="radio"]:checked').length === 9;

    if (!allQuestionsAnswered) {
        alert('Please answer all questions before submitting.');
        return;
    }

    // Code for calculating the score
    const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
    const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
    const q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);
    const q5 = parseInt(document.querySelector('input[name="q5"]:checked').value);
    const q6 = parseInt(document.querySelector('input[name="q6"]:checked').value);
    const q7 = parseInt(document.querySelector('input[name="q7"]:checked').value);
    const q8 = parseInt(document.querySelector('input[name="q8"]:checked').value);
    const q9 = parseInt(document.querySelector('input[name="q9"]:checked').value);

    // Get the scalar value from the slider
    const scalarValue = parseInt(document.getElementById('scalarValue').value) || 0;

    const totalScore = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + scalarValue;

    // Save the total score in local storage
    localStorage.setItem('digitalWellBeingScore', totalScore);

    // Redirect to result.html
    window.location.href = 'result.html';
}

function resetForm() {
    // Reset all radio button selections
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => button.checked = false);

    // Reset the slider input and its display
    const slider = document.getElementById('scalarValue');
    slider.value = 0; // Set a default value
    updateSliderValue(slider.value);
}

function updateSliderValue(value) {
    // Display the current value of the slider
    document.getElementById('scalarValueDisplay').innerText = value;
}