function calcularimc(){
    var usuario = 1 //começando no 1 para nao se referir ao primeiro como"usuario 0"
    while(usuario <= 10){
    var peso = prompt("Informar peso (em kg) do usuario " + usuario + ": ");
    var altura = prompt("Informar altura(em m) do usuario " + usuario + ": ")
    var imc = peso / (altura * altura)
    if(imc < 18.5){
        alert("O usuario "+usuario+" está Abaixo do Normal");
    }
    if (imc > 18.5 && imc < 24.9){
        alert("O usuario "+usuario+" está no Peso Normal");
    }
    if (imc > 25 && imc < 29.9){
        alert("O usuario "+usuario+" está com Excesso de Peso");
    }
    if (imc > 30 && imc < 34.9){
        alert("O usuario "+usuario+" está com Obesidade Classe I");
    }
    if (imc > 35 && imc < 39.9){
        alert("O usuario "+usuario+" está com Obesidade Classe II");
    }
    if (imc > 40){
        alert("O usuario "+usuario+" está com Obesidade Classe III");
    }
    usuario = usuario + 1;
    }
}
