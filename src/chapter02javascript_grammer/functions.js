var beatles = ['John', 'Paul', 'George', 'Ringe'];

function shout() {
    for (var lengthKey in beatles.length) {
        alert(beatles[lengthKey]);
    }
}

function multiply(num1, num2) {
    return num1 * num2;
}

alert(multiply(10, 2));

function convertToCelsius(temp) {
    return (temp - 32) / 1.8;
}

alert(convertToCelsius(95));//35
alert(convertToCelsius('ninety-five'));//NaN

var number = 7.561;
var round = Math.round(number);
alert(round);//8
var date = new Date();
var today = date.getDate();
alert(today);