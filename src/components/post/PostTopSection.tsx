import { useMediaQuery } from "react-responsive"
import ButtonWithIcon from "../ButtonWithIcon"
import Tag from "./Tag"
import { screen_tablet } from "../../utils/responsiveUtils"
import { PostInterface } from "../../interfaces/postsInterfaces"
import { PostVariantProps } from "../../interfaces/globalPropsInterfaces"
import PostOrigin from "./PostOrigin"

interface PostTopSectionProps {
    postData: PostInterface
}

const PostTopSection: React.FC<PostTopSectionProps & PostVariantProps> = ({ postData, variantType }) => {

    // whether the post is from professional or personal account
    const isPersonal = postData.projectOrigin?.includes('Personal')

    const isOnTabletScreen = useMediaQuery({ maxWidth: screen_tablet })

    return (
        <div className={`postTopSection ${isOnTabletScreen ? 'postTopSection-mobile' : ''}`}>

            {/* deprecated */}
            {postData.projectOrigin && <ButtonWithIcon text={postData.projectOrigin} imageName={isPersonal ? 'logo_qvsp_small.jpeg' : 'logo_q_small.jpeg'} />}
            <PostOrigin postOrigin={postData.projectOrigin}/>

            {/* deprecated */}
            {postData.title && <div className="postSectionTop-title">
                <h3>{postData.title}</h3>
                {!isOnTabletScreen && postData.description && <p className="postTopSection-dot">•</p>}
                <p className="postTopSection-description">{postData.description}</p>
            </div>}

            {/* deprecated */}
            <div className="postTopSection-tags">
                {postData.tagsId?.map((tagId) => <Tag key={tagId} tagId={tagId} className={variantType == 'presentation' ? 'presentation' : ''}/>)}
            </div>

        </div>
    )
}

export default PostTopSection