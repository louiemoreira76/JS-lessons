import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o valor dos lados primeiro quadrado:')
let lado = Number(ler());

let area1 = lado * 2;

console.log('Digite o valor dos lados do segundo quadrado:')
let lado2 = Number(ler());

let area2 = lado2 * 2;

let verificarArea = area1 == area2;

console.log(`\nAs áreas são iguais? ||${verificarArea}||`);



