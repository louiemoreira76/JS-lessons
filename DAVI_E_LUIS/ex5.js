import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o valor da base do primeiro retângulo:')
let base1 = Number(ler());

console.log('\nDigite o valor da altura do primeiro retângulo:')
let altura1 = Number(ler());

let area1 = base1 * altura1;

console.log('\nDigite o valor da base do segundo retângulo:')
let base2 = Number(ler());

console.log('\nDigite o valor da altura do segundo retângulo:')
let altura2 = Number(ler());

let area2 = base2 * altura2;

let verificarArea = area1 == area2;

console.log(`\nAs áreas são iguais? ||${verificarArea}||`);