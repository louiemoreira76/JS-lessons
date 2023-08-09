import { notamento } from './media.js';
import { aprovacao } from './media.js';
import prompt from 'prompt-sync'
const ler = prompt();

console.log('Vamos descobrir a média do seu fihlo sapequinha, perante as 5 notas bimestrais')
let n1 = Number(ler());
let n2 = Number(ler());
let n3 = Number(ler());
let n4 = Number(ler());
let n5 = Number(ler());

let x = notamento(n1,n2,n3,n4,n5);

let y = aprovacao(x);

console.log(`A sua media foi ${x}, por conta disso voce foi ${y}.`);