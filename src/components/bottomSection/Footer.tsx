import { AnimatePresence } from "framer-motion"
import AnimationWrapper from "../AnimationWrapper"
import { useLanguage } from "../../contexts/LanguageContextProvider"
import SocialLinks from "./SocialLinks"

const Footer = () => {

    const {appText} = useLanguage()
    const footerText = appText.bottomSection

    return (
        <AnimatePresence mode="wait">
            <AnimationWrapper transitionDuration={.8}>
                <div className="footer">
                    <h3>{footerText.contact}</h3>
                    <div className="footerItems">
                        <p>{footerText.mail}</p>
                        <SocialLinks itemsLink={footerText.socialLinks}/>
                        <br />
                        <br />
                        <p title={footerText.copyright.title} className="footer-copyright">{footerText.copyright.text}</p>
                    </div>
                </div>
            </AnimationWrapper>
        </AnimatePresence>
    )
}

export default Footer