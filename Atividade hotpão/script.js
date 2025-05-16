let inppaes = document.querySelector ("#inppaes")
let inpbroa = document.querySelector ("#inpbroa")
let btcalcule = document.querySelector ("#btcalcule")
let h3result = document.querySelector ("#h3result")
let h3poup = document.querySelector ("#h3poup")

function calculo(){
let pao = Number(inppaes.value)
let broa = Number(inpbroa.value)
let total = ((pao * 0.12) + (broa * 1.50) )
h3result.innerHTML = total.toFixed(2) + " Valor total p&atildees e broas"

let poupar = total * 0.10
h3poup.innerHTML = poupar.toFixed(2)  + " R$ a aplicar na poupan&ccedila";
}

btcalcule.onclick = function (){
    calculo();
}