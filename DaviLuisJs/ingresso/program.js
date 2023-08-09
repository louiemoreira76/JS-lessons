import { inmei } from './MeiaInteira.js';
import prompt from 'prompt-sync';
const ler = prompt();

console.log("Bem-vindo a bilheteria você vai ter as senguintes opções de ingresso a seguir:");
console.log("Digite a quantidade de ingressos de valor inteiro:");
let op1 = Number(ler());

console.log("");
console.log("Digite a quantidade de ingressos de valor de meia:");
let op2 = Number(ler());

let resposta = inmei(op1,op2);

console.log(`O total da compra foi: ${resposta}.`)

