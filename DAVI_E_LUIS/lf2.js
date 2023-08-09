import prompt from 'prompt-sync';
let ler = prompt();

console.log('PROGRAMA DA TEMPERATURA')
console.log('\nDigite a temperatura atual:');

let temperatura = Number(ler());

let final= temperatura >=23 && temperatura <=30;

console.log(`\n A temperatura é favoravel para ir ao parque? ${final}`);