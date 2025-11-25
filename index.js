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

    const inputLabelA = value === 1 ? unitA : `${unitA}s`;
    const outputLabelB = aToB.toFixed(3) === '1.000' ? unitB : unitBPlural;

    const inputLabelB = value === 1 ? unitB : unitBPlural;
    const outputLabelA = bToA.toFixed(3) === '1.000' ? unitA : `${unitA}s`;

    return `${value} ${inputLabelA} = ${aToB.toFixed(3)} ${outputLabelB} | ${value} ${inputLabelB} = ${bToA.toFixed(3)} ${outputLabelA}`;
}

// --- Specific Conversion Functions ---
function convertLength(value) {
    return generateConversionString(value, CONVERSIONS.length);
}

function convertVolume(value) {
    return generateConversionString(value, CONVERSIONS.volume);
}

function convertMass(value) {
    return generateConversionString(value, CONVERSIONS.mass);
}

// --- DOM Manipulation ---
if (typeof document !== 'undefined') {
  const inputEl = document.getElementById('input-el');
  const lengthEl = document.getElementById('length-el');
  const volumeEl = document.getElementById('volume-el');
  const massEl = document.getElementById('mass-el');

  if (inputEl && lengthEl && volumeEl && massEl) {
    function render() {
      const baseValue = inputEl.value ? Number(inputEl.value) : 0;
      
      lengthEl.textContent = convertLength(baseValue);
      volumeEl.textContent = convertVolume(baseValue);
      massEl.textContent = convertMass(baseValue);
    }

    inputEl.addEventListener('input', render);
    render();
  }
}

// --- Exports for Testing ---
module.exports = {
  convertLength,
  convertVolume,
  convertMass,
};
