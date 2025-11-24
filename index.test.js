/**
 * @jest-environment jsdom
 */

const { convertLength, convertVolume, convertMass } = require('./index');
const fs = require('fs');
const path = require('path');

// Unit Tests for the conversion logic
describe('Unit Tests', () => {
  test('converts 20 metres and feet correctly', () => {
    const expected = '20 metres = 65.620 feet | 20 feet = 6.096 metres';
    expect(convertLength(20)).toBe(expected);
  });

  test('converts 20 litres and gallons correctly', () => {
    const expected = '20 litres = 5.280 gallons | 20 gallons = 75.758 litres';
    expect(convertVolume(20)).toBe(expected);
  });

  test('converts 20 kilograms and pounds correctly', () => {
    const expected = '20 kilos = 44.080 pounds | 20 pounds = 9.074 kilos';
    expect(convertMass(20)).toBe(expected);
  });
});

// Integration Test for the DOM interaction
describe('Integration Tests', () => {
  beforeEach(() => {
    // Load the HTML file's content into JSDOM before each test
    const html = fs.readFileSync(
      path.resolve(__dirname, './index.html'),
      'utf8'
    );
    document.body.innerHTML = html;
    // Isolate modules to ensure a fresh script runs for each test
    jest.isolateModules(() => {
      require('./index.js');
    });
  });

  test('should start with empty input and result fields', () => {
    const inputEl = document.getElementById('input-el');
    const lengthEl = document.getElementById('length-el');
    const volumeEl = document.getElementById('volume-el');
    const massEl = document.getElementById('mass-el');

    expect(inputEl.value).toBe('');
    expect(lengthEl.textContent).toBe('');
    expect(volumeEl.textContent).toBe('');
    expect(massEl.textContent).toBe('');
  });

  test('should update conversion results when the convert button is clicked', () => {
    const convertBtn = document.getElementById('convert-btn');
    const inputEl = document.getElementById('input-el');
    const lengthEl = document.getElementById('length-el');
    const volumeEl = document.getElementById('volume-el');
    const massEl = document.getElementById('mass-el');

    inputEl.value = '10';
    convertBtn.click();

    // Assertions with corrected values
    expect(lengthEl.textContent).toBe(
      '10 metres = 32.810 feet | 10 feet = 3.048 metres'
    );
    expect(volumeEl.textContent).toBe(
      '10 litres = 2.640 gallons | 10 gallons = 37.879 litres'
    );
    expect(massEl.textContent).toBe(
      '10 kilos = 22.040 pounds | 10 pounds = 4.537 kilos'
    );
  });
});
