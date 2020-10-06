function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep){
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `https://viacep.com.br/ws/${cep}/json`;
            fetch(URL)
                .then(resposta => resposta.json())
                .then(data => mostrarResposta(data))
                .catch(erro => console.error(erro));
        }
    }
}

function mostrarResposta(cep) {
    const mensagem = `
        CEP: ${cep.cep},
        Logradouro: ${cep.logradouro},
        Complemento: ${cep.complemento},
        Bairro: ${cep.bairro},
        Localidade: ${cep.localidade},
        UF: ${cep.uf},
        IBGE: ${cep.ibge},
        GIA: ${cep.gia},
        DDD: ${cep.ddd},
        Siafi: ${cep.siafi}
    `;
    alert(mensagem);
}