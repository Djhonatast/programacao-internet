let inpr = document.querySelector ("#inpr");
let btcalcule = document.querySelector ("#btcalcule");
let h3result = document.querySelector ("#h3result");

function raio (){
    let r = Number(inpr.value);
    h3result.innerHTML =  (Math.PI * (r * r) ).toFixed()
};

btcalcule.onclick = function(){
    raio();
};