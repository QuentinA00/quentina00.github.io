import { AppTextInterface } from "../interfaces/appTextInterfaces"
import { AppTextProps } from "../interfaces/globalPropsInterfaces"
import PostContainer from "../components/post/PostContainer"
import { fetchWithPromise } from "../utils/api/promiseWrapper"
import { PostsInterfaceWithLanguage } from "../interfaces/postsInterfaces"

const postsPromise = fetchWithPromise('./assets/jsons/posts.json')

interface HomeProps {
    appText:AppTextInterface
    setAppLanguage: AppTextProps['setAppLanguage']
    appLanguage:AppTextProps['appLanguage']
}

const Home:React.FC<HomeProps> = ({appLanguage}) => {

    // gather posts data from json, according to the selected language
    const postsData:PostsInterfaceWithLanguage[typeof appLanguage] = postsPromise()[appLanguage]

    // gather presentation element(s) from posts.json
    const presentationPosts = postsData.presentation

    return (
        <div className="home">
            {presentationPosts.map((presentationPost) => <PostContainer key={presentationPost.id} postData={presentationPost} variantType='presentation'/>)}
        </div>
    )
}

export default Home