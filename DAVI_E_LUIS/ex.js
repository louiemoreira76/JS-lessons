import prompt from 'prompt-sync';
let ler = prompt();

console.log ('||PROGRAMA DA TEMPERATURA||')

console.log ('\nQual a temperatura do paciente?')
let temperatura = Number(ler());

let verifcarTemp = temperatura >= 37;

console.log(`\nO paciente está com febre ||${verifcarTemp}||`);
