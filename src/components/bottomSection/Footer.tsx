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
                <svg viewBox="0 0 24 24">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
            </div>
        </div>
    )
}

export default Footer