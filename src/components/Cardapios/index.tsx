import CardsFood from '../../models/CardsFood'
import Header from '../Header'
import OthersCard from '../OthersCard'

import { Baner, Container, ListCard, Section } from './styles'

type Props = {
    baner: string
    nacionalidade: string
    frase: string
    itens: CardsFood[]
}

const Cardapios = ({ baner, frase, itens, nacionalidade }: Props) => {
    return (
        <Section>
            <Header change={false} />
            <Baner style={{ backgroundImage: `url(${baner})` }}>
                <div className="container">
                    <p>{nacionalidade}</p>
                    <h2>{frase}</h2>
                </div>
            </Baner>
            <Container className="container">
                <ListCard>
                    {itens.map(({ title, description, id, image }) => (
                        <li key={id}>
                            <OthersCard
                                title={title}
                                description={description}
                                image={image}
                            />
                        </li>
                    ))}
                </ListCard>
            </Container>
        </Section>
    )
}

export default Cardapios
