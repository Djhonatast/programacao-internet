let inpcen = document.querySelector ("#inpcen");
let btcalcule = document.querySelector ("#btcalcule");
let h3centena = document.querySelector ("#h3centena");
let h3dezena = document.querySelector ("#h3dezena");
let h3unidade = document.querySelector ("#h3unidade");

function grandezas(){
    let cen = Number(inpcen.value);
    let centena = Math.floor(cen /100)
    let dez1 = Math.floor((cen % 100) /10)
    let unidade = cen % 10
    h3centena.textContent = "Centena= " +centena
    h3dezena.textContent = "Dezena= " +dez1
    h3unidade.textContent = "Unidade= " +unidade

}

btcalcule.onclick = function(){
    grandezas();
}