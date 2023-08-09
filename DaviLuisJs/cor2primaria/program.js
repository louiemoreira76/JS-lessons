import prompt from 'prompt-sync'
import { primaria1 } from './cor2.js';
import { primaria2 } from './cor2.js';
const ler = prompt();

console.log('Olá nesse programa vamos verificar se a cor é primaria\n Digite a cor');
let cor1 = ler();

console.log('Digite a segunda cor:');
let cor2 = ler();

let x = primaria1(cor1);

let y = primaria2(cor2);

console.log(`A primeira cor digitada é ${x} A segunda cor digitada é ${y}` );
