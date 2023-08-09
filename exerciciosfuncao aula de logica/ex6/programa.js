import { calculos } from './calculosDoisNumeros.js';

import prompt from 'prompt-sync';
let ler = prompt();

console.log('||PROGRAMA DOS CALCULOS DOS PRODUTOS: ||');

console.log('Digite o primero número:')
let n1 = Number(ler());

console.log('Digite o segundo número:')
let n2 = Number(ler());

let calcs = calculos(n1, n2)

console.log(calcs)