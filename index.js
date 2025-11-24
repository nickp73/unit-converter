const metreToFeet = 3.281;
const litreToGallon = 0.264;
const kiloToPound = 2.204;

// Conversion Functions
function convertLength(value) {
  const metresToFeet = (value * metreToFeet).toFixed(3);
  const feetToMetres = (value / metreToFeet).toFixed(3);
  return `${value} metres = ${metresToFeet} feet | ${value} feet = ${feetToMetres} metres`;
}

function convertVolume(value) {
  const litresToGallons = (value * litreToGallon).toFixed(3);
  const gallonsToLitres = (value / litreToGallon).toFixed(3);
  return `${value} litres = ${litresToGallons} gallons | ${value} gallons = ${gallonsToLitres} litres`;
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
  }
}

// Export functions for testing
module.exports = {
  convertLength,
  convertVolume,
  convertMass,
};
