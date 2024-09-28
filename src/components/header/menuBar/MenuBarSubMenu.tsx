import { MenuBarItemInterface } from "../../../interfaces/appTextInterfaces"

interface MenuBarSubMenuProps {
    subMenuItems:MenuBarItemInterface['subMenu']
}

const MenuBarSubMenu:React.FC<MenuBarSubMenuProps> = ({subMenuItems}) => {
    return (
        <div className="menuBarSubMenu">

        </div>
    )
}

export default MenuBarSubMenu