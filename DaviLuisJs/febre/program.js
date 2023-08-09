import { febreamento } from './febre.js';
import prompt from 'prompt-sync'
let ler = prompt();

console.log('vamos ver se vc esta com febre, digite sua temperatura:')
let temp = Number(ler())

let y = febreamento(temp);

console.log(`Voce esta com febre? ${y}`);