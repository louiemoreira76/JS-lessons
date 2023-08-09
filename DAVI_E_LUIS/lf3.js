import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DE NÚMEROS PARES')
console.log('Digite um número');
let numero = Number(ler());
let verificar = numero%2 == 0;

console.log(`O número e par ? ${verificar}`);
