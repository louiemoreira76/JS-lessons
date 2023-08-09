import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite um número:')
let numero = Number(ler());

let verifcarPar = numero%2 == 0;

console.log(`O número é par? ||${verifcarPar}||`);