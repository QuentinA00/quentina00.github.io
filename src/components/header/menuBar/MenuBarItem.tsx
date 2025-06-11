import { AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import AnimationWrapper from "../../AnimationWrapper"
import ButtonWithIcon from "../../ButtonWithIcon"
import { screen_mobile } from "../../../utils/responsiveUtils"
import { useMediaQuery } from "react-responsive"
import { useSlidingMenu } from "../../../contexts/SlidingMenuContextProvider"

interface MenuBarItemProps {
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

    const isOnMobileScreen = useMediaQuery({maxWidth:screen_mobile})
    const { openMenu } = useSlidingMenu()

    const handleIconClick = () => {
        if (icon) openMenu()
    }

    return (
        <div className={`menuBarItem ${isOnMobileScreen ? 'menuBarItem-mobile' : '' }`}>
            
            {/* if there isn't icon, then only the text is displayed, and the class is menuBarItem-buttonWithText */}
            {!icon && <div className="menuBarItem-buttonWithText">{text}</div>}
            
            {/* if there is an icon, then we use the component ButtonWithIcon, and the class is menuBarItem-buttonWithIcon */}
            {icon && (
                <div onClick={handleIconClick} style={{ cursor: 'pointer' }}>
                    <ButtonWithIcon imageName={icon} description={text} className="menuBarItem-buttonWithIcon"/>
                </div>
            )}

            <AnimatePresence mode="wait">
                {isElementSelected && <AnimationWrapper transitionDuration={.2} className="menuBarItem-dotPoint"/>}
            </AnimatePresence>
            
            {/* {pageItemData.settings && <MenuBarSettings menuBarSettingsItems={pageItemData.settings} isHidden={true}/>} */}
        </div>
    )
}

export default MenuBarItem