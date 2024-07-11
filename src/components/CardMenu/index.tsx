import { Card, CardInfo, More, TitleField } from './styles'
import star from '../../assets/images/star.png'
import { Restaurant } from '../../pages/Home'
import Tag from '../Tag'

const CardMenu = ({
    titulo,
    descricao,
    capa,
    avaliacao,
    tipo,
    destacado,
    id
}: Restaurant) => {
    return (
        <Card>
            <img srcSet={capa} alt="" />
            <CardInfo>
                <TitleField>
                    <h3>{titulo}</h3>
                    <div>
                        {avaliacao} <img srcSet={star} alt="" />
                    </div>
                </TitleField>
                <p>{descricao}</p>
                <More to={`/cardapio/${id}`}>Saiba mais</More>
            </CardInfo>
            {destacado ? (
                <Tag>
                    <>
                        <span>Destaque da semana</span> <span>{tipo}</span>
                    </>
                </Tag>
            ) : (
                <Tag>
                    <span>{tipo}</span>
                </Tag>
            )}
        </Card>
    )
}

export default CardMenu
