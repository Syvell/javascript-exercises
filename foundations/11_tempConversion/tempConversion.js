const convertToCelsius = function(temp) {
  const conversionFormula = (temp - 32) * 5 / 9;
  return +conversionFormula.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  const conversionFormula = (temp * 9) / 5 + 32; 
  return +conversionFormula.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
