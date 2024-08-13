import { useState } from "react"
import { AppTextInterface } from "../../../interfaces/appTextInterfaces"
import MenuBarElement from "./MenuBarElement"

interface MenuBarInterface {
    menuBarElements:AppTextInterface['menuBar']
}

const MenuBar:React.FC<MenuBarInterface> = ({menuBarElements}) => {

    // to keep track of the state of a selected component in MenuBar
    const [selectedElement, setSelectedElement] = useState<number|null>(null)

    const handleSelection = (id:number) => {
        setSelectedElement(id)
    }

    return (
        <div className="menuBar">
            {menuBarElements.map(element => (
                <MenuBarElement
                    key={element.id}
                    elementData={element}
                    isElementSelected={selectedElement === element.id}
                    setSelectedElement={handleSelection}
                />
            ))}
        </div>
    )
}

export default MenuBar