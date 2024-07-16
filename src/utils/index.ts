export const sumTot = (items: Modal[]) => {
    return items.reduce((acum, val) => {
        return (acum += val.preco)
    }, 0)
}

export const formatPrice = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price)
}
