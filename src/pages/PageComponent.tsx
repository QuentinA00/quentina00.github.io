import { PagesTextInterface } from "../interfaces/appTextInterfaces"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"
import AnimationWrapper from "../components/AnimationWrapper"

interface PageComponentProps {
    pageItem: PagesTextInterface
}

const PageComponent:React.FC<PageComponentProps> = ({pageItem}) => {

    const renderPage = () => {
        switch (pageItem.id) {
            case '':
                return <Home/>
            case 'projects':
                return <Projects/>
            case 'contact':
                return <Contact/>
            default:
                // ensures compile-time exhaustiveness if PageId changes
                return null
        }
    }

    return (
        <div className="pageComponent">

            <h2>{pageItem.text}</h2>

            <AnimationWrapper className="pageComponent-pages">
                {renderPage()}
            </AnimationWrapper>

        </div>
    )
}

export default PageComponent