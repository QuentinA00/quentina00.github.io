import { AppTextInterface } from "../interfaces/appTextInterfaces"
// import InnerPage from "../components/innerPages/InnerPage"
import AnimationWrapper from "../components/AnimationWrapper"
// import PostContainer from "../components/post/PostContainer"
import Presentation from "../components/innerPages/Presentation"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import PostContainer from "../components/post/PostContainer"
import { fetchWithPromise } from "../utils/api/promiseWrapper"
import { PostsInterfaceWithLanguage } from "../interfaces/postsInterfaces"
import { AnimatePresence } from "framer-motion"

const postsPromise = fetchWithPromise('./assets/jsons/posts.json')

interface HomeProps {
    appText:AppTextInterface
    setAppLanguage: AppTextProps['setAppLanguage']
    appLanguage:AppTextProps['appLanguage']
}

const Home:React.FC<HomeProps> = ({appText, appLanguage}) => {

    // console.log('------Home',pageTransitionInOut)

    // gather posts data from json, according to the selected language
    const postsData:PostsInterfaceWithLanguage[typeof appLanguage] = postsPromise()[appLanguage]

    // gather presentation element(s) from posts.json
    const presentationPosts = postsData.presentation

    return (
        <div className="home">
            {presentationPosts.map((presentationPost) => <PostContainer key={presentationPost.id} postData={presentationPost} className="home"/>)}
        </div>
    )
}

export default Home