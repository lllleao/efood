import Tag from '../Tag'
import { formatPrice } from '../../utils'

import { Card } from './styles'
import { Button } from '../../styles/global'

type Props = {
    title: string
    description: string
    image: string
    porcao: string
    preco: number
    visible: () => void
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
                Mais detalhes
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
