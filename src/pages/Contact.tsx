import { useMediaQuery } from "react-responsive"
import { screen_mobile } from "../utils/responsiveUtils"
import styled from "styled-components"
import { useLanguage } from "../contexts/LanguageContextProvider"
import ContactLinks from "../components/contact/ContactLinks"

const StyleContainer = styled.div`
    display: flex;
    flex-direction:column;
    transition:.1s ease-in-out;
    row-gap:3rem;
    align-items:center;
    margin-top:2rem;

    & > p{
        font-weight:600;
    }
`

const Contact = () => {

    const isOnMobileScreen = useMediaQuery({maxWidth:screen_mobile})

    const {appText} = useLanguage()
    const contactText = appText.contact

    return (
        <StyleContainer className={isOnMobileScreen ? 'contact-mobile' : ''}>
            <h4>{contactText.heading}</h4>
            <ContactLinks contactLinks={contactText.contactLinks}/>
        </StyleContainer>
    )
}

export default Contact