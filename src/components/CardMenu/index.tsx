import { Card, CardInfo, More, Tag, TitleField } from './styles'
import star from '../../assets/images/star.png'

type Props = {
    title: string
    description: string
    nota: string
    image: string
    tag: string[]
    route: string
}

const CardMenu = ({ title, description, image, nota, tag, route }: Props) => {
    return (
        <Card>
            <img srcSet={image} alt="" />
            <CardInfo>
                <TitleField>
                    <h3>{title}</h3>
                    <div>
                        {nota} <img srcSet={star} alt="" />
                    </div>
                </TitleField>
                <p>{description}</p>
                <More to={route}>Saiba mais</More>
            </CardInfo>
            <Tag>
                {tag.map((i) => (
                    <span key={i}>{i}</span>
                ))}
            </Tag>
        </Card>
    )
}

export default CardMenu
