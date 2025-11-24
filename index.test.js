const { convertLength, convertVolume, convertMass } = require('./index');

// Test for Length Conversion
test('converts 20 meters and feet correctly', () => {
    const expected = "20 meters = 65.620 feet | 20 feet = 6.096 meters";
    expect(convertLength(20)).toBe(expected);
});

// Test for Volume Conversion
test('converts 20 liters and gallons correctly', () => {
    const expected = "20 liters = 5.280 gallons | 20 gallons = 75.758 liters";
    expect(convertVolume(20)).toBe(expected);
});

// Test for Mass Conversion
test('converts 20 kilograms and pounds correctly', () => {
    const expected = "20 kilos = 44.080 pounds | 20 pounds = 9.074 kilos";
    expect(convertMass(20)).toBe(expected);
});
