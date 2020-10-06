function CadastrarRespostas() 
{
   var q1=document.querySelector('input[name="q1"]:checked').value;
   listResposta.push(q1);
   var q2=document.querySelector('input[name="q2"]:checked').value;
   listResposta.push(q2);
   var q3=document.querySelector('input[name="q3"]:checked').value;
   listResposta.push(q3);
   var q4=document.querySelector('input[name="q4"]:checked').value;
   listResposta.push(q4);
   var q5=document.querySelector('input[name="q5"]:checked').value;
   listResposta.push(q5);
   var q6=document.querySelector('input[name="q6"]:checked').value;
   listResposta.push(q6);
   var q7=document.querySelector('input[name="q7"]:checked').value;
   listResposta.push(q7);
   var q8=document.querySelector('input[name="q8"]:checked').value;
   listResposta.push(q8);
   var q9=document.querySelector('input[name="q9"]:checked').value;
   listResposta.push(q9);
   var q10=document.querySelector('input[name="q10"]:checked').value;
   listResposta.push(q10);
   var q11=document.querySelector('input[name="q11"]:checked').value;
   listResposta.push(q11);
   var q12=document.querySelector('input[name="q12"]:checked').value;
   listResposta.push(q12);
   var q13=document.querySelector('input[name="q13"]:checked').value;
   listResposta.push(q13);
   var q14=document.querySelector('input[name="q14"]:checked').value;
   listResposta.push(q14);
   var q15=document.querySelector('input[name="q15"]:checked').value;
   listResposta.push(q15);
   var q16=document.querySelector('input[name="q16"]:checked').value;
   listResposta.push(q16);
   var q17=document.querySelector('input[name="q17"]:checked').value;
   listResposta.push(q17);
   var q18=document.querySelector('input[name="q18"]:checked').value;
   listResposta.push(q18);
   var q19=document.querySelector('input[name="q19"]:checked').value;
   listResposta.push(q19);
   var q20=document.querySelector('input[name="q20"]:checked').value;
   listResposta.push(q20);
   var q21=document.querySelector('input[name="q21"]:checked').value;
   listResposta.push(q21);
   var q22=document.querySelector('input[name="q22"]:checked').value;
   listResposta.push(q22);
   var q23=document.querySelector('input[name="q23"]:checked').value;
   listResposta.push(q23);
   var q24=document.querySelector('input[name="q24"]:checked').value;
   listResposta.push(q24);
   var q25=document.querySelector('input[name="q25"]:checked').value;
   listResposta.push(q25);
   var a=PerfilPorcentagem(listResposta);
   document.getElementById("teste").innerHTML=a;
}

var Resposta;
var listResposta = [];
PerfilPorcentagem(listResposta);

function PerfilPorcentagem(listResposta) {
    var I = 0; var A = 0; var O = 0; var C = 0;
    for (var i = 0; i < listResposta.length; i++) {
        if (listResposta[i] == "I") {
            I++;
            continue;
        }

        if (listResposta[i] == "A") {
            A++;
            continue;
        }

        if (listResposta[i] == "C") {
            C++;
            continue;
        }

        if (listResposta[i] == "O")
            O++;
    }

    A = A * 4;
    O = O * 4;
    I = I * 4;
    C = C * 4;

    document.getElementById('A').innerHTML=A + '%';
    document.getElementById('O').innerHTML=O + '%';
    document.getElementById('I').innerHTML=I + '%';
    document.getElementById('C').innerHTML=C + '%';
};

var btn_fechar=document.getElementById("fechar");
btn_fechar.onclick=function(){
    if(modal.classList!="none"){
        modal.classList.add("none")
    }
}
// var modal=document.getElementById('modal');
// modal.onclick=function(){
//     if(modal.classList!="none")
//     modal.classList.add("none")
// }
var btn_enviar=document.getElementById("botao");
btn_enviar.onclick=function(){
    if(modal.classList=="none"){
        modal.classList.remove("none");
    }CadastrarRespostas()
}

var pelicula=document.getElementById('pelicula');
var modal=document.getElementById('modal');
 pelicula.onclick=function(){
     if(modal.classList!="none"){
        modal.classList.add("none");
     } 
 }


// function CadastrarRespostas(Resposta) {
//     if (listResposta.length >= 25){
//         console.log("Todas as questões foram preenchidas");
//     }
//     else{
//         return listResposta.push(Resposta);
//     }
// }

