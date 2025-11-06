import styled from 'styled-components'
import { AppTextInterface } from '../../../interfaces/appTextInterfaces'
import MenuBarItem from './MenuBarItem'

const StyleContainer = styled.div`
    column-gap: 1rem;
    display: flex;
`

type MenuBarItemsProps = {
    menuBarItems:AppTextInterface['menuBar']
}

const MenuBarItems: React.FC<MenuBarItemsProps> = ({menuBarItems}) => {
    return (
        <StyleContainer>
            {menuBarItems.map(menuBarItem => (
                <MenuBarItem key={menuBarItem.id} id={menuBarItem.id} text={menuBarItem.text} icon={menuBarItem.icon}/>
            ))}

            {/* <MenuBarSubMenu subMenuItems={menuBarItem.subMenuItems}/> */}
        </StyleContainer>
    )
}

export default MenuBarItems