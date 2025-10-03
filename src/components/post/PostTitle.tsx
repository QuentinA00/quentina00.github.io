import { FC } from "react"
import styled from "styled-components"

const Style = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    // responsive rules
    &.postTitle-mobile{
        flex-direction: column;
        align-items: flex-start;
    }

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
    }
`

interface PostTitleProps {
    title: string
    description?: string
    showDot?: boolean
    className?:string
}

const PostTitle: FC<PostTitleProps> = ({ title, description, showDot, className }) => {
    return (
        <Style className={className}>
            <h3>{title}</h3>
            {showDot && <p className="postTitle-dot">•</p>}
            <p className="postTitle-description">{description}</p>
        </Style>
    )
}

export default PostTitle