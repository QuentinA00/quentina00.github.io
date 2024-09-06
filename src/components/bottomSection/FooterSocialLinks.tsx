import { BottomSectionItemInterface } from "../../interfaces/appTextInterfaces"
import ButtonWithIcon from "../ButtonWithIcon"
import SvgIcon from "../SvgIcon"
// import {ReactComponent as icon} from '../../../public/assets/icons/github.svg'

interface FooterSocialLinksProps {
    footerSocialLinks:BottomSectionItemInterface[]
}

const FooterSocialLinks:React.FC<FooterSocialLinksProps> = ({footerSocialLinks}) => {

    // console.log(icon)

    return (
        <div className="footerSocialLinks">
            {footerSocialLinks.map(element => (
                <ButtonWithIcon key={element.id} imageName={element.icon} className="contactItem"/>
            ))}
            {/* <SvgIcon icon={icon}/> */}
        </div>
    )
}

export default FooterSocialLinks