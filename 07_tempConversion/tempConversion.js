const convertToCelsius = function(temperature) {
  let convertedTemp = (temperature - 32) * (5 / 9);

  if (Number.isInteger(convertedTemp)) {
    return convertedTemp
  } else {
    return parseFloat(convertedTemp.toFixed(1));
  }
};

const convertToFahrenheit = function(temperature) {
  let convertedTemp = (temperature * 9 / 5) + 32;
  
  if (Number.isInteger(convertedTemp)) {
    return convertedTemp
  } else {
    return parseFloat(convertedTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
