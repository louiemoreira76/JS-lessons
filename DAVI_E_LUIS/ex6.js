import prompt from 'prompt-sync';
let ler = prompt();

console.log('||PROGRAMA DAS NOTAS||');

console.log('\nDigite a primeira nota:');
let nota1 = Number(ler());

console.log('\nDigite a segunda nota:');
let nota2 = Number(ler());

console.log('\nDigite a terceira nota:');
let nota3 = Number(ler());

console.log('\nDigite a quarta nota:');
let nota4 = Number(ler());

console.log('\nDigite a quinta nota:');
let nota5 = Number(ler());

let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

let verifcarAprovacao = media >= 6; 

console.log (`O aluno foi aprovado? ||${verifcarAprovacao}||`);

