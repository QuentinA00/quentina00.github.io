import { AnimatePresence, motion } from "framer-motion"
import { MenuBarElementInterface } from "../../../interfaces/appTextInterfaces"
import MenuBarSettings from "./MenuBarSettings"
import { useLocation } from "react-router-dom"

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

            <AnimatePresence>
                {isElementSelected &&
                    <motion.div
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        transition={{duration:.2}}
                    >
                        <div className="menuBarElement-dotPoint"></div>
                    </motion.div>
                }
            </AnimatePresence>
            
            {menuBarElementData.settings && <MenuBarSettings menuBarSettingsItems={menuBarElementData.settings} isHidden={true}/>}
        </div>
    )
}

export default MenuBarElement