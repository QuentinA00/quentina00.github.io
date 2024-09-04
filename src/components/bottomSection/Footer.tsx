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
                <div className="footerDivider divider"></div>
                <p>{footerText.personalAccount}</p>
                <FooterSocialLinks footerSocialLinks={footerText.items}/>
                
            </div>
        </div>
    )
}

export default Footer