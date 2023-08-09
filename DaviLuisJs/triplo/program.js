import { tripador } from './triplo.js';
import prompt from 'prompt-sync'
const ler = prompt();

console.log('Programa do triplo! \nDigite qualquer numero e vamos tripar para você!');
let tripa = Number(ler());

let tripamento = tripador(tripa);

console.log(`O resultado dessa tripada é: ${tripamento}`);