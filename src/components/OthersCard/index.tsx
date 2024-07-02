import { Card, Button } from './styles'

type Props = {
    title: string
    description: string
    image: string
}

const OthersCard = ({ title, description, image }: Props) => {
    return (
        <Card>
            <img srcSet={image} alt="Uma pizza" />
            <h3>{title}</h3>
            <p>{description}</p>
            <Button type="button">Adicionar ao carrinho</Button>
        </Card>
    )
}

export default OthersCard
