import { useMediaQuery } from "react-responsive"
import { screen_mobile, screen_tablet } from "../../utils/responsiveUtils"
import { PostInterface } from "../../interfaces/postsInterfaces"
import { PostVariantProps } from "../../interfaces/globalPropsInterfaces"
import PostOrigin from "./PostOrigin"
import PostTitle from "./PostTitle"
import PostTags from "./PostTags"

interface PostTopSectionProps {
    postData: PostInterface
}

const PostTopSection: React.FC<PostTopSectionProps & PostVariantProps> = ({ postData, variantType }) => {

    // if (variantType === 'presentation') return null

    const isOnTabletScreen = useMediaQuery({ maxWidth: screen_tablet })
    const isOnMobileScreen = useMediaQuery({ maxWidth: screen_mobile })

    return (
        <div className={`postTopSection ${isOnTabletScreen ? 'postTopSection-mobile' : ''}`}>

            <PostOrigin postOrigin={postData.projectOrigin}/>

            <PostTitle title={postData.title} description={postData.description} showDot={!isOnTabletScreen && !!postData.description} className={isOnMobileScreen ? 'postTitle-mobile' : ''}/>

            <PostTags tagsId={postData.tagsId} className={variantType === 'presentation' ? 'presentation' : 'project' }/>

        </div>
    )
}

export default PostTopSection