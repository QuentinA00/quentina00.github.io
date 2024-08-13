import React from "react"
import Title from "./Title"
import { AppTextInterface } from "../../interfaces/appTextInterfaces"
import MenuBar from "./menuBar/MenuBar"

interface HeaderInterface {
    appText: AppTextInterface
}

const Header:React.FC<HeaderInterface> = ({appText}) => {
    return (
        <div className="header">
            <Title titleText={appText.title}/>
            <MenuBar menuBarElements={appText.menuBar}/>
        </div>
    )
}

export default Header