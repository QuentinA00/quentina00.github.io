import styled from "styled-components"
import { useTags } from "../../contexts/TagContextProvider"
import { styleVariables } from "../../style/globalRules"

interface TagProps {
    className?:string
    tagId:string
    isSelected?:boolean
}

// below, the values for the colors are not mean to change, it uses the same colors in both light and dark mode
const TagGlobalStyle = styled.div`
    display: flex;
    align-items: center;
    background: var(--color2);
    color: var(--color1);
    border-radius: 3rem;
    font-size: .8rem;
    padding: .15rem 1rem;
    padding-left: .4rem;
    column-gap: .5rem;

    // style for tag in the home, in presentation
    &.tag-presentation{
        font-size:.9rem;
        padding:0.3rem 1.25rem;
        padding-left:.6rem;

        & svg{
            width:.9rem;
        }
    }

    & svg {
        width: .7rem;

        & .circle1 {
            fill: var(--color1);
        }
        & .circle2 {
            stroke: var(--color1);
        }
    }
    
    /* below the !important should be removed when the component TagSelector will be used */
    /* tag-selected is only meant to be used when tag component is used in post filter component, as a filter button */
    &.tag-selected{
        color:${styleVariables.color2} !important;
        background:${styleVariables.color1} !important;
        
        & svg{
            .circle1{
                fill:${styleVariables.color2} !important;
            }
            .circle2{
                stroke:${styleVariables.color2} !important;
            }
        }
    }
`

const Tag:React.FC<TagProps> = ({className, tagId, isSelected}) => {

    const {getTagById} = useTags()

    const tag = getTagById(tagId)

    if (!tag) {
        console.warn(`Tag with id "${tagId}" not found`)
        return null
    }

    return (
        <TagGlobalStyle className={`tag ${className ? 'tag-'+className : ''} ${isSelected ? 'tag-selected' : ''}`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle1" cx="9" cy="9" r="4" />
                <circle className="circle2" cx="9" cy="9" r="8.15" strokeWidth="1.7"/>
            </svg>
            {tagId && <p>{tag?.text}</p>}
        </TagGlobalStyle>
    )
}

export default Tag