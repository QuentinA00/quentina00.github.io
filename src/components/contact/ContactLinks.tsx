import styled from 'styled-components'
import { contactLinkInterface } from '../../interfaces/appTextInterfaces'
import ContactLink from './ContactLink'

const StyleContainer = styled.div`
    display:flex;
    flex-direction:column;
    row-gap:2rem;
    align-items:start;
    padding:3.5rem;
    background:var(--color3);
    /* border: .1rem solid var(--color2); */

    border-radius:1rem;
`

type ContactLinksProps = {
    contactLinks: contactLinkInterface[]
}

const ContactLinks: React.FC<ContactLinksProps> = ({ contactLinks }) => {
    return (
        <StyleContainer>
            {contactLinks.map((element) => (
                <ContactLink
                    key={element.id} 
                    text={element.text} 
                    icon={element.icon} 
                    linkText={element.linkText} 
                    link={element.link} 
                />
            ))}
        </StyleContainer>
    )
}

export default ContactLinks