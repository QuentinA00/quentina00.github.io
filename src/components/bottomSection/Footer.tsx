import { AppTextInterface } from "../../interfaces/appTextInterfaces"
import FooterSocialLinks from "./FooterSocialLinks"

interface FooterProps {
    footerText:AppTextInterface['bottomSection']
}

const Footer:React.FC<FooterProps> = ({footerText}) => {
    return (
        <div className="footer">
            <h3>{footerText.contact}</h3>
            <div className="footerItems">
                <p>{footerText.mail}</p>
                <FooterSocialLinks itemsLink={footerText.professionalLinks}/>
                <div className="footerDivider divider"></div>
                <div className="footerItems-bottomSection">
                    <p>{footerText.personalAccount}</p>
                    <FooterSocialLinks itemsLink={footerText.personalLinks}/>
                </div>
            </div>
        </div>
    )
}

export default Footer