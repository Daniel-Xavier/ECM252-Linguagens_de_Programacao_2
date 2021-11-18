export const ACOES = {
    pedirCartao: "PEDIR_CARTAO",
    pedirCashback: "PEDIR_CASHBACK"
}

export const TIPO_CARTAO = {
    gold: "gold",
    platinum: "platinum"
}

export const VALOR_CARTAO = {
    gold: 50,
    platinum: 100
}

/*
    Essa função deve ser uma criadora de ação
    O type da ação construída deve ser obtido do objeto ACOES acima
    Seu payload deve incluir: 
        cpf, 
        nome, 
        tipoTransacao (veja os prints no enunciado),
        data (é a data atual do sistema. Lembre-se da classe Date. Ela é suficiente)
        valor (varia em função do tipo do cartão escolhido)
*/
export const pedirCartao = (cpf, nome, cartaoEscolhido) => {
    //substitua "null" pela sua solução
    let valor;
    switch (cartaoEscolhido) {
        case TIPO_CARTAO.gold:
            valor = VALOR_CARTAO.gold
            break;
        
        case TIPO_CARTAO.platinum:
            valor = VALOR_CARTAO.platinum
            break;

        default:
            break;
    }

    return {
        type: ACOES.pedirCartao,
        payload: {
            "cpf": cpf,
            "nome": nome,
            "tipoTransacao": ACOES.pedirCartao,
            "data": new Date().toLocaleString(),
            "valor": valor
        }
    }
}

/*
    Essa função deve ser uma criadora de ação
    O type da ação construída deve ser obtido do objeto ACOES acima
    Seu payload deve incluir: 
        cpf, 
        valor (é o próprio valor de cashback),
        tipoTransacao (veja os prints no enunciado),
        data (é a data atual do sistema. Lembre-se da classe Date. Ela é suficiente)
*/
export const pedirCashback = (cpf, valor) => {
    //substitua "null" pela sua solução
    return {
        type: ACOES.pedirCashback,
        payload: {
            "cpf": cpf,
            "valor": Number(valor),
            "tipoTransacao": ACOES.pedirCashback,
            "data": new Date().toLocaleString()
       }
    }
}