import styled from 'styled-components'
import { AppTextInterface } from '../../../interfaces/appTextInterfaces'
import MenuBarItem from './MenuBarItem'
import { useRef, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { AnimatePresence } from 'framer-motion'
import { useCloseMenu } from '../../../hooks/useCloseMenu'

const StyleContainer = styled.div`
    column-gap: 1rem;
    display: flex;
    position:relative;
`

interface MenuBarItemsProps {
    menuBarItems:AppTextInterface['menuBar']
}

const MenuBarItems: React.FC<MenuBarItemsProps> = ({menuBarItems}) => {

    const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false)

    // refs that shouldn't trigger the closing of the language switcher menu
    const languageSwitcherRef = useRef<HTMLDivElement>(null)
    const triggerButtonRef = useRef<HTMLDivElement>(null)

    // toggle is for when clicking on the button itself
    const toggleLanguageSwitcher = () => setShowLanguageSwitcher(!showLanguageSwitcher)

    // this one is for when clicking outside the language switcher menu, or when pressing escape key
    const closeLanguageSwitcher = () => setShowLanguageSwitcher(false)

    // use the hook useCloseMenu and provide it the props
    useCloseMenu({
        openingState: showLanguageSwitcher,
        closing: closeLanguageSwitcher,
        ref: languageSwitcherRef,
        refsToExclude: [triggerButtonRef]
    })

    return (
        <StyleContainer>
            {menuBarItems.map(menuBarItem => (
                <MenuBarItem 
                    key={menuBarItem.id} 
                    id={menuBarItem.id} 
                    text={menuBarItem.text} 
                    icon={menuBarItem.icon} 
                    toggleLanguageSwitcher={toggleLanguageSwitcher}
                    ref={menuBarItem.icon ? triggerButtonRef : undefined}
                />
            ))}

            <AnimatePresence mode='wait'>
                {showLanguageSwitcher && <LanguageSwitcher ref={languageSwitcherRef}/>}
            </AnimatePresence>
            
            {/* <MenuBarSubMenu subMenuItems={menuBarItem.subMenuItems}/> */}
        </StyleContainer>
    )
}

export default MenuBarItems