function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}


const tempInCelsius = 25; 
const tempInFahrenheit = 77; 

console.log(`${tempInCelsius}°C is equal to ${celsiusToFahrenheit(tempInCelsius).toFixed(2)}°F`);
console.log(`${tempInFahrenheit}°F is equal to ${fahrenheitToCelsius(tempInFahrenheit).toFixed(2)}°C`);

