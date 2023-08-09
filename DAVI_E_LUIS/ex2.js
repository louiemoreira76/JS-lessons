import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite a temperatura atual:')
let temperatura = Number(ler());

let verificar = temperatura >=23 && temperatura <= 30;


console.log(`\nA temperatura está favorável para ir ao parque? ||${verificar}||`);