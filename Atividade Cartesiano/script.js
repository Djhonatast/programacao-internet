let inpx1 = document.querySelector ("#inpx1");
let inpy1 = document.querySelector ("#inpy1");
let inpx2 = document.querySelector ("#inpx2");
let inpy2 = document.querySelector ("#inpy2");
let btcalcule = document.querySelector ("#btcalcule");
let h3result = document.querySelector ("#h3result");

function distancia (){
    let x1 = Number(inpx1.value);
    let y1 = Number(inpy1.value);
    let x2 = Number(inpx2.value);
    let y2 = Number(inpy2.value);
let subtrairx = (x2 - x1);
let subtrairy = (y2 - y1);
let quadradox = subtrairx * subtrairx;
let quadradoy = subtrairy * subtrairy;
let somaxy = quadradox + quadradoy;
h3result.textContent = Math.sqrt(somaxy).toFixed(2);
};

btcalcule.onclick = function (){
    distancia();
};