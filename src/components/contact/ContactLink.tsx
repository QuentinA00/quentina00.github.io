import styled from 'styled-components'
import ButtonWithIcon from '../ButtonWithIcon'

const StyleContainer = styled.div`
    display:flex;
    gap:1rem;
    align-items:center;
    transition:.1s ease-in-out;

    & p {
        font-weight:200;
    }
`

const StyledLink = styled.a`
    cursor: pointer;
    transition:.15s ease-in-out;
    font-size: .9rem;
    border-radius: .3rem;
    font-weight: 500;
    text-underline-offset: .25rem;
    @media (hover:hover){
        &:hover{
            text-decoration: underline;
            text-underline-offset: .4rem;
        }
    }
    &:active{
        box-shadow: 0 0 0rem .15rem var(--color3);
        border-radius: .5rem;
        transform: scale(.98);
    }
`

const StyledButtonWithIcon = styled(ButtonWithIcon)`
    & img{
        width:1rem
    }
`

type ContactLinkProps = {
    text:string
    linkText:string
    link:string
    icon:string
}

const ContactLink: React.FC<ContactLinkProps> = ({text,link,linkText,icon}) => {
    return (
        <StyleContainer>
            <StyledButtonWithIcon imageName={icon} />
            <p>{text}</p>
            <StyledLink href={link}>{linkText}</StyledLink>
        </StyleContainer>
    )
}

export default ContactLink