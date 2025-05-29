let inpvaltotal = document.querySelector ("#inpvaltotal");
let btcalcule = document.querySelector ("#btcalcule");
let h3result = document.querySelector ("#h3result");

function racha(){
    let valtotal = Number(inpvaltotal.value.replace(",", "."));
    let parteinteira = Math.floor(valtotal/3);
    let pagcarlos = parteinteira
    let pagandre = parteinteira
    let pagfelipe = (valtotal -(pagcarlos+pagandre));
    h3result.innerHTML = "Carlos: "+ pagcarlos.toFixed(2) + " Andr&eacute;: "+ pagandre.toFixed(2) + " Felipe: " + pagfelipe.toFixed(2)
}

btcalcule.onclick = function(){
    racha();
}