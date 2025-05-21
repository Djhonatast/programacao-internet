let inpcamP = document.querySelector ("#inpcamP");
let inpcamM = document.querySelector ("#inpcamM");
let inpcamG = document.querySelector ("#inpcamG");
let btcalcule = document.querySelector ("#btcalcule");
let h3result = document.querySelector ("#h3result");

function balanco (){
    let camP = Number(inpcamP.value);
    let camM = Number(inpcamM.value);
    let camG = Number(inpcamG.value);

    h3result.textContent = (camP * 10) + (camM * 12) + (camG * 15) + " Reais";
};

btcalcule.onclick = function (){
    balanco();
};