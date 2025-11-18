import { FC } from "react"
import { AppTextInterface } from "../../../interfaces/appTextInterfaces"
import { Link } from "react-router-dom"
import MenuBarItem from "./MenuBarItem"
import styled from "styled-components"

interface StyleContainerProps{
    $isOnMobile?:boolean
    $isOnTinyMobile?:boolean
}

const StyleContainer = styled.div<StyleContainerProps>`
    column-gap: 1rem;
    display: flex;

    ${props => props.$isOnMobile && `
        row-gap: 1.5rem;
        column-gap: .5rem;
        justify-content: center;
        align-items: center;
    `}
    ${props => props.$isOnTinyMobile && `
        flex-direction: column;
    `}
`

interface MenuBarPagesProps {
    pageItems:AppTextInterface['pages']
    isOnMobile?:boolean
    isOnTinyMobile?:boolean
}

const MenuBarPages:FC<MenuBarPagesProps> = ({pageItems, isOnMobile, isOnTinyMobile}) => {
    return (
        <StyleContainer $isOnMobile={isOnMobile} $isOnTinyMobile={isOnTinyMobile}>
            {pageItems.map(pageItem => (
                <Link
                    to={pageItem.id}
                    key={pageItem.id}
                >
                    <MenuBarItem key={pageItem.id} id={pageItem.id} text={pageItem.text}/>
                </Link>
            ))}
        </StyleContainer>
    )
}

export default MenuBarPages