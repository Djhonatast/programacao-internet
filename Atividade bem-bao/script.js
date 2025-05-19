let inppeso = document.querySelector ("#inppeso");
let btcalcule = document.querySelector ("#btcalcule");
let h3result = document.querySelector ("#h3result");

function peso (){
let peso = Number(inppeso.value);
h3result.textContent = (peso * 12.00).toFixed(2) + " Reais"
}

btcalcule.onclick = function (){
peso();
}