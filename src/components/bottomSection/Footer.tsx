import { AnimatePresence } from "framer-motion"
import { AppTextInterface } from "../../interfaces/appTextInterfaces"
import AnimationWrapper from "../AnimationWrapper"
import FooterSocialLinks from "./FooterSocialLinks"

interface FooterProps {
    bottomSectionText:AppTextInterface['bottomSection']
}

const Footer:React.FC<FooterProps> = ({bottomSectionText}) => {
    return (
        <AnimatePresence mode="wait">
            <AnimationWrapper transitionDuration={.8}>
                <div className="footer">
                    <h3>{bottomSectionText.contact}</h3>
                    <div className="footerItems">
                        <p>{bottomSectionText.mail}</p>
                        <FooterSocialLinks itemsLink={bottomSectionText.professionalLinks}/>
                        <div className="footerDivider divider2"></div>
                        <div className="footerItems-bottomSection">
                            <p>{bottomSectionText.personalAccount}</p>
                            <FooterSocialLinks itemsLink={bottomSectionText.personalLinks}/>
                        </div>
                        <br />
                        <br />
                        <p title={bottomSectionText.copyright.title} className="footer-copyright">{bottomSectionText.copyright.text}</p>
                    </div>
                </div>
            </AnimationWrapper>
        </AnimatePresence>
    )
}

export default Footer