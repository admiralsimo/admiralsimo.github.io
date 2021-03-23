var celcius_value;
var fahrenheit_value;
var conversion_type;
converstion_type = prompt('choose the way you want convert these two values:\n1-from celcius to fahrenheit.\n2-from fahrenheit to celcius.\nchoose 1 or 2: ')
if (conversion_type == 1) {
    celcius_value = parseFloat(prompt('Enter the value of celcius that you want to convert: '));
    alert(celcius_value);
    console.log((celcius_value * 9/5) + 32);
}
if (conversion_type == 2) {
    celcius_value = parseFloat(prompt('Enter the value of fahrenheit that you want to convert: '));
    console.log((fahrenheit_value - 32) * 5/9);
}
//(32°F − 32) × 5/9