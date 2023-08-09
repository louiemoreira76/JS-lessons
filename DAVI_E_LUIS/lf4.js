import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DE COMPARAçÃO DE QUADRADO')
console.log('\nDigite o tamanho da base do primeiro quadrado:');
let lado1 = Number(ler());
let area1 = lado1*2;

console.log('\nDigite o tamanho da base do segundo quadrado:');
let lado2 = Number(ler());
let area2 = lado2*2;

let comparar = area1 == area2;


console.log(`A comparação dos quadrados são iguais ? ${comparar}`);