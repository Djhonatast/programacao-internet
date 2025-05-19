let inpvalgas = document.querySelector ("#inpvalgas");
let inpvalpag = document.querySelector ("#inpvalpag")
let btcalcule = document.querySelector ("#btcalcule");
let h3result = document.querySelector ("#h3result");

function gasolina (){
    let valgas = Number(inpvalgas.value);
    let valpag = Number(inpvalpag.value);
    h3result.textContent = (valpag.toFixed(2) / valgas.toFixed(2) ) + " litros"
}

btcalcule.onclick = function (){
    gasolina();
}