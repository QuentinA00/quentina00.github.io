import styled from 'styled-components'
import { AppTextInterface } from '../../../interfaces/appTextInterfaces'
import MenuBarItem from './MenuBarItem'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { AnimatePresence } from 'framer-motion'

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

    const toggleLanguageSwitcher = () => setShowLanguageSwitcher(!showLanguageSwitcher)

    return (
        <StyleContainer>
            {menuBarItems.map(menuBarItem => (
                <MenuBarItem key={menuBarItem.id} id={menuBarItem.id} text={menuBarItem.text} icon={menuBarItem.icon} toggleLanguageSwitcher={toggleLanguageSwitcher} />
            ))}

            <AnimatePresence mode='wait'>
                {showLanguageSwitcher && <LanguageSwitcher/>}
            </AnimatePresence>
            
            {/* <MenuBarSubMenu subMenuItems={menuBarItem.subMenuItems}/> */}
        </StyleContainer>
    )
}

export default MenuBarItems