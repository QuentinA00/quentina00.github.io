import { FC, ReactNode } from "react"
import styled from "styled-components"

const TagSelectorStyle = styled.div`
    cursor:pointer;
    transition:ease-in-out .15s;
    border:solid .1rem var(--color3);

    &:hover{
        filter:brightness(.90);
    }
    &:active{
        transform:scale(.97);
    }
`

const TagSelector:FC<{children:ReactNode}> = ({children}) => {
    return (
        <TagSelectorStyle className="tagSelector">
            {children}
        </TagSelectorStyle>
    )
}

export default TagSelector