import { Button } from '../../styles/global'
import Tag from '../Tag'
import { Card } from './styles'

type Props = {
    title: string
    description: string
    image: string
    porcao: string
    preco: number
    visible: () => void
}

export const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}

const OthersCard = ({
    title,
    description,
    image,
    porcao,
    preco,
    visible
}: Props) => {
    const descSlice = (desc: string) => {
        return desc.slice(0, 160) + '...'
    }
    return (
        <Card>
            <img srcSet={image} alt="Uma pizza" />
            <h3>{title}</h3>
            <p>{descSlice(description)}</p>
            <Button onClick={() => visible()} type="button">
                Adicionar ao carrinho
            </Button>
            <Tag>
                <>
                    <span>{porcao}</span>
                    <span>{formatPrice(preco)}</span>
                </>
            </Tag>
        </Card>
    )
}

export default OthersCard
