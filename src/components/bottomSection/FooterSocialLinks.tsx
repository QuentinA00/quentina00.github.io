import { BottomSectionItemInterface } from "../../interfaces/appTextInterfaces"
import ButtonWithIcon from "../ButtonWithIcon"

interface FooterSocialLinksProps {
    footerSocialLinks:BottomSectionItemInterface[]
}

const FooterSocialLinks:React.FC<FooterSocialLinksProps> = ({footerSocialLinks}) => {
    return (
        <div className="footerSocialLinks">
            {footerSocialLinks.map(element => (
                <ButtonWithIcon key={element.id} imageName={element.icon} className="contactItem"/>
            ))}
        </div>
    )
}

export default FooterSocialLinks