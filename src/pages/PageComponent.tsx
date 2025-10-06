import { PagesTextInterface } from "../interfaces/appTextInterfaces"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"
import AnimationWrapper from "../components/AnimationWrapper"

interface PageComponentProps {
    pageItem: PagesTextInterface
    appText:AppTextProps['appText']
}

const PageComponent:React.FC<PageComponentProps> = ({pageItem, appText}) => {
    return (
        <div className="pageComponent">

            <h2>{pageItem.text}</h2>

            <AnimationWrapper className="pageComponent-pages">
                {pageItem.id === '' && <Home/>}
                {pageItem.id === 'projects' && <Projects/>}
                {pageItem.id === 'contact' && <Contact contactData={appText.contact}/>}
            </AnimationWrapper>

        </div>
    )
}

export default PageComponent