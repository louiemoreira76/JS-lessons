import { primaria } from "./cor1.js";
import prompt from "prompt-sync";
const ler = prompt();

console.log("Olá nesse programa vamos verificar se a cor é primaria\n Digite a cor")
let cor = ler();

let x = primaria(cor);

console.log(`Essa cor é:${x}`)
