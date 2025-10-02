import { useMediaQuery } from "react-responsive"
import PostContentSection from "./PostContentSection"
import PostTopSection from "./PostTopSection"
import { screen_mobile, screen_tablet } from "../../utils/responsiveUtils"
import { PostInterface } from "../../interfaces/postsInterfaces"
import { PostVariantProps } from "../../interfaces/globalPropsInterfaces"

interface PostContainerProps {
    // data of a single post element
    postData: PostInterface
    className?:string
}

const PostContainer:React.FC<PostContainerProps & PostVariantProps> = ({ className, postData, variantType }) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})
    const tabletScreen = useMediaQuery({maxWidth:screen_tablet})

    return (
        <div 
            className={`
                postContainer 
                ${className ? 'postContainer-'+className : ''}
                ${mobileScreen ? 'postContainer-mobile' : ''}
                ${tabletScreen ? 'postContainer-tablet' : ''}
            `}
        >
            {/* ##### hide the top section in the presentation section */}
            {variantType == 'project' && <PostTopSection postData={postData} variantType={variantType}/>}

            <PostContentSection postData={postData} variantType={variantType}/>
        </div>
    )
}

export default PostContainer