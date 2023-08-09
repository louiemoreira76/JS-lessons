import { totalVendasAcai } from './totalVendaAcai.js';

import prompt from 'prompt-sync';
let ler = prompt();

console.log('||PROGRAMA DO AÇAÍ: ||');

console.log('Digite a quantidade de açais que você comprou:')
let qtdAcais = Number(ler());

let totalCompra = totalVendasAcai(qtdAcais);

console.log(`Na comprar de ${qtdAcais} o valor a ser ppago é de ||R$${totalCompra}||`)
