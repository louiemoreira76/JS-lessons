import { area } from './rentagulo.js';
import prompt from 'prompt-sync'
const ler = prompt();

console.log(' programa calcular a área do retângulo! \nVamos rentangular, digite a altura:')
let altugulador = Number(ler());

console.log('°|°\nVamos rentangular, digite a base:')
let basegulador = Number(ler());

let resultado = area (altugulador, basegulador);

console.log(`Resultado, é igual ${resultado}`)