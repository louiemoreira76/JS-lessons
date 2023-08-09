import { parcelasCompras } from './parcelasCompra.js';

import prompt from 'prompt-sync';
let ler = prompt();

console.log('||PROGRAMA PARA DESCUBRIR QUANTO FOI PARCELADO: ||');

console.log('Digite o total da sua compra:')
let totalCompras = Number(ler());

console.log('Digite a quantidade de parcelas:')
let qtdParcelas = Number(ler());

let parcelafinal = parcelasCompras(totalCompras, qtdParcelas);

console.log(`\nR$${totalCompras} parcelado em ${qtdParcelas}x dá ||R$${parcelafinal}||`);


