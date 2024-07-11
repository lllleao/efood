import CardMenu from '../../components/CardMenu'
import Header from '../../components/Header'
import { Main, MenuList } from './styles'
import { Restaurant } from '../../pages/Home'

type Props = {
    items: Restaurant[]
}

const MainPage = ({ items }: Props) => {
    return (
        <>
            <Header change={true} />
            <Main className="container">
                <MenuList>
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
                </MenuList>
            </Main>
        </>
    )
}

export default MainPage
