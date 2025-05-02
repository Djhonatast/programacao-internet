let numero1 = document.querySelector ("#numero1")
let numero2 = document.querySelector ("#numero2")
let numero3 = document.querySelector ("#numero3")
let medarit = document.querySelector ("#medarit")
let medpond = document.querySelector ("#medpond")
let somamed = document.querySelector ("#somamed")
let meddamed = document.querySelector ("#meddamed")
let btcalcular = document.querySelector ("#btcalcular")

function aritmetica(){
num1 = Number(numero1.value);
num2 = Number(numero2.value);
num3 = Number(numero3.value);
medarit.textContent = ( ((num1 + num2 + num3) / 3) );
}

function ponderada(){
    num4 = Number(numero1.value);
    num5 = Number(numero2.value);
    num6 = Number(numero3.value);
    medpond.textContent = ( (((num4 * 2) + (num5 * 3) + (num6 * 5))/ 10) );
}

function soma(){
    med1 = Number(medarit.textContent);
    med2 = Number(medpond.textContent);
    somamed.textContent = ( (med1 + med2));
}

function mediamedia(){
    med1 = Number(medarit.textContent);
    med2 = Number(medpond.textContent);
meddamed.textContent = ((med1 + med2)/2);
}

btcalcular.onclick = function(){
    aritmetica();
    ponderada();
    soma();
    mediamedia();

}

