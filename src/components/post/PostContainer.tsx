import { useMediaQuery } from "react-responsive"
import PostContentSection from "./PostContentSection"
import PostTopSection from "./PostTopSection"
import { screen_mobile } from "../../utils/responsiveUtils"
import { PostsInterface } from "../../interfaces/postsInterfaces"

interface PostContainerProps {
    postData: PostsInterface
    className?:string
}

const PostContainer:React.FC<PostContainerProps> = ({ className, postData}) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})

    const topSectionEnabled = () => {
        if (postData.description || postData.title || postData.tags) return true
    }

    return (
        <div className={`postContainer postContainer-${className} ${mobileScreen ? 'postContainer-mobile' : ''}`}>
            {topSectionEnabled() && <PostTopSection postData={postData}/>}
            <PostContentSection postData={postData}/>
        </div>
    )
}

export default PostContainer