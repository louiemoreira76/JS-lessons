import prompt from 'prompt-sync';
let ler = prompt();

console.log('||PROGRAMA DOS SIGNOS||');

console.log ('Digite o dia do seu nascimento:');
let dia = Number(ler());

console.log ('Digite o mês do seu nascimento:');
let mes = ler();

let verificarSigno = dia >= 23 && dia <= 30 && mes == 'setembro' || dia <= 22 && mes == 'outubro' || mes == 'Setembro' || mes == 'Outubro';

console.log (`O seu signo é de libra? ${verificarSigno}`);