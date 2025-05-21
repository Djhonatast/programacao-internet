let inpdias = document.querySelector ("#inpdias");
let btcalcule = document.querySelector ("#btcalcule");
let h3result = document.querySelector ("#h3result");

function acidentes(){
    let dias = Number(inpdias.value);
    let anos = Math.floor(dias / 365)
    let meses = dias % 365
let meses2 = Math.floor(meses / 30)
let dia = meses % 30
h3result.innerHTML = "S&atildeo " + anos.toFixed() + " anos " + meses2.toFixed() + " meses e " + dia.toFixed() + " dias"
}

btcalcule.onclick = function (){
    acidentes();
}