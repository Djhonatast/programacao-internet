let inpnome = document.querySelector ("#inpnome");
let inpidade = document.querySelector ("#inpidade");
let btcalcule = document.querySelector ("#btcalcule");
let h3result = document.querySelector ("#h3result");

function idade(){
    let nome = (inpnome.value);
    let idade = Number(inpidade.value);
    h3result.innerHTML = nome + " voc&ecirc; ja viveu " + (idade * 365) + " dias."
}

btcalcule.onclick = function(){
    idade();
}