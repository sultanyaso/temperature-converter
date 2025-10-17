const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./converter');

function test(description, actual, expected) {
  if (Math.abs(actual - expected) < 0.0001) {
    console.log(`✅ Test Passed: ${description}`);
  } else {
    console.error(`❌ Test Failed: ${description} (Expected ${expected}, got ${actual})`);
    process.exit(1); // ensures CI fails
  }
}

test("0°C → 32°F", celsiusToFahrenheit(0), 32);
test("100°C → 212°F", celsiusToFahrenheit(100), 212);
test("212°F → 100°C", fahrenheitToCelsius(212), 100);
