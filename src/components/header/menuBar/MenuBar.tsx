import { Link } from "react-router-dom"
import { AppTextInterface } from "../../../interfaces/appTextInterfaces"
import MenuBarElement from "./MenuBarElement"

interface MenuBarProps {
    menuBarElements:AppTextInterface['menuBar']
}


const MenuBar:React.FC<MenuBarProps> = ({menuBarElements}) => {
    
    return (
        <div className="menuBar">
            {menuBarElements.map(element => (
                <Link 
                    to={element.id}
                    key={element.id}
                >
                    <MenuBarElement menuBarElementData={element}/>
                </Link>
            ))}
        </div>
    )
}

export default MenuBar