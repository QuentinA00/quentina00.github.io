import { MenuBarElementInterface } from "../../../interfaces/appTextInterfaces"
import MenuBarSettings from "./MenuBarSettings"

interface MenuBarElementProps {
    menuBarElementData:MenuBarElementInterface
    isElementSelected:boolean
    setSelectedElement: (id:number) => void
}

const MenuBarElement:React.FC<MenuBarElementProps> = ({menuBarElementData, isElementSelected, setSelectedElement}) => {
    return (
        <div className="menuBarElement" onClick={() => setSelectedElement(menuBarElementData.id)}>
            <p>{menuBarElementData.text}</p>
            {isElementSelected && <div className="menuBarElement-dotPoint"></div>}
            {menuBarElementData.settings && <MenuBarSettings menuBarSettingsItems={menuBarElementData.settings} isHidden={true}/>}
        </div>
    )
}

export default MenuBarElement