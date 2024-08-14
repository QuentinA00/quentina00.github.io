import { AnimatePresence, motion } from "framer-motion"
import { MenuBarElementInterface } from "../../../interfaces/appTextInterfaces"
import MenuBarSettings from "./MenuBarSettings"

interface MenuBarElementProps {
    menuBarElementData:MenuBarElementInterface
    isElementSelected:boolean
    setSelectedElement: (id:number) => void
}

const MenuBarElement:React.FC<MenuBarElementProps> = ({menuBarElementData, isElementSelected, setSelectedElement}) => {
    return (
        <div className="menuBarElement" onClick={() => setSelectedElement(menuBarElementData.id)}>
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