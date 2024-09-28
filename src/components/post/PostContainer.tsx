import { useMediaQuery } from "react-responsive"
import PostContentSection from "./PostContentSection"
import PostTopSection from "./PostTopSection"
import { screen_mobile } from "../../utils/responsiveUtils"
import { PostInterface } from "../../interfaces/postsInterfaces"

interface PostContainerProps {

    // data of a single post element
    postData: PostInterface
    
    className?:string
}

const PostContainer:React.FC<PostContainerProps> = ({ className, postData}) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})

    const topSectionEnabled = () => {
        if (postData.id.includes('project')) return true
    }

    return (
        <div className={`postContainer postContainer-${className} ${mobileScreen ? 'postContainer-mobile' : ''}`}>
            {topSectionEnabled() && <PostTopSection postData={postData}/>}
            <PostContentSection postData={postData}/>
        </div>
    )
}

export default PostContainer