import { Link } from "react-router-dom"
import { AppTextInterface } from "../../../interfaces/appTextInterfaces"
import MenuBarItem from "./MenuBarItem"
import { useMediaQuery } from "react-responsive"
import { screen_mobile, screen_tinyMobile } from "../../../utils/responsiveUtils"


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// MenuBar is a combination of :
// - the existing 'pages' elements in the json
// - the existing 'menuBar' elements in the json
/////////////////////////////////////////////////
/////////////////////////////////////////////////

interface MenuBarProps {
    pageItems:AppTextInterface['pages']
    menuBarItems: AppTextInterface['menuBar']
}

const MenuBar:React.FC<MenuBarProps> = ({pageItems, menuBarItems}) => {

    const isOnMobileScreen = useMediaQuery({maxWidth:screen_mobile})

    const isOnTinyMobile = useMediaQuery({maxWidth:screen_tinyMobile})
    
    return (
        <div className={`menuBar ${isOnMobileScreen ? 'menuBar-mobile' : ''} ${isOnTinyMobile ? 'menuBar-tinyMobile' : ''}`}>

            {/* mapping pages elements */}
            <div className="menuBar-pagesLinks">
                {pageItems.map(pageItem => (
                        <Link 
                            to={pageItem.id}
                            key={pageItem.id}
                        >
                            <MenuBarItem key={pageItem.id} id={pageItem.id} text={pageItem.text}/>
                        </Link>
                ))}
            </div>

            {isOnMobileScreen && <div className="divider2"></div>}

            {/* mapping menuBar elements */}
            <div className="menuBar-items">
                {menuBarItems.map(menuBarItem => (
                    <MenuBarItem key={menuBarItem.id} id={menuBarItem.id} text={menuBarItem.text} icon={menuBarItem.icon}/>
                ))}
            </div>
            
            {/* <MenuBarSubMenu subMenuItems={menuBarItem.subMenuItems}/> */}

        </div>
    )
}

export default MenuBar