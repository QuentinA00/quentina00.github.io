import { useMediaQuery } from "react-responsive"
import { screen_mobile, screen_tinyMobile } from "../../../utils/responsiveUtils"
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
        padding: 1.5rem;
        border-radius: 1rem;
        flex-direction: column;
        row-gap: 2rem;
        margin-right: 0;
    }
    &.menuBar-tinyMobile {
        background: var(--color3);
        flex-direction: column;
        align-items: center;
        width: 80%;
    }
`

const MenuBar = () => {

    const isOnMobile = useMediaQuery({maxWidth:screen_mobile})
    const isOnTinyMobile = useMediaQuery({maxWidth:screen_tinyMobile})

    // get app text from context
    const {appText} = useLanguage()
    
    return (
        <StyleContainer className={`${isOnMobile ? 'menuBar-mobile' : ''} ${isOnTinyMobile ? 'menuBar-tinyMobile' : ''}`}>
            <MenuBarPages pageItems={appText.pages} isOnMobile={isOnMobile} isOnTinyMobile={isOnTinyMobile}/>
            {isOnMobile && <div className="divider2"></div>}
            <MenuBarItems menuBarItems={appText.menuBar} />
        </StyleContainer>
    )
}

export default MenuBar