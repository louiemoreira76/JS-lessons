import prompt from 'prompt-sync';
let ler = prompt();

console.log('||PROGRAMA DOS MESES||');

console.log ('Digite um mês do ano:');
let mes = ler();

let verificarSemestre = mes =='Janeiro' || mes == 'Fevereiro' || mes == 'Marco' || mes == 'Abril' || mes == 'Maio' || mes == 'Junho' || mes == 'janeiro' || mes == 'fevereiro' || mes == 'marco' || mes == 'abril' || mes == 'maio' || mes == 'junho';

console.log (`${mes} faz parte do primeiro semestre do ano? ||${verificarSemestre}||`);