import { totalVendaAcaiQtd } from './totalDeAcai.js';

import prompt from 'prompt-sync';
let ler = prompt();

console.log('||PROGRAMA DO AÇAÍ: ||');

console.log('Digite a quantidade de açai(s) pequeno(s) que você comprou:')
let qtdPequeno = Number(ler());

console.log('Digite a quantidade de açai(s) médio(s) que você comprou:')
let qtdMedio = Number(ler());

console.log('Digite a quantidade de açai(s) grande(s) que você comprou:')
let qtdGrande = Number(ler());

let totalCompra = totalVendaAcaiQtd(qtdPequeno, qtdMedio, qtdGrande);

console.log(`Na comprar de açai(s) ${qtdPequeno} pequeno(s), açai(s) ${qtdMedio} medio(s), açai(s) ${qtdGrande} grande(s) o valor a ser pago é de ||R$${totalCompra}||`)