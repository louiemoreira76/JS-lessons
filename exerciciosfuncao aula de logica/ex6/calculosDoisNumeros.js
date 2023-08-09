
export function calculos (n1, n2) {
    let soma = n1 + n2;
    let nquad = n1 * (n2 * n2);
    let quadradoN1 = n1 * n1;
    let subtracao = n1 - n2;
    let divisao = n1 / n2;
    let restoDiv = n1 % n2;

    let msg = `soma = ${soma}, produto do primeiro número pelo quadrado do segundo = ${nquad}, quadrado do primeiro número = ${quadradoN1}, subtração = ${subtracao}, divisão = ${divisao}, resto da divisão = ${restoDiv} `;

    return msg;
}