import Title from "./Title"
import MenuBar from "./menuBar/MenuBar"
import { useMediaQuery } from "react-responsive"
import { screen_mobilePlus } from "../../utils/responsiveUtils"
import AnimationWrapper from "../AnimationWrapper"
import { headerAppearance } from "../../style/animations/animations"
import { AnimatePresence } from "framer-motion"
import { useLanguage } from "../../contexts/LanguageContextProvider"

const Header = () => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobilePlus})

    const {appText} = useLanguage()

    return (
        <AnimatePresence mode='wait'>
            <AnimationWrapper transitionDuration={.5} animationType={headerAppearance}>
                <div className={`header ${mobileScreen ? 'header-mobile' : ''}`}>
                    <div className="header-topSection">
                        <Title titleText={appText.title}/>
                        <MenuBar pageItems={appText.pages} menuBarItems={appText.menuBar}/>
                    </div>
                </div>
            </AnimationWrapper>
        </AnimatePresence>
    )
}

export default Header