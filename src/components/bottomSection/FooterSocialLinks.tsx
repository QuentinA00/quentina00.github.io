import { BottomSectionLinkInterface } from "../../interfaces/appTextInterfaces"
import ButtonWithIcon from "../ButtonWithIcon"

interface FooterSocialLinksProps {
    itemsLink:BottomSectionLinkInterface[]
}

const FooterSocialLinks:React.FC<FooterSocialLinksProps> = ({itemsLink}) => {
    return (
        <div className="footerSocialLinks">
            {itemsLink.map(element => (
                <ButtonWithIcon key={element.id} imageName={element.icon} className="linkItem" description={element.description}/>
            ))}
            {/* <SvgIcon icon={icon}/> */}
        </div>
    )
}

export default FooterSocialLinks