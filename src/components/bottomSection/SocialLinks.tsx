import styled from "styled-components"
import { SocialLinkInterface } from "../../interfaces/appTextInterfaces"
import ButtonWithIcon from "../ButtonWithIcon"

const StyleContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    height: 2.5rem;
    align-items: center;
    flex-flow: wrap;
    justify-content: center;

    & a {

        & > .buttonWithIcon{
            padding: .6rem;
            border-radius: 3rem;
            @include mixin.itemDescriptionOnHover;
            @include mixin.transition(.15s);
            
            & > img {
                width: 1rem;
                height: 1rem;
            }
            
            @media (hover:hover){
                &:hover > span{
                    transform: translate(-50%, .1rem);
                }
            }
            &:active > span{
                transform: translate(-50%, .1rem);
            }
            
            & span {
                @include mixin.transition(.15s);
                font-size: .6rem;
                font-weight: 400;
                background: var(--color2);
                border-radius: 3rem;
                color: var(--color1);
                padding: .2rem .7rem;
                inline-size: max-content;
                box-shadow: var(--borderShadow5);
                left: 50%;
                transform: translate(-50%, -0.25rem);
                top: 2.7rem;
            }
    
        }
    }
`

const ItemDescriptionOnHoverStyle = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;
    /* @include hoverLink3; */
    @media (hover:hover){
        &:hover{
            background: var(--color3);
        }
    }
        
    // showing the description if hovered
    @media (hover:hover){
        &:hover > span{
            visibility: visible;
            opacity: 1;
            transition-delay: .25s;
        }
    }
    // showing the description if clicked
    &:active > span{
        visibility: visible;
        opacity: 1;
        transition-delay: .3s;
    }
    // properties of the description
    & > span {
        position: absolute;
        visibility: hidden;
        opacity: 0;
        z-index: 2;

        // creating the description
        &::after{
            content: '';
            position: absolute;
        }
        // hiding the description if hovered
        @media (hover:hover){
            &:hover{
                display: none;
            }
        }
    }
`

interface SocialLinksProps {
    itemsLink:SocialLinkInterface[]
}

const SocialLinks:React.FC<SocialLinksProps> = ({itemsLink}) => {
    return (
        <StyleContainer className="socialLinks">
            {itemsLink.map(element => (
                <a key={element.id} href={element.link} target='_blank'>
                    <ButtonWithIcon imageName={element.icon} className="linkItem" description={element.description}/>
                </a>
            ))}
        </StyleContainer>
    )
}

export default SocialLinks