import Title from "./Title"
import { AppTextInterface } from "../../interfaces/appTextInterfaces"
import MenuBar from "./menuBar/MenuBar"

interface HeaderProps {
    appText: AppTextInterface
}

const Header:React.FC<HeaderProps> = ({appText, }) => {
    return (
        <div className="header">
            <Title titleText={appText.title}/>
            <MenuBar menuBarElements={appText.menuBar}/>
        </div>
    )
}

export default Header