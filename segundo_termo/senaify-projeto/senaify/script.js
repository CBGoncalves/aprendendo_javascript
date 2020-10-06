//Pegar elementos do html pelo id
var botao = document.getElementById("botao");
var fundo = document.getElementById("fundo");
var fechar = document.getElementById("fechar");

//Realiza eventos 

botao.onclick = function() {
    fundo.classList.add("visivel");
}

fechar.onclick = function() {
    fundo.classList.remove("visivel");
}

