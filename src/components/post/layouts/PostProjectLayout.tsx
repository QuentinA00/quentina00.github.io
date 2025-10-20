import { FC } from "react"
import { PostInterface } from "../../../interfaces/postsInterfaces"
import PostLinks from "../elements/PostLinks"
import PostKeypoints from "../elements/PostKeypoints"
import PostText from "../elements/PostText"
import MediaComponent from "../elements/PostMedias"
import PostTags from "../elements/PostTags"
import PostTitle from "../elements/PostTitle"
import PostOrigin from "../elements/PostOrigin"

interface PostProjectLayoutProps {
    postData: PostInterface
    tabletScreen: boolean
    mobileScreen: boolean
}

const PostProjectLayout: FC<PostProjectLayoutProps> = ({postData, tabletScreen, mobileScreen}) => {
    return (
        <>
            <div className={`postTopSection ${tabletScreen ? 'postTopSection-mobile' : ''}`}>
                <PostOrigin postOrigin={postData.projectOrigin}/>
                <PostTitle title={postData.title} description={postData.description} showDot={!tabletScreen && !!postData.description} className={mobileScreen ? 'postTitle-mobile' : ''} />
                <PostTags tagsId={postData.tagsId} className='project' />
            </div>
            <div className={`postContentSection postContentSection-project ${tabletScreen ? 'postContentSection-smallerScreen' : ''}`}>
                <MediaComponent medias={postData.medias}/>
                <div className="postContentSection-description">
                    <PostText textParagraphs={postData.postTextParagraphs}/>
                    <div className="divider3"></div>
                    <PostKeypoints keypoints={postData.postTextKeyPoints?.points} keypointsTitle={postData.postTextKeyPoints?.text}/>
                    <PostLinks links={postData.postsLinks} linkTarget='_blank' />
                </div>
            </div>
        </>
    )
}

export default PostProjectLayout