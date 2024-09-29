import { MenuBarItemInterface } from "../../../interfaces/appTextInterfaces"
import ButtonWithIcon from "../../ButtonWithIcon"

interface MenuBarSubMenuProps {
    subMenuItems:MenuBarItemInterface['subMenuItems']
}

const MenuBarSubMenu:React.FC<MenuBarSubMenuProps> = ({subMenuItems}) => {

    // console.log(subMenuItems)

    return (
        <div className="menuBarSubMenu">
            {subMenuItems.map((subMenuItem) => (
                <ButtonWithIcon key={subMenuItem.key} imageName={subMenuItem.icon} text={subMenuItem.key}/>
            ))}
        </div>
    )
}

export default MenuBarSubMenu