import Title from "./Title"
import { AppTextInterface } from "../../interfaces/appTextInterfaces"
import MenuBar from "./menuBar/MenuBar"
import { useMediaQuery } from "react-responsive"
import { screen_mobilePlus } from "../../utils/responsiveUtils"
import AnimationWrapper from "../AnimationWrapper"
import { slideFromTop } from "../../style/animations/animations"


interface HeaderProps {
    appText: AppTextInterface
}

const Header:React.FC<HeaderProps> = ({appText}) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobilePlus})

    // console.log('screen_mobile : ',screen_mobile ? 'oui' : 'non')
    // console.log('mobileScreen : ',mobileScreen ? 'oui' : 'non')

    return (
        <AnimationWrapper transitionDuration={.8} animationType={slideFromTop}>
            <div className={`header ${mobileScreen ? 'header-mobile' : ''}`}>
                <Title titleText={appText.title}/>
                <MenuBar pageItems={appText.pages} menuBarItems={appText.menuBar}/>
            </div>
        </AnimationWrapper>
    )
}

export default Header