import { AppTextInterface } from "../interfaces/appTextInterfaces"
// import InnerPage from "../components/innerPages/InnerPage"
import AnimationWrapper from "../components/AnimationWrapper"
// import PostContainer from "../components/post/PostContainer"
import Presentation from "../components/innerPages/Presentation"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"

interface HomeProps {
    appText:AppTextInterface
    setAppLanguage: AppTextProps['setAppLanguage']
}

const Home:React.FC<HomeProps> = ({appText}) => {

    // console.log('------Home',pageTransitionInOut)

    return (
        <AnimationWrapper>
            <div className='home'>
                {/* <InnerPage appText={appText}/> */}
                <Presentation presentationText={appText?.presentation} />
                {/* <PostContainer postData={appText}/> */}
            </div>
        </AnimationWrapper>
    )
}

export default Home