function trocar(){
    var obj=document.getElementById('body');
    if(obj.className=='fundo'){
        obj.className='fundo1';
        document.getElementById('botao').style.display = 'none';
        document.getElementById('botao1').style.display = 'block';
    }
}

function trocar2(){
    var obj=document.getElementById('letra');
    if(obj.className=='fundoh'){
        obj.className='fundoh1';
    }
}

function voltar() {
    var obj=document.getElementById('body');
    if (obj.className== 'fundo1') {
        obj.className='fundo'
        document.getElementById('botao').style.display = 'block';
        document.getElementById('botao1').style.display = 'none';
    }
}

function voltar2() {
    var obj=document.getElementById('letra');
    if(obj.className=='fundoh1'){
        obj.className='fundoh';
    }
}

