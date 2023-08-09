import { total } from './total.js';
import prompt from 'prompt-sync'
const ler = prompt();

console.log("Olá iremos calcular o total da sua compra na Amazon,\n a partir do valor total da venda e da taxa de juros. ");
console.log("")
console.log("Digite o valor da compra:")

let valor = Number(ler());

let final = total(valor);

console.log(`O total da sua compra foi: ${final}`);