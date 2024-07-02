class CardsFood {
    title: string
    description: string
    nota?: string
    tag?: string[]
    image: string
    id: number
    route?: string

    constructor(
        title: string,
        description: string,
        nota: string,
        tag: string[],
        image: string,
        id: number,
        route: string
    ) {
        this.title = title
        this.nota = nota
        this.description = description
        this.tag = tag
        this.image = image
        this.id = id
        this.route = route
    }
}

export default CardsFood
