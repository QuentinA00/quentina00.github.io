import { AnimatePresence } from "framer-motion"
// import { MenuBarItemInterface } from "../../../interfaces/appTextInterfaces"
import MenuBarSettings from "./MenuBarSettings"
import { useLocation } from "react-router-dom"
import AnimationWrapper from "../../AnimationWrapper"
import { zoomEffect } from "../../../style/animations/animations"
import ButtonWithIcon from "../../ButtonWithIcon"
import { PagesTextInterface } from "../../../interfaces/appTextInterfaces"

interface MenuBarItemProps {
    // pageItemData:PagesTextInterface
    id:string
    text:string
    icon?:string
}

const MenuBarItem:React.FC<MenuBarItemProps> = ({ id,text,icon }) => {

    // function to gather the current path
    const location = useLocation()

    // comparing the current path in the app, with the component's
    // slice is used because pathname is returning a path with a "/", so we want to gather only the path name without the "/"
    const isElementSelected = location.pathname.slice(1) === id

    // to check if it's the settings element
    // const isSettingsElement = pageItemData.id === 'settings'

    return (
        <div className="menuBarElement">
            
            <p>{text}</p>
            
            {icon && <ButtonWithIcon imageName={icon} description={text}/>}

            <AnimatePresence mode="wait">
                {isElementSelected &&
                    <AnimationWrapper transitionDuration={.2} animationType={zoomEffect} className="menuBarElement-dotPoint"/>
                }
            </AnimatePresence>
            
            {/* {pageItemData.settings && <MenuBarSettings menuBarSettingsItems={pageItemData.settings} isHidden={true}/>} */}
        </div>
    )
}

export default MenuBarItem