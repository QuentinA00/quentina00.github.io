import styled from "styled-components"
import { PostTagsInterface } from "../../interfaces/postsInterfaces"

interface TagProps {
    text:PostTagsInterface['text']
    className?:string
}

export const TagGlobalStyle = styled.div`
    display: flex;
    align-items: center;
    background: var(--color2);
    border-radius: 3rem;
    color: var(--color1);
    font-size: .8rem;
    padding: .15rem 1rem;
    padding-left: .4rem;
    column-gap: .5rem;

    & svg {
        width: .7rem;

        & .circle1 {
            fill: var(--color1);
        }
        & .circle2 {
            stroke: var(--color1);
        }
    }
`

const Tag:React.FC<TagProps> = ({text, className}) => {
    return (
        <TagGlobalStyle className={`tag tag-${className}`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle1" cx="9" cy="9" r="4" fill="#F1F1F1"/>
                <circle className="circle2" cx="9" cy="9" r="8.15" stroke="#F1F1F1" strokeWidth="1.7"/>
            </svg>
            <p>{text}</p>
        </TagGlobalStyle>
    )
}

export default Tag