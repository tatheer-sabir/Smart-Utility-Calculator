function get(){
    let no1 = document.getElementById("number1");
    let number1 = Number(no1.value);
    let no2 = document.getElementById("number2");
    let number2 = Number(no2.value);
    if (number1 == ""){
        number1 = 0;
    }
    if (number2 == ""){
        number2 = 0;
    }
    return[number1,number2];
}

function add(){
    let [number1, number2] = get();
    let sum = number1 + number2;
    document.getElementById("output").innerText = `${number1} + ${number2} = ${sum}`;
}

function sub(){
    let [number1, number2] = get();
    let sub = number1 - number2;
    document.getElementById("output").innerHTML = `${number1} - ${number2} = ${sub} <br><p></p> ${number2} - ${number1} = ${number2 - number1}`;
}

function div(){
    let [number1, number2] = get();
    let div = number1 / number2;
    document.getElementById("output").innerHTML = `${number1} / ${number2} = ${div} <br><p></p> ${number2} / ${number1} = ${number2/number1}`;
}

function mul(){
    let [number1, number2] = get();
    let mul = number1 * number2;
    document.getElementById("output").innerText = `${number1} * ${number2} = ${mul}`;
}

function mod(){
    let [number1, number2] = get();
    let mod = number1 % number2;
    document.getElementById("output").innerHTML = `${number1} % ${number2} = ${mod}`
}

function sqrt(){
    let [number1, number2] = get();
    let sqrt = Math.sqrt(number1);
    document.getElementById("output").innerHTML = `√${number1} = ${sqrt} <br><p></p> √${number2} = ${Math.sqrt(number2)}`
}

function power(){
    let [number1, number2] = get();
    let power = number1 ** 2;
    document.getElementById("output").innerHTML = `${number1}<sup>2</sup> = ${power} <br><p></p> ${number2}<sup>2</sup> = ${number2 ** 2}`
}

function divresult(){
    let [number1, number2] = get();
    let div = 1 / number1;
    document.getElementById("output").innerHTML = `1 / ${number1} = ${div} <br><p></p> 1 / ${number2} = ${1 / number2}`
}

function reset(){
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("output").innerText = "";
}

//the scientific  calculator

function pi(){
    document.getElementById("number1").value = "3.141592653589793";
}

function e(){
    document.getElementById("number1").value = "2.718281828459045";
}

function adpower(){
    let [number1, number2] = get();
    document.getElementById("output").innerHTML = `${number1}<sup>${number2}</sup> = ${number1 ** number2} <br><p></p> ${number2}<sup>${number1}</sup> = ${number2 ** number1} <br>`

}

function cuberoot(){
    let [number1, number2] = get();
    document.getElementById("output").innerHTML = `∛${number1} = ${Math.cbrt(number1)} <br><p></p> ∛${number2} = ${Math.sqrt(Math.cbrt(number2))}`

}

function get2(){
    let number1 = document.getElementById("number1").value;
    number1 = Number(number1); 
    return number1;
}

function sin(){
    let number1 = get2();
    let radians = number1 * (Math.PI / 180);
    document.getElementById("output").innerHTML = `sin(${number1}) = ${Math.sin(radians)}`;
}

function cos(){
    let number1 = get2();
    let radians = number1 * (Math.PI / 180);
    document.getElementById("output").innerHTML = `cos(${number1}) = ${Math.cos(radians)}`;
}

function tan(){
    let number1 = get2();
    let radians = number1 * (Math.PI / 180);
    document.getElementById("output").innerHTML = `tan(${number1}) = ${Math.tan(radians)}`;
}

function sininverse() {
    let number1 = get2(); // user enters ratio (-1 to 1)
    if (number1 < -1 || number1 > 1) {
        document.getElementById("output").innerHTML = "Error: Input must be between -1 and 1 for asin";
        return;
    }
    let radians = Math.asin(number1);
    let degrees = radians * (180 / Math.PI);
    document.getElementById("output").innerHTML = `sin<sup>-1</sup>(${number1}) = ${degrees.toFixed(4)}°`;
}

function cosinverse() {
    let number1 = get2(); // user enters ratio (-1 to 1)
    if (number1 < -1 || number1 > 1) {
        document.getElementById("output").innerHTML = "Error: Input must be between -1 and 1 for acos";
        return;
    }
    let radians = Math.acos(number1);
    let degrees = radians * (180 / Math.PI);
    document.getElementById("output").innerHTML = `cos<sup>-1</sup>(${number1}) = ${degrees.toFixed(4)}°`;
}

function taninverse() {
    let number1 = get2(); // user enters any real number
    if (isNaN(number1)) {
        document.getElementById("output").innerHTML = "Please enter a valid number!";
        return;
    }
    let radians = Math.atan(number1);
    let degrees = radians * (180 / Math.PI);
    document.getElementById("output").innerHTML = `tan<sup>-1</sup>(${number1}) = ${degrees.toFixed(4)}°`;
}

function log(){
    let number1 = get2();
    document.getElementById("output").innerHTML = `log(${number1}) = ${Math.log(number1)}`;
}

function log2(){
    let number1 = get2();
    document.getElementById("output").innerHTML = `log<sub>2</sub>(${number1}) = ${Math.log2(number1)}`;
}

function log10(){
    let number1 = get2();
    document.getElementById("output").innerHTML = `log<sub>10</sub>(${number1}) = ${Math.log10(number1)}`;
}

function reset2(){
    document.getElementById("number1").value = "";
    document.getElementById("output").innerHTML = "";
}

function toexchange() {
    let [number1, number2] = get();
    let exchanged = number1 * number2;
    let reverse = number1 / number2;

    document.getElementById("output").innerHTML = `
        ${number1} amount with the ${number2} exchange rate = ${exchanged.toFixed(2)} <br>
        ${number2} amount with the ${number1} exchange rate = ${reverse.toFixed(4)} (Reverse Rate)
    `;
}
