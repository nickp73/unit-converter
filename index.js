const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

// Conversion Functions
function convertLength(value) {
    const metersToFeet = (value * meterToFeet).toFixed(3);
    const feetToMeters = (value / meterToFeet).toFixed(3);
    return `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
}

function convertVolume(value) {
    const litersToGallons = (value * literToGallon).toFixed(3);
    const gallonsToLiters = (value / literToGallon).toFixed(3);
    return `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
}

function convertMass(value) {
    const kilosToPounds = (value * kiloToPound).toFixed(3);
    const poundsToKilos = (value / kiloToPound).toFixed(3);
    return `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
}

// DOM Manipulation (only if in a browser environment)
if (typeof document !== 'undefined') {
    const inputEl = document.getElementById('input-el');
    const convertBtn = document.getElementById('convert-btn');
    const lengthEl = document.getElementById('length-el');
    const volumeEl = document.getElementById('volume-el');
    const massEl = document.getElementById('mass-el');

    // Only proceed if all required elements are found on the page
    if (inputEl && convertBtn && lengthEl && volumeEl && massEl) {
        function renderConversions() {
            const baseValue = Number(inputEl.value);
            lengthEl.textContent = convertLength(baseValue);
            volumeEl.textContent = convertVolume(baseValue);
            massEl.textContent = convertMass(baseValue);
        }

        convertBtn.addEventListener('click', renderConversions);

        // Initial render for the default value
        renderConversions();
    }
}

// Export functions for testing
module.exports = {
    convertLength,
    convertVolume,
    convertMass
};
