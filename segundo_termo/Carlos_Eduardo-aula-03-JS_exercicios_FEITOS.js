/*
Declare uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `genero` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = {
    nome : 'Carlos',
    sobrenome : 'Eduardo',
    genero : 'Masculino',
    idade : 17,
    altura : 1.95,
    peso : 77,
    andando : false,
    caminhouQuantosMetros : 0,
    
};


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function( y ) {
    pessoa.idade = pessoa.idade + y;
};

pessoa.fazerAniversario(1);

console.log( 'Feliz aniversario ' + pessoa.nome + ', agora voce tem ' + pessoa.idade + ' anos');


/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function( qtdM ) {
    pessoa.caminhouQuantosMetros = pessoa.caminhouQuantosMetros + qtdM;
    pessoa.andando = true;
};

console.log( 'Voce tinha caminhado ' + pessoa.caminhouQuantosMetros + ' metros ' + pessoa.andando );

pessoa.andar(500);

console.log( 'Agora voce caminhou ' + pessoa.caminhouQuantosMetros + ' metros ' + pessoa.andando );

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function () {
    pessoa.andando = false   
};

pessoa.andando ? console.log( 'A pessoa está andando.' ) : console.log( 'A pessoa não esta andando' )
// A pessoa está andando. 

pessoa.parar();

pessoa.andando ? console.log( 'A pessoa está andando.' ) : console.log( 'A pessoa não esta andando' )
// A pessoa não está andando. 


/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

function nomeCompleto() {
    return 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome + ' ';
};



/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

function mostrarIdade() {
    return 'Olá! eu tenho ' + pessoa.idade + ' anos';   
};



/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

function mostrarPeso() {
    return 'Eu peso ' + pessoa.peso + ' Kg'
};



/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

function mostrarAltura() {
    return 'Minha altura é ' + pessoa.altura + 'm'
};



/*
Agora vamos trabalhar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log ( nomeCompleto() );
// Meu nome completo é Carlos Eduardo


/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log ( mostrarIdade() );
// Minha idade é 18 anos


/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log ( mostrarPeso() );
// Meu peso é 77 Kg


/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log ( mostrarAltura() );
// Minha altura é 1.95m


/*
Faça a `pessoa` fazer 3 aniversários.
*/

pessoa.fazerAniversario(3);
// .fazerAniversario() é um método do objeto pessoa


/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

console.log( 'Feliz aniversario ' + pessoa.nome + ', agora voce tem ' + pessoa.idade + ' anos');
//Feliz aniversario Carlos, agora voce tem 21 anos


/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com as distâncias diferentes passadas por parâmetro.
*/

console.log( 'Você tinha caminhado ' + pessoa.caminhouQuantosMetros + ' metros, andando: ' + pessoa.andando );
//Você tinha caminhado 500 metros, andando: false 

pessoa.andar(1000);
// .andar() é um método do objeto pessoa 

console.log( 'Agora você caminhou ' + pessoa.caminhouQuantosMetros + ' metros, andando: ' + pessoa.andando );
//Agora você caminhou 1500 metros, andando: true


pessoa.andar(600);
// .andar() é um método do objeto pessoa

console.log( 'Agora você caminhou ' + pessoa.caminhouQuantosMetros + ' metros, andando: ' + pessoa.andando );
//Agora você caminhou 2100 metros, andando: true


pessoa.andar(300);
// .andar() é um método do objeto pessoa

console.log( 'Agora você caminhou ' + pessoa.caminhouQuantosMetros + ' metros, andando: ' + pessoa.andando );
//Agora você caminhou 2400 metros, andando: true



/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.andando ? console.log( 'A pessoa está andando.' ) : console.log( 'A pessoa não esta andando' )
// A pessoa está andando. 


/*
Se a pessoa ainda está andando, faça-a parar.
*/

pessoa.parar();
// .parar() é um método do objeto pessoa


/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.andando ? console.log( 'A pessoa está andando.' ) : console.log( 'A pessoa não esta andando' )
// A pessoa não está andando. 



/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log( 'Você caminhou ' + pessoa.caminhouQuantosMetros + ' metros');
//Você caminhou 2400 metros



/*
Agora, vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `genero` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

//

/* Agora, apresente-se. */

function Apresentar() {
    return 'Olá, eu sou o ' + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' anos, ' + pessoa.altura + ', meu peso é ' + pessoa.peso + ' e, só hoje, eu já caminhei ' + pessoa.caminhouQuantosMetros + ' metros!'
}

console.log( Apresentar() );
//Olá, eu sou o Carlos Eduardo, tenho 21 anos, 1.95, meu peso é 77 e, só hoje, eu já caminhei 2400 metros!