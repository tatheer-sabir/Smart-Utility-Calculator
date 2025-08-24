function clear1(){
    document.getElementById("input1").value = "";
    document.getElementById("output1").innerText = "";
}

function clear2(){
    document.getElementById("input2").value = "";
    document.getElementById("output2").innerText = "";
}

function toferen(){
    let number1 = document.getElementById("input1").value;
    number1 = Number(number1);
    let fahrenheit = (number1 * 9 / 5) + 32;
    document.getElementById("output1").innerHTML = `${number1}°C = ${fahrenheit.toFixed(2)}°F`;
}

function tocel(){
    let number1 = document.getElementById("input2").value;
    number1 = Number(number1);
    let celsius = (number1 - 32) * 5 / 9;
    document.getElementById("output2").innerHTML = `${number1}°F = ${celsius.toFixed(2)}°C`;
}

function topound() {
    let number1 = document.getElementById("input1").value;
    number1 = Number(number1);
    let pounds = number1 * 2.20462;
    document.getElementById("output1").innerHTML = `${number1} KG = ${pounds.toFixed(2)} Pounds`;
}

function tokg() {
    let number1 = document.getElementById("input2").value;
    number1 = Number(number1);
    let kg = number1 / 2.20462;
    document.getElementById("output2").innerHTML = `${number1} Pounds = ${kg.toFixed(2)} KG`;
}

function tom() {
    let number1 = document.getElementById("input1").value;
    number1 = Number(number1);
    let meters = number1 * 1000;
    document.getElementById("output1").innerHTML = `${number1} KM = ${meters.toFixed(2)} Meters`;
}

function tokm() {
    let number1 = document.getElementById("input2").value;
    number1 = Number(number1);
    let kilometers = number1 / 1000;
    document.getElementById("output2").innerHTML = `${number1} Meters = ${kilometers.toFixed(2)} KM`;
}

function clear1() {
    document.getElementById("input1").value = "";
    document.getElementById("output1").innerHTML = "";
}

function clear2() {
    document.getElementById("input2").value = "";
    document.getElementById("output2").innerHTML = "";
}
