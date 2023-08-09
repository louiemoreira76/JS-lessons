import { meses } from './diames.js';
import prompt from 'prompt-sync'
const ler = prompt();

console.log("Olá bem vindo ao programa onde você digita o numero de 1 a 12, e aí diz o mês");
console.log('');
console.log('Digite um número:');

let mes = Number(ler());

let x = meses(mes);

console.log(`O mês corespondente ao que foi digitado é: ${x}`);