declare type Restaurant = {
    id: number
    avaliacao: number
    capa: string
    cardapio?: [
        {
            descricao: string
            foto: string
            id: number
            nome: string
            porcao: string
            preco: number
        }
    ]
    descricao: string
    destacado: boolean
    tipo: string
    titulo: string
}

declare type Modal = {
    nome: string
    desc: string
    porcao: string
    preco: number
    foto: string
    id: number
}
