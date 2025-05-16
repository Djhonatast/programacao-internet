let inpcav = document.querySelector ("#inpcav");
let btcalcule = document.querySelector ("#btcalcule")
let h3result = document.querySelector ("#h3result")

function ferradura (){
let cav = Number (inpcav.value)
h3result.textContent = (cav * 4 ) +" Ferraduras"
}

btcalcule.onclick = function (){
    ferradura();
}