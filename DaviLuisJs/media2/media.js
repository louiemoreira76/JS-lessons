export function notamento (a,b,c,d,e){
    let calculo = (a + b + c+ d +e)/5
    let media = calculo.toFixed(0)
    return media
}

export function aprovacao (f) {
    let x =""
    
    if (f >= 5  || f <= 10) {
        x = "aprovado"
    }

    else if (f <= 4) {
        x = "reprovado"
    }

    else if (f >= 11) {
        x = "Valor invalido"
    }

    return x;
}