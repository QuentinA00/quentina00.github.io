import { AnimatePresence } from "framer-motion"
import { AppTextInterface } from "../../interfaces/appTextInterfaces"
import AnimationWrapper from "../AnimationWrapper"
import FooterSocialLinks from "./FooterSocialLinks"

interface FooterProps {
    footerText:AppTextInterface['bottomSection']
}

const Footer:React.FC<FooterProps> = ({footerText}) => {
    return (
        <AnimatePresence mode="wait">
            <AnimationWrapper transitionDuration={.8}>
                <div className="footer">
                    <h3>{footerText.contact}</h3>
                    <div className="footerItems">
                        <p>{footerText.mail}</p>
                        <FooterSocialLinks itemsLink={footerText.professionalLinks}/>
                        <div className="footerDivider divider2"></div>
                        <div className="footerItems-bottomSection">
                            <p>{footerText.personalAccount}</p>
                            <FooterSocialLinks itemsLink={footerText.personalLinks}/>
                        </div>
                    </div>
                </div>
            </AnimationWrapper>
        </AnimatePresence>
    )
}

export default Footer