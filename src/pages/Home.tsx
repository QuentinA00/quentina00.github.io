import { AppTextInterface } from "../interfaces/appTextInterfaces"
import InnerPage from "../components/innerPages/InnerPage"
import { pageTransitionInOut } from "../style/animations/animations"
import AnimationWrapper from "../components/AnimationWrapper"

interface HomeProps {
    appText:AppTextInterface
}

const Home:React.FC<HomeProps> = ({appText}) => {
    return (
        <AnimationWrapper animationType={pageTransitionInOut}>
            <div className='home'>
                <InnerPage appText={appText}/>
            </div>
        </AnimationWrapper>
    )
}

export default Home