const metreToFeet = 3.281;
const litreToGallon = 0.264;
const kiloToPound = 2.204;

// Conversion Functions
function convertLength(value) {
    const metresToFeetVal = value * metreToFeet;
    const feetToMetresVal = value / metreToFeet;

    const inputMetreLabel = value === 1 ? 'metre' : 'metres';
    const outputFeetLabel = metresToFeetVal.toFixed(3) === '1.000' ? 'foot' : 'feet';

    const inputFootLabel = value === 1 ? 'foot' : 'feet';
    const outputMetreLabel = feetToMetresVal.toFixed(3) === '1.000' ? 'metre' : 'metres';

    return `${value} ${inputMetreLabel} = ${metresToFeetVal.toFixed(3)} ${outputFeetLabel} | ${value} ${inputFootLabel} = ${feetToMetresVal.toFixed(3)} ${outputMetreLabel}`;
}

function convertVolume(value) {
    const litresToGallonsVal = value * litreToGallon;
    const gallonsToLitresVal = value / litreToGallon;

    const inputLitreLabel = value === 1 ? 'litre' : 'litres';
    const outputGallonLabel = litresToGallonsVal.toFixed(3) === '1.000' ? 'gallon' : 'gallons';

    const inputGallonLabel = value === 1 ? 'gallon' : 'gallons';
    const outputLitreLabel = gallonsToLitresVal.toFixed(3) === '1.000' ? 'litre' : 'litres';

    return `${value} ${inputLitreLabel} = ${litresToGallonsVal.toFixed(3)} ${outputGallonLabel} | ${value} ${inputGallonLabel} = ${gallonsToLitresVal.toFixed(3)} ${outputLitreLabel}`;
}

function convertMass(value) {
    const kilosToPoundsVal = value * kiloToPound;
    const poundsToKilosVal = value / kiloToPound;

    const inputKiloLabel = value === 1 ? 'kilo' : 'kilos';
    const outputPoundLabel = kilosToPoundsVal.toFixed(3) === '1.000' ? 'pound' : 'pounds';

    const inputPoundLabel = value === 1 ? 'pound' : 'pounds';
    const outputKiloLabel = poundsToKilosVal.toFixed(3) === '1.000' ? 'kilo' : 'kilos';

    return `${value} ${inputKiloLabel} = ${kilosToPoundsVal.toFixed(3)} ${outputPoundLabel} | ${value} ${inputPoundLabel} = ${poundsToKilosVal.toFixed(3)} ${outputKiloLabel}`;
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
