var numero = document.getElementById("numero");
var verificar = document.getElementById("verificar");
var resetar = document.getElementById("resetar");
var resultado = document.getElementById("resultado");

function sorteio(){
    let sortear = Math.round(Math.random() * 10);
    console.log(sortear);
    console.log(numero.value)
    if(numero.value == sortear){
        resultado.innerHTML = "Paranbéns você acertou, o número foi "+ sortear +".";
    }else if( numero.value < 0 || numero.value > 10){
         resultado.innerHTML = "Digite um número válido, lembrando que é de 0 a 10.";
     }else if(numero.value == ""){
         resultado.innerHTML = "Nenhum número digitado.";
     }else{
        resultado.innerHTML = "Você não acertou, o número foi "+sortear+".";
     }
    verificar.style.display = "none";
    resetar.style.display = "inline-block";
}

function reload(){
    location.reload();
}

verificar.addEventListener("click", sorteio);
resetar.addEventListener("click", reload);