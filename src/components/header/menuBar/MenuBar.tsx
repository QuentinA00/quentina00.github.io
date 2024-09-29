import { Link } from "react-router-dom"
import { AppTextInterface } from "../../../interfaces/appTextInterfaces"
import ButtonWithIcon from "../../ButtonWithIcon"
import MenuBarSettings from "./MenuBarSettings"
import MenuBarItem from "./MenuBarItem"
import MenuBarSubMenu from "./MenuBarSubMenu"


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// MenuBar is a combination of :
// - the existing 'pages' elements in the json
// - the existing 'menuBar' elements in the json
/////////////////////////////////////////////////
/////////////////////////////////////////////////

interface MenuBarProps {
    pageItems:AppTextInterface['pages']
    menuBarItems: AppTextInterface['menuBar']
}

const MenuBar:React.FC<MenuBarProps> = ({pageItems, menuBarItems}) => {
    
    return (
        <div className="menuBar">

            {/* mapping pages elements */}
            {pageItems.map(pageItem => (
                <Link 
                    to={pageItem.id}
                    key={pageItem.id}
                >
                    <MenuBarItem key={pageItem.id} id={pageItem.id} text={pageItem.text}/>
                </Link>
            ))}

            {/* mapping menuBar elements */}
            {menuBarItems.map(menuBarItem => (
                <div key={menuBarItem.id} className="menuBarContainer">
                    <MenuBarItem key={menuBarItem.id} id={menuBarItem.id} text={menuBarItem.text} icon={menuBarItem.icon}/>
                    {/* <MenuBarSubMenu subMenuItems={menuBarItem.subMenuItems}/> */}
                </div>
            ))}
        </div>
    )
}

export default MenuBar