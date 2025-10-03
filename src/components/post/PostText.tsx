import styled from "styled-components"
import { PostInterface } from "../../interfaces/postsInterfaces"
import { FC } from "react"

const Style = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .7rem;

    &.postText-presentation{
        font-weight:200;
    }
`

interface PostTextProps {
    textParagraphs:PostInterface['postTextParagraphs']
    className?:string
}

const PostText: FC<PostTextProps> = ({textParagraphs, className}) => {
    return (
        <Style className={className}>
            {textParagraphs.map((postTextParagraph, index)=> (
                <p key={index}>{postTextParagraph}</p>
            ))}
        </Style>
    )
}

export default PostText