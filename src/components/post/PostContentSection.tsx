import { useMediaQuery } from "react-responsive"
import { screen_mobile } from "../../utils/responsiveUtils"
import MediaComponent from "../MediaComponent"
import { PostsInterface } from "../../interfaces/postsInterfaces"

interface PostContentSectionProps {
    postData: PostsInterface
}

const PostContentSection:React.FC<PostContentSectionProps> = ({postData}) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})

    return (
        <div className={`postContentSection ${mobileScreen ? 'postContentSection-mobile' : ''}`}>
            
            {postData.medias && <div className="postContentSection-medias">
                {postData.medias.map((mediaElement) => {
                    switch (mediaElement.id) {
                        case 'image': return <MediaComponent key={mediaElement.id} mediaData={mediaElement}/>
                        case 'video': return <MediaComponent key={mediaElement.id} mediaData={mediaElement}/>
                        case 'link': return <a key={mediaElement.id} href={mediaElement.linkPath}>{mediaElement.text}</a>
                        default: return null
                    }
                })}
            </div>}

            <div className="postContentSection-text">
                <p>{postData.postText}</p>
                {postData.postsLinks.map((linkItem) => <a key={linkItem.link} className="regularLink" href={linkItem.link}>{linkItem.linkName}</a>)}
            </div>

        </div>
    )
}

export default PostContentSection