import { AppTextInterface } from "../../interfaces/appTextInterfaces"
import ButtonWithIcon from "../ButtonWithIcon"
import FooterSocialLinks from "./FooterSocialLinks"

interface FooterProps {
    footerText:AppTextInterface['bottomSection']
}

const Footer:React.FC<FooterProps> = ({footerText}) => {
    return (
        <div className="footer">
            <p>{footerText.contact}</p>
            <p>{footerText.personalAccount}</p>
            <p>{footerText.mail}</p>
            <div className="divider"></div>
            <FooterSocialLinks footerSocialLinks={footerText.items}/>
        </div>
    )
}

export default Footer