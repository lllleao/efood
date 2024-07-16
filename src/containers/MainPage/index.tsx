import CardMenu from '../../components/CardMenu'
import Header from '../../components/Header'
import * as S from './styles'

type Props = {
    items: Restaurant[]
}

const MainPage = ({ items }: Props) => {
    return (
        <>
            <Header change={true} />
            <S.Main className="container">
                <S.MenuList>
                    {items.map(
                        ({
                            descricao,
                            id,
                            capa,
                            avaliacao,
                            titulo,
                            tipo,
                            destacado
                        }) => (
                            <li key={id}>
                                <CardMenu
                                    titulo={titulo}
                                    descricao={descricao}
                                    capa={capa}
                                    avaliacao={avaliacao}
                                    tipo={tipo}
                                    destacado={destacado}
                                    id={id}
                                />
                            </li>
                        )
                    )}
                </S.MenuList>
            </S.Main>
        </>
    )
}

export default MainPage
