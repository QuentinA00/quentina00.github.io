import React from "react"
import { MenuBarElementInterface } from "../../../interfaces/appTextInterfaces"
import MenuBarSettingsItem from "./MenuBarSettingsItem"

interface MenuBarSettingsProps {
    menuBarSettingsItems:MenuBarElementInterface['settings']
    isHidden:boolean
}

const MenuBarSettings:React.FC<MenuBarSettingsProps> = ({menuBarSettingsItems, isHidden}) => {
    return (
        <div className={`menuBarSettings ${isHidden ? '' : 'menuBarSettings-visible'}`} >
            {menuBarSettingsItems && menuBarSettingsItems.map(settingsElement => (
                <MenuBarSettingsItem key={settingsElement.key} text={settingsElement.text} idKey={settingsElement.key} />
            ))}
        </div>
    )
}

export default MenuBarSettings