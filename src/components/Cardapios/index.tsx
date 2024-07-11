import { useState } from 'react'
import { Restaurant } from '../../pages/Home'
import Header from '../Header'
import OthersCard, { formatPrice } from '../OthersCard'
import close from '../../assets/images/close.png'

import { Baner, Container, ListCard, Overlay, Section } from './styles'
import { Button } from '../../styles/global'

type Props = {
    restaurant: Restaurant
}

type Modal = {
    nome: string
    desc: string
    porcao: string
    preco: number
    foto: string
}

const Cardapios = ({ restaurant }: Props) => {
    const [closeModal, setCloseModal] = useState(true)
    const [itemAtual, setItemAual] = useState<Modal>({
        nome: '',
        desc: '',
        porcao: '',
        preco: 0,
        foto: ''
    })

    const visible = (
        nome: string,
        desc: string,
        porcao: string,
        preco: number,
        foto: string
    ): void => {
        setItemAual({
            nome,
            desc,
            porcao,
            preco,
            foto
        })
        setCloseModal(false)
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
                                        visible(
                                            nome,
                                            descricao,
                                            porcao,
                                            preco,
                                            foto
                                        )
                                    }
                                />
                            </li>
                        )
                    )}
                </ListCard>
                <Overlay $closeModal={closeModal}>
                    <div className="container">
                        <img
                            className="prato"
                            srcSet={itemAtual.foto}
                            alt={itemAtual.nome}
                        />
                        <img
                            onClick={() => setCloseModal(true)}
                            className="close"
                            srcSet={close}
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
                            <Button>
                                Adicionar ao carrinho -{' '}
                                {formatPrice(itemAtual.preco)}
                            </Button>
                        </div>
                    </div>
                    <div
                        className="overlay"
                        onClick={() => setCloseModal(true)}
                    >
                        {' '}
                    </div>
                </Overlay>
            </Container>
        </Section>
    )
}

export default Cardapios
