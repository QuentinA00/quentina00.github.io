import { AppTextInterface } from "../../../interfaces/appTextInterfaces"
import MenuBarElement from "./MenuBarElement"

interface MenuBarInterface {
    menuBarElements:AppTextInterface['menuBar']
    setMenuBarSelectedElement: (id:MenuBarInterface['menuBarSelectedElement']) => void
    menuBarSelectedElement:number|null
}

const MenuBar:React.FC<MenuBarInterface> = ({menuBarElements, setMenuBarSelectedElement, menuBarSelectedElement}) => {

    const handleSelection = (id:number|null) => {
        setMenuBarSelectedElement(id)
    }

    return (
        <div className="menuBar">
            {menuBarElements.map(element => (
                <MenuBarElement
                key={element.id}
                elementData={element}
                isElementSelected={menuBarSelectedElement === element.id}
                setSelectedElement={handleSelection}
                />
            ))}
        </div>
    )
}

export default MenuBar