import { AnimatePresence, motion } from "framer-motion"
import { useLanguage } from "../../contexts/LanguageContextProvider"
import SocialLinks from "./SocialLinks"
import styled from "styled-components"
import { zoomEffect } from "../../style/animations/animations"

const StyleContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
    row-gap: 1rem;
    transition:.1s ease-in-out;

    & .footerItems{
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        align-items: center;
        // min-width: 15rem;

        & .footerDivider{
            width: 100%;
        }
    }
    & .footerItems-bottomSection{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: .5rem;
    }
    & .footer-copyright{
        font-size: .8rem;
        font-weight: 200;
        opacity: .3;
    }
`

const Footer = () => {

    const {appText} = useLanguage()
    const footerText = appText.bottomSection

    return (
        <AnimatePresence mode="wait">
            <StyleContainer
                className="footer"
                variants={zoomEffect}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{duration:.7,ease:'easeInOut'}}
            >
                <h3>{footerText.contact}</h3>
                <div className="footerItems">
                    <p>{footerText.mail}</p>
                    <SocialLinks itemsLink={footerText.socialLinks}/>
                    <br />
                    <br />
                    <p title={footerText.copyright.title} className="footer-copyright">{footerText.copyright.text}</p>
                </div>
            </StyleContainer>
        </AnimatePresence>
    )
}

export default Footer