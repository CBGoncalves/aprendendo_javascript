console.log( 'teste' );  // teste
// console.log faz a leitura do código, como o ConsoleWhriteline

// tipos de dados

var idade = 27; // number
var nome = 'Carlos'; //string
var sabado = true; //boolean

var pessoa = { //object
    nome,
    idade,
    sobrenome : 'Eduardo'
}; 

var pessoas = [ pessoa, pessoa2 = { //object dentro de um array?
    nome : 'Junin',
    idade : 13,
    desempregado : true
} ];

var naoDefinido = undefined; //undefined
var nulo = null; //null

//Diferenca de undefined e null

var exemplo; //undefined define a variavel automaticamente como undefined 
console.log( exemplo ); // le a variavel e devolve o tipo

var exemplo = null; // null
console.log( exemplo );  // le a variavel e devolve o tipo

// Typeof: le o tipo da variavel

console.log( typeof idade );        // number 
console.log( typeof nome);          // string
console.log( typeof sabado );       // boolean
console.log( typeof pessoa );       // object
console.log( typeof pessoa2 );      // object
console.log( typeof pessoas );      // object
console.log( typeof naoDefinido );  // undefined
console.log( typeof nulo );         // object
// object ?? isto está errado, deveria retornar null
// portanto, é recomendado utilizar o typeof apenas em tipos de dados primitivos
