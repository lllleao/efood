import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { formatPrice } from '../../utils'

import OthersCard from '../OthersCard'
import Header from '../Header'

import fechar from '../../assets/images/close.png'
import * as S from './styles'
import { Button } from '../../styles/global'

type Props = {
    restaurant: Restaurant
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
        <S.Section>
            <Header change={false} />
            <S.Baner style={{ backgroundImage: `url(${restaurant.capa})` }}>
                <div className="container">
                    <p>{restaurant.tipo}</p>
                    <h2>{restaurant.titulo}</h2>
                </div>
            </S.Baner>
            <S.Container className="container">
                <S.ListCard>
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
                </S.ListCard>
                <S.Overlay $closeModal={openModal}>
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
                </S.Overlay>
            </S.Container>
        </S.Section>
    )
}

export default Cardapios
