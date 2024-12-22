let result = document.getElementById('result');
let noValue = document.getElementById('noValue');
let noUnit = document.getElementById('noUnit');
let button = document.getElementById('converter');
let clear = document.getElementById('reset');

function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}

button.onclick = function() {
    let val = document.getElementById('value').value;
    let unit = document.getElementById('unit').value;
    let ans;

    if (val === '') {
        noValue.innerHTML = "*must provide a value";
        return;
    } else {
        noValue.innerHTML = "";
    }

    val = Number(val);

    if (unit === "celsius") {
        ans = toCelsius(val).toLocaleString(undefined, {
            style: 'unit',
            unit: 'celsius',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    } else if (unit === "fahrenheit") {
        ans = toFahrenheit(val).toLocaleString(undefined, {
            style: 'unit',
            unit: 'fahrenheit',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    } else {
        noUnit.innerHTML = '*must select a unit for conversion';
        return;
    }

    result.innerHTML = ans;
}

clear.onclick = function() {
    document.getElementById('value').value = '';
    document.getElementById('unit').value = '';
    result.innerHTML = '';
    noValue.innerHTML = '';
    noUnit.innerHTML = '';
}







// let celsius  = document.getElementById('celsius');
// let fahrenheit  = document.getElementById('fahrenheit');
// let result  = document.getElementById('result');
// let noValue  = document.getElementById('noValue');
// let noUnit  = document.getElementById('noUnit');
// let button  = document.getElementById('converter');

// function toCelsius(temp) {
//     return (temp - 32) * (5 / 9);
// }
// function toFahrenheit(temp){
//     return temp * 9 / 5 + 32;
// }

// button.onclick = function(){
//     let val = document.getElementById('value').value;
//     let unit = document.getElementById('unit').value;
//     let ans;

//     if(val == ''){
//         noValue.innerHTML = "*must provide a value";
//     }

//     val = Number(val);

//     if(celsius.checked) {
//         ans = toCelsius(val).toLocaleString(undefined, {style:'unit',unit:'celsius',minimumFractionDigits:2, maximumFractionDigits:2})
//     }
//     else if(fahrenheit.checked) {
//         ans = toFahrenheit(val).toLocaleString(undefined, {style:'unit',unit:'celsius',minimumFractionDigits:2, maximumFractionDigits:2})
//     }
//     else{
//         noUnit.innerHETML = '*must select a unit fo conversion'
//     }
//     //display a answer

//     result.innerHTML = ans;
// }
