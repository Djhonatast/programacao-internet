let inpdia = document.querySelector ("#inpdia");
let inpmes = document.querySelector ("#inpmes");
let btcalcula = document.querySelector ("#btcalcula");
let h3result = document.querySelector ("#h3result");

function dias(){
let dia = Number(inpdia.value);
let mes = Number(inpmes.value);
h3result.textContent = (mes - 1) * 30 + dia + " Dias"
}

btcalcula.onclick = function (){
    dias()
};