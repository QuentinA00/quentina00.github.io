import { useMediaQuery } from "react-responsive"
import PostContentSection from "./PostContentSection"
import PostTopSection from "./PostTopSection"
import { screen_mobile, screen_tablet } from "../../utils/responsiveUtils"
import { PostInterface } from "../../interfaces/postsInterfaces"

interface PostContainerProps {

    // data of a single post element
    postData: PostInterface
    
    className?:string
}

const PostContainer:React.FC<PostContainerProps> = ({ className, postData }) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})

    const tabletScreen = useMediaQuery({maxWidth:screen_tablet})

    return (
        <div 
            className={`
                postContainer 
                postContainer-${className} 
                ${mobileScreen ? 'postContainer-mobile' : ''}
                ${tabletScreen ? 'postContainer-tablet' : ''}
            `}
        >
            {/* ##### hide the top section in the presentation section */}
            {postData.id != 'presentation' && <PostTopSection postData={postData}/>}

            <PostContentSection postData={postData}/>
        </div>
    )
}

export default PostContainer