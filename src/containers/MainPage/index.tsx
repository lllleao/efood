import { useSelector } from 'react-redux'

import CardMenu from '../../components/CardMenu'
import Header from '../../components/Header'
import { Main, MenuList } from './styles'
import { RootReducer } from '../../store'

const MainPage = () => {
    const { itensMain } = useSelector((state: RootReducer) => state.cardapio)
    return (
        <>
            <Header change={true} />
            <Main className="container">
                <MenuList>
                    {itensMain.map(
                        ({
                            description,
                            id,
                            image,
                            nota,
                            title,
                            tag,
                            route
                        }) => (
                            <li key={id}>
                                <CardMenu
                                    title={title}
                                    description={description}
                                    image={image}
                                    nota={nota as string}
                                    tag={tag as string[]}
                                    route={route as string}
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
