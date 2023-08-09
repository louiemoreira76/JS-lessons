export function media (a,b,c){
    let x = (a + b + c) /3
    let resposta = x.toFixed(1)
    return resposta
}

export function aprovacao (notafinal){
    let y = ""
    
    if (notafinal >= 8){
     y = "Aprovado com Sucesso";
    }

    else if (notafinal >= 6 && notafinal < 8)
    y = "Aprovado";

    else if (notafinal >= 3 && notafinal < 6)
    y = "Recuperação";

    else if (notafinal < 3 && notafinal >= 1)
    y = "Reprovado";

    else if (notafinal == 0)
    y = "Desistente";

    
    return y;
}