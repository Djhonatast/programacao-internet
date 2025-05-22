let inpsal = document.querySelector ("#inpsal");
let btcalcule = document.querySelector ("#btcalcule");
let h3resultado15 = document.querySelector ("#h3resultado15");
let h3resultado8 = document.querySelector ("#h3resultado8");

function aumento (){
let sal = Number(inpsal.value);
let multi = sal * 15;
let div = (multi/100) + sal;
h3resultado15.innerHTML = "Sal&aacuterio com aumento de 15% e sem descontos " + div + "R$";
let desconto = ( div - ((div * 8) / 100) );
h3resultado8.innerHTML = "Sal&aacuterio com desconto de 8% " + desconto.toFixed(2) +"R$";
};

btcalcule.onclick = function (){
    aumento()
};