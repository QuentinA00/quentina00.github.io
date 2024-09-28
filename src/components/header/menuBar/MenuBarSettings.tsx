import React from "react"
import MenuBarSettingsItem from "./MenuBarSettingsItem"
import { MenuBarItemInterface } from "../../../interfaces/appTextInterfaces"

interface MenuBarSettingsProps {
    menuBarSettingsItems:MenuBarItemInterface['settings']
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