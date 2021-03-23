var celcius_value;
var fahrenheit_value;
var conversion_type;
converstion_type = prompt('choose the way you want convert these two values:\n1-from celcius to fahrenheit.\n2-from fahrenheit to celcius.\nchoose 1 or 2: ')
if (conversion_type == 1) {
    celcius_value = parseFloat(prompt('Enter the value of celcius that you want to convert: '))
    console.log((celcius_value * 9/5) + 32)
}
if (conversion_type == 1) {
    celcius_value = parseFloat(prompt('Enter the value of celcius that you want to convert: '))
    console.log((celcius_value * 9/5) + 32)
}
// this is the rule if you want to convert from celcius to fahrenheit(0°C × 9/5) + 32