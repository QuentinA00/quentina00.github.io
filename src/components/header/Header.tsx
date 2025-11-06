import Title from "./Title"
import MenuBar from "./menuBar/MenuBar"
import { useMediaQuery } from "react-responsive"
import { screen_tablet_small } from "../../utils/responsiveUtils"
import AnimationWrapper from "../AnimationWrapper"
import { headerAppearance } from "../../style/animations/animations"
import { AnimatePresence } from "framer-motion"
import { useLanguage } from "../../contexts/LanguageContextProvider"
import styled from "styled-components"

const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    transition:ease-in-out .1s;

    &.header-tabletSmall {
        & .header-topSection{
            flex-direction: column;
            row-gap: 3rem;
            margin: 0 1rem;
        }
    }
    
    & .header-topSection{
        margin: 0rem 2rem;
        display: flex;
        flex-grow: 1;
        justify-content:space-between;
        transition:ease-in-out .1s;
    }
`

const Header = () => {

    const screenTabletSmall = useMediaQuery({maxWidth:screen_tablet_small})

    const {appText} = useLanguage()

    return (
        <AnimatePresence mode='wait'>
            <AnimationWrapper transitionDuration={.5} animationType={headerAppearance}>
                <StyleContainer className={`header ${screenTabletSmall ? 'header-tabletSmall' : ''}`}>
                    <div className="header-topSection">
                        <Title titleText={appText.title}/>
                        <MenuBar/>
                    </div>
                </StyleContainer>
            </AnimationWrapper>
        </AnimatePresence>
    )
}

export default Header