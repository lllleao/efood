import Tag from '../Tag'
import star from '../../assets/images/star.png'
import * as S from './styles'

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
        <S.Card>
            <img srcSet={capa} alt="" />
            <S.CardInfo>
                <S.TitleField>
                    <h3>{titulo}</h3>
                    <div>
                        {avaliacao} <img srcSet={star} alt="" />
                    </div>
                </S.TitleField>
                <p>{descricao}</p>
                <S.More to={`/cardapio/${id}`}>Saiba mais</S.More>
            </S.CardInfo>
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
        </S.Card>
    )
}

export default CardMenu
