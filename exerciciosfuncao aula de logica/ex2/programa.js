import {converterDolar} from './converterDolar.js';

import prompt from 'prompt-sync';
let ler = prompt();

console.log('||PROGRAMA DA CONVERSÃO DE REAIS PRA DOLETA ||');

console.log('\nDigite a quantidade de real: ');
let real = Number(ler());

let conversao = converterDolar(real).toFixed(2);

console.log(`\nR$${real} é igual a ||U$${conversao}||`);