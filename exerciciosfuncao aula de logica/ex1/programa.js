import {converterKg} from './converterKg.js';

import prompt from 'prompt-sync';
let ler = prompt();

console.log('||PROGRAMA DA CONVERSÃO DE KG PARA GRAMAS||');

console.log('Digite a quantidade de kg: ');
let kg = Number(ler());

let conversao = converterKg(kg);

console.log(`${kg}KG é igual a ||${conversao}G||`);