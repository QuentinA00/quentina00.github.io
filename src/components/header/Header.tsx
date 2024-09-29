import Title from "./Title"
import { AppTextInterface } from "../../interfaces/appTextInterfaces"
import MenuBar from "./menuBar/MenuBar"
import { useMediaQuery } from "react-responsive"
import { screen_mobilePlus } from "../../utils/responsiveUtils"
import AnimationWrapper from "../AnimationWrapper"
import { headerAppearance, slideFromTop } from "../../style/animations/animations"
import { AnimatePresence } from "framer-motion"


interface HeaderProps {
    appText: AppTextInterface
}

const Header:React.FC<HeaderProps> = ({appText}) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobilePlus})

    // console.log('screen_mobile : ',screen_mobile ? 'oui' : 'non')
    // console.log('mobileScreen : ',mobileScreen ? 'oui' : 'non')

    return (
        <AnimatePresence mode='wait'>
            <AnimationWrapper transitionDuration={.5} animationType={headerAppearance}>
                <div className={`header ${mobileScreen ? 'header-mobile' : ''}`}>
                    <div className="header-topSection">
                        <Title titleText={appText.title}/>
                        <MenuBar pageItems={appText.pages} menuBarItems={appText.menuBar}/>
                    </div>
                    {/* <div className="divider2"></div> */}
                </div>
            </AnimationWrapper>
        </AnimatePresence>
    )
}

export default Header