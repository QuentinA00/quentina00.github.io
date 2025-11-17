import styled from "styled-components"
import { SocialLinkInterface } from "../../interfaces/appTextInterfaces"
import SocialLink from "./SocialLink"

const StyleContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    height: 2.5rem;
    align-items: center;
    flex-flow: wrap;
    justify-content: center;
`

interface SocialLinksProps {
    itemsLink:SocialLinkInterface[]
}

const SocialLinks:React.FC<SocialLinksProps> = ({itemsLink}) => {
    return (
        <StyleContainer>
            {itemsLink.map(element => (
                <SocialLink 
                    key={element.id} 
                    icon={element.icon} 
                    description={element.description} 
                    link={element.link} 
                />
            ))}
        </StyleContainer>
    )
}

export default SocialLinks