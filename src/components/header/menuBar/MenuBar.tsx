import { useMediaQuery } from "react-responsive"
import { screen500, screen700 } from "../../../utils/responsiveUtils"
import { useLanguage } from "../../../contexts/LanguageContextProvider"
import MenuBarPages from "./MenuBarPages"
import MenuBarItems from "./MenuBarItems"
import styled from "styled-components"

const StyleContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    column-gap: 1rem;
    transition: ease-in-out .2s;
    margin-right: 2rem;

    &.menuBar-mobile {
        flex-direction: column-reverse;
        row-gap: 1.5rem;
        margin-right: 0;
        width:100%;
    }
`

const MenuBar = () => {

    const isOnMobile = useMediaQuery({maxWidth:screen700})
    const isOnTinyMobile = useMediaQuery({maxWidth:screen500})

    // get app text from context
    const {appText} = useLanguage()
    
    return (
        <StyleContainer className={`${isOnMobile ? 'menuBar-mobile' : ''}`}>
            <MenuBarPages pageItems={appText.pages} isOnMobile={isOnMobile} isOnTinyMobile={isOnTinyMobile}/>
            {isOnMobile && <div className="divider2"></div>}
            <MenuBarItems menuBarItems={appText.menuBar} />
        </StyleContainer>
    )
}

export default MenuBar