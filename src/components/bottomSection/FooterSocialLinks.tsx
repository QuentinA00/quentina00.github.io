import { BottomSectionLinkInterface } from "../../interfaces/appTextInterfaces"
import ButtonWithIcon from "../ButtonWithIcon"

interface FooterSocialLinksProps {
    itemsLink:BottomSectionLinkInterface[]
}

const FooterSocialLinks:React.FC<FooterSocialLinksProps> = ({itemsLink}) => {
    return (
        <div className="footerSocialLinks">
            {itemsLink.map(element => (
                <a key={element.id} href={element.link} target='_blank'>
                    <ButtonWithIcon imageName={element.icon} className="linkItem" description={element.description}/>
                </a>
            ))}
        </div>
    )
}

export default FooterSocialLinks