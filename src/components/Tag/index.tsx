import { TagContainer } from './styles'

type Props = {
    children: JSX.Element
}

const Tag = ({ children }: Props) => {
    return <TagContainer>{children}</TagContainer>
}

export default Tag
