import * as S from './styles'

type Props = {
    children: JSX.Element
}

const SidebarContainer = ({ children }: Props) => {
    return (
        <S.CartContainer>
            <S.SideBar>{children}</S.SideBar>
        </S.CartContainer>
    )
}

export default SidebarContainer
