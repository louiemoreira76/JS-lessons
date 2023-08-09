import { media } from './logica.js';
import { aprovacao } from './logica.js';
import prompt from 'prompt-sync'
const ler = prompt();

console.log("Olá seja bem vindo ao programa que calcula a média de 3 notas do aluno\n\nPor favor digite as notas: ")

let n1 = Number(ler());
let n2 = Number(ler());
let n3 = Number(ler());

let x = media(n1,n2,n3);

let y = aprovacao(x);

console.log(`O aluno em questão tirou ${x} em média, então o estudante é ${y}.`);
