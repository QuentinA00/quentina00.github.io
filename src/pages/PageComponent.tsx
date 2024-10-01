import { AnimatePresence } from "framer-motion"
import { PagesTextInterface } from "../interfaces/appTextInterfaces"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"
import AnimationWrapper from "../components/AnimationWrapper"

interface PageComponentProps {
    pageItem: PagesTextInterface
    
    // props from AppTextProps
    appLanguage:AppTextProps['appLanguage']
    setAppLanguage: AppTextProps['setAppLanguage']
    appText:AppTextProps['appText']
}

const PageComponent:React.FC<PageComponentProps> = ({pageItem, appLanguage, appText, setAppLanguage}) => {
    return (
        <div className="pageComponent">

            <h2>{pageItem.text}</h2>

            <AnimationWrapper className="pageComponent-pages">
                {pageItem.id === '' && <Home key={pageItem.id} appText={appText} setAppLanguage={setAppLanguage} appLanguage={appLanguage}/>}
                {pageItem.id === 'projects' && <Projects key={pageItem.id} appLanguage={appLanguage} appText={appText}/>}
                {pageItem.id === 'contact' && <Contact key={pageItem.id} contactData={appText.contact}/>}
            </AnimationWrapper>

        </div>
    )
}

export default PageComponent