import { FC } from "react"
import { PostInterface } from "../../../interfaces/postsInterfaces"
import PostText from "../elements/PostText"
import PostTags from "../elements/PostTags"
import PostLinks from "../elements/PostLinks"

interface PostPresentationLayoutProps {
    postData:PostInterface
    tabletScreen: boolean
}

const PostPresentationLayout: FC<PostPresentationLayoutProps> = ({postData, tabletScreen}) => {
    return (
        <div className={`postContentSection postContentSection-presentation ${tabletScreen ? 'postContentSection-smallerScreen' : ''}`}>
            <div className="postContentSection-description">
                <PostText textParagraphs={postData.postTextParagraphs} className="presentation"/>
                <div className={`postTopSection ${tabletScreen ? 'postTopSection-mobile' : ''}`}>
                    <PostTags tagsId={postData.tagsId} className='presentation' />
                </div>
                <PostLinks links={postData.postsLinks} linkTarget='_self' />
            </div>
        </div>
    )
}

export default PostPresentationLayout