import { FC } from "react"
import styled from "styled-components"

const StyleContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction:column;

    & h3 {
        flex-shrink: 0;
    }
    
    & .postTitle-dot{
        align-self: center;
        flex-shrink: 1;
    }
    
    & .postTitle-description{
        font-style: italic;
        flex-shrink: 1;
        font-size:.9rem;
    }
`

interface PostTitleProps {
    title?: string
    description?: string
}

const PostTitle: FC<PostTitleProps> = ({ title, description }) => {
    return (
        <StyleContainer>
            {title && <h3>{title}</h3>}
            <p className="postTitle-description">{description}</p>
        </StyleContainer>
    )
}

export default PostTitle