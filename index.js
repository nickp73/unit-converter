// --- Configuration ---
const CONVERSIONS = {
    length: { factor: 3.281, unitA: 'metre', unitB: 'foot', unitBPlural: 'feet' },
    volume: { factor: 0.264, unitA: 'litre', unitB: 'gallon', unitBPlural: 'gallons' },
    mass: { factor: 2.204, unitA: 'kilo', unitB: 'pound', unitBPlural: 'pounds' }
};

// --- Generic Conversion Logic ---
function generateConversionString(value, config) {
    const { factor, unitA, unitB, unitBPlural } = config;

    const aToB = value * factor;
    const bToA = value / factor;

    // Determine labels for the first half of the string (e.g., "1 metre = 3.281 feet")
    const inputLabelA = value === 1 ? unitA : `${unitA}s`;
    const outputLabelB = aToB.toFixed(3) === '1.000' ? unitB : unitBPlural;

    // Determine labels for the second half of the string (e.g., "1 foot = 0.305 metres")
    const inputLabelB = value === 1 ? unitB : unitBPlural;
    const outputLabelA = bToA.toFixed(3) === '1.000' ? unitA : `${unitA}s`;

    return `${value} ${inputLabelA} = ${aToB.toFixed(3)} ${outputLabelB} | ${value} ${inputLabelB} = ${bToA.toFixed(3)} ${outputLabelA}`;
}

// --- Specific Conversion Functions (now simplified) ---
function convertLength(value) {
    return generateConversionString(value, CONVERSIONS.length);
}

function convertVolume(value) {
    return generateConversionString(value, CONVERSIONS.volume);
}

function convertMass(value) {
    return generateConversionString(value, CONVERSIONS.mass);
}

// --- DOM Manipulation (no changes needed here) ---
if (typeof document !== 'undefined') {
  const inputEl = document.getElementById('input-el');
  const lengthEl = document.getElementById('length-el');
  const volumeEl = document.getElementById('volume-el');
  const massEl = document.getElementById('mass-el');

  if (inputEl && lengthEl && volumeEl && massEl) {
    function renderConversions() {
      const baseValue = inputEl.value ? Number(inputEl.value) : 0;
      lengthEl.textContent = convertLength(baseValue);
      volumeEl.textContent = convertVolume(baseValue);
      massEl.textContent = convertMass(baseValue);
    }

    inputEl.addEventListener('input', renderConversions);
    renderConversions();
  }
}

// --- Exports for Testing ---
module.exports = {
  convertLength,
  convertVolume,
  convertMass,
};
