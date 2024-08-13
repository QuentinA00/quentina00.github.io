import { MenuBarElementInterface } from "../../../interfaces/appTextInterfaces"

interface MenuBarElementProps {
    elementData:MenuBarElementInterface
    isElementSelected:boolean
    setSelectedElement: (id:number) => void
}

const MenuBarElement:React.FC<MenuBarElementProps> = ({elementData, isElementSelected, setSelectedElement}) => {
    return (
        <div className="menuBarElement" onClick={() => setSelectedElement(elementData.id)}>
            <p>{elementData.text}</p>
            {isElementSelected && <div className="dotPoint">.</div>}
            {elementData.settingMenu && <div className="settingMenu">{elementData.settingMenu.darkMode}</div>}
        </div>
    )
}

export default MenuBarElement