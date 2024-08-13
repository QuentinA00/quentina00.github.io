import React, { useState } from "react"
import Title from "./Title"
import { AppTextInterface } from "../../interfaces/appTextInterfaces"
import MenuBar from "./menuBar/MenuBar"

interface HeaderProps {
    appText: AppTextInterface
    setMenuBarSelectedElement:(id:number|null) => void
    menuBarSelectedElement:number|null
}

const Header:React.FC<HeaderProps> = ({appText, setMenuBarSelectedElement, menuBarSelectedElement}) => {
    return (
        <div className="header">
            <Title titleText={appText.title} setMenuBarSelectedElement={setMenuBarSelectedElement}/>
            <MenuBar menuBarElements={appText.menuBar} setMenuBarSelectedElement={setMenuBarSelectedElement} menuBarSelectedElement={menuBarSelectedElement}/>
        </div>
    )
}

export default Header