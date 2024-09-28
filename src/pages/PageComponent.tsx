import { PagesTextInterface } from "../interfaces/appTextInterfaces"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"

interface PageComponentProps {
    pageItem: PagesTextInterface
    
    // props from AppTextProps
    appLanguage:AppTextProps['appLanguage']
    setAppLanguage: AppTextProps['setAppLanguage']
    appText:AppTextProps['appText']
}

const PageComponent:React.FC<PageComponentProps> = ({pageItem, appLanguage, appText, setAppLanguage}) => {
    return (
        <div>

            {pageItem.id === '' && <Home appText={appText} setAppLanguage={setAppLanguage}/>}
            {pageItem.id === 'contact' && <Contact/>}
            {pageItem.id === 'projects' && <Projects appLanguage={appLanguage} appText={appText}/>}

        </div>
    )
}

export default PageComponent