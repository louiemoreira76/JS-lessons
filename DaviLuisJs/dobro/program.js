import { dobro } from './function.js';
import prompt from 'prompt-sync';
const ler = prompt();

console.log("programa para calcular o dobro de um número.")
let pao = Number(ler());


let resultado = dobro(pao);

console.log(`O resultado é ${resultado}`);