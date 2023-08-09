import prompt from 'prompt-sync';
let ler = prompt();

console.log ('||PROGRAMA DAS CORES PRIMÁRIAS:||');

console.log ('Digite uma cor:')
let cor = ler();

let verificarPrimaria = cor == 'Azul' || cor == 'Amarelo' || cor == 'Vermelho' || cor == 'azul' || cor == 'amarelo' || cor == 'vermelho';

console.log (`${cor} é primária?  ${verificarPrimaria}`);
