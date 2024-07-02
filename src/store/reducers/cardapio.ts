import { createSlice } from '@reduxjs/toolkit'
import CardsFood from '../../models/CardsFood'
import pasta from '../../assets/images/pasta.png'
import sushi from '../../assets/images/sushi.png'
import pizza from '../../assets/images/pizza.png'

type CardapioState = {
    itensMain: CardsFood[]
    itensItalian: CardsFood[]
    itensJapan: CardsFood[]
}

const initialState: CardapioState = {
    itensMain: [
        {
            id: 1,
            title: 'Hioki Sushi',
            description:
                'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
            image: sushi,
            nota: '4.9',
            tag: ['Destaque da semana', 'Japonesa'],
            route: '/japan'
        },
        {
            id: 2,
            title: 'La Dolce Vita Trattoria',
            description:
                'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            image: pasta,
            nota: '4.6',
            tag: ['Italiana'],
            route: '/italian'
        },
        {
            id: 3,
            title: 'La Dolce Vita Trattoria',
            description:
                'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            image: pasta,
            nota: '4.6',
            tag: ['Italiana'],
            route: '/italian'
        },
        {
            id: 4,
            title: 'La Dolce Vita Trattoria',
            description:
                'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            image: pasta,
            nota: '4.6',
            tag: ['Italiana'],
            route: '/italian'
        },
        {
            id: 5,
            title: 'La Dolce Vita Trattoria',
            description:
                'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            image: pasta,
            nota: '4.6',
            tag: ['Italiana'],
            route: '/italian'
        },
        {
            id: 6,
            title: 'La Dolce Vita Trattoria',
            description:
                'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
            image: pasta,
            nota: '4.6',
            tag: ['Italiana'],
            route: '/italian'
        }
    ],
    itensItalian: [
        {
            id: 1,
            title: 'Pizza Marguerita',
            description:
                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: pizza
        },
        {
            id: 2,
            title: 'Pizza Marguerita',
            description:
                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: pizza
        },
        {
            id: 3,
            title: 'Pizza Marguerita',
            description:
                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: pizza
        },
        {
            id: 4,
            title: 'Pizza Marguerita',
            description:
                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: pizza
        },
        {
            id: 5,
            title: 'Pizza Marguerita',
            description:
                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: pizza
        },
        {
            id: 6,
            title: 'Pizza Marguerita',
            description:
                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
            image: pizza
        }
    ],
    itensJapan: [
        {
            id: 1,
            title: 'Sushi',
            description:
                'Sushi é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado. O sushi, na forma em que é conhecido atualmente, tem cerca de 200 anos',
            image: sushi
        },
        {
            id: 2,
            title: 'Sushi',
            description:
                'Sushi é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado. O sushi, na forma em que é conhecido atualmente, tem cerca de 200 anos',
            image: sushi
        },
        {
            id: 3,
            title: 'Sushi',
            description:
                'Sushi é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado. O sushi, na forma em que é conhecido atualmente, tem cerca de 200 anos',
            image: sushi
        },
        {
            id: 4,
            title: 'Sushi',
            description:
                'Sushi é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado. O sushi, na forma em que é conhecido atualmente, tem cerca de 200 anos',
            image: sushi
        },
        {
            id: 5,
            title: 'Sushi',
            description:
                'Sushi é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado. O sushi, na forma em que é conhecido atualmente, tem cerca de 200 anos',
            image: sushi
        },
        {
            id: 6,
            title: 'Sushi',
            description:
                'Sushi é um prato da culinária japonesa que possui origem numa antiga técnica de conservação da carne de peixe em arroz avinagrado. O sushi, na forma em que é conhecido atualmente, tem cerca de 200 anos',
            image: sushi
        }
    ]
}

const cardapioSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {}
})

export default cardapioSlice.reducer
