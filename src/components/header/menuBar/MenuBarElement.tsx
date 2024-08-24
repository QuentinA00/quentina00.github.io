import { AnimatePresence, motion } from "framer-motion"
import { MenuBarElementInterface } from "../../../interfaces/appTextInterfaces"
import MenuBarSettings from "./MenuBarSettings"
import { useLocation } from "react-router-dom"
import AnimationWrapper from "../../AnimationWrapper"
import { zoomEffect } from "../../../style/animations/animations"

interface MenuBarElementProps {
    menuBarElementData:MenuBarElementInterface
}

const MenuBarElement:React.FC<MenuBarElementProps> = ({ menuBarElementData }) => {

    // function to gather the current path
    const location = useLocation()

    // comparing the current path in the app, with the component's
    // slice is used because pathname is returning a path with a "/", so we want to gather only the path name without the "/"
    const isElementSelected = location.pathname.slice(1) === menuBarElementData.id

    return (
        <div className="menuBarElement">
            <p>{menuBarElementData.text}</p>

            <AnimatePresence mode="wait">
                {isElementSelected &&
                    <AnimationWrapper transitionDuration={.2} animationType={zoomEffect} className="menuBarElement-dotPoint"/>
                }
            </AnimatePresence>
            
            {menuBarElementData.settings && <MenuBarSettings menuBarSettingsItems={menuBarElementData.settings} isHidden={true}/>}
        </div>
    )
}

export default MenuBarElement