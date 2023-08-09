import { boga } from "./area.js";
import prompt from "prompt-sync"
let ler = prompt();

console.log('Olá, seja bem-vindo ao programa do cu \nVamos descobrir a area do seu cu bo');

console.log('\nPrecisamos apenas que voce digite a base:');
let NADEGAS = Number(ler());

let resultado = boga(NADEGAS);

console.log(`O tamanho da JAKA é: ${resultado}`);