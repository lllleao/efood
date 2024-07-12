import { useState } from 'react'
import { Restaurant } from '../../pages/Home'
import Header from '../Header'
import OthersCard, { formatPrice } from '../OthersCard'
import fechar from '../../assets/images/close.png'

import { Baner, Container, ListCard, Overlay, Section } from './styles'
import { Button } from '../../styles/global'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
    restaurant: Restaurant
}

export type Modal = {
    nome: string
    desc: string
    porcao: string
    preco: number
    foto: string
    id: number
}

const Cardapios = ({ restaurant }: Props) => {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(true)
    const [itemAtual, setItemAual] = useState<Modal>({
        nome: '',
        desc: '',
        porcao: '',
        preco: 0,
        foto: '',
        id: 0
    })

    const visible = ({ nome, desc, porcao, preco, foto, id }: Modal): void => {
        setItemAual({
            nome,
            desc,
            porcao,
            preco,
            foto,
            id
        })
        setOpenModal(false)
    }

    const addCart = ({ nome, desc, porcao, preco, foto, id }: Modal) => {
        dispatch(
            add({
                desc,
                foto,
                id,
                nome,
                porcao,
                preco
            })
        )

        dispatch(open())

        setOpenModal(true)
    }

    return (
        <Section>
            <Header change={false} />
            <Baner style={{ backgroundImage: `url(${restaurant.capa})` }}>
                <div className="container">
                    <p>{restaurant.tipo}</p>
                    <h2>{restaurant.titulo}</h2>
                </div>
            </Baner>
            <Container className="container">
                <ListCard>
                    {restaurant.cardapio?.map(
                        ({ nome, descricao, id, foto, porcao, preco }) => (
                            <li key={id}>
                                <OthersCard
                                    title={nome}
                                    description={descricao}
                                    image={foto}
                                    porcao={porcao}
                                    preco={preco}
                                    visible={() =>
                                        visible({
                                            nome,
                                            desc: descricao,
                                            porcao,
                                            preco,
                                            foto,
                                            id
                                        })
                                    }
                                />
                            </li>
                        )
                    )}
                </ListCard>
                <Overlay $closeModal={openModal}>
                    <div className="container">
                        <img
                            className="prato"
                            srcSet={itemAtual.foto}
                            alt={itemAtual.nome}
                        />
                        <img
                            onClick={() => setOpenModal(true)}
                            className="close"
                            srcSet={fechar}
                            alt=""
                        />
                        <div>
                            <h3>{itemAtual.nome}</h3>
                            <p>
                                {itemAtual.desc}
                                <br />
                                <br />
                                <span>Serve: {itemAtual.porcao}</span>
                            </p>
                            <Button onClick={() => addCart(itemAtual)}>
                                Adicionar ao carrinho -{' '}
                                {formatPrice(itemAtual.preco)}
                            </Button>
                        </div>
                    </div>
                    <div className="overlay" onClick={() => setOpenModal(true)}>
                        {' '}
                    </div>
                </Overlay>
            </Container>
        </Section>
    )
}

export default Cardapios
